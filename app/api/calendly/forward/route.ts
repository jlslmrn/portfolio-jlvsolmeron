import { NextRequest, NextResponse } from "next/server";

type CaptureMethod = "event_payload" | "intercepted_invitees_response";

type ForwardRequestBody = {
  event?: unknown;
  payload?: unknown;
  capture_method?: unknown;
  captured_invitees_response?: unknown;
  client_context?: unknown;
};

type CalendlyEnrichment = {
  invitee?: unknown;
  event?: unknown;
  errors?: string[];
};

const CALENDLY_API_BASE = "https://api.calendly.com";
const CALENDLY_SOURCE = "calendly_widget";

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getNestedString(obj: Record<string, unknown>, path: string[]): string | undefined {
  let current: unknown = obj;
  for (const segment of path) {
    if (!isObject(current) || typeof current[segment] === "undefined") {
      return undefined;
    }
    current = current[segment];
  }
  return typeof current === "string" ? current : undefined;
}

function isValidCaptureMethod(value: unknown): value is CaptureMethod {
  return value === "event_payload" || value === "intercepted_invitees_response";
}

function getCalendlyApiPathFromUri(uri: string): string | null {
  try {
    const parsed = new URL(uri);
    if (parsed.hostname !== "api.calendly.com") {
      return null;
    }
    return `${parsed.pathname}${parsed.search}`;
  } catch {
    return null;
  }
}

async function fetchCalendlyResource(resourceUri: string, token: string): Promise<unknown> {
  const apiPath = getCalendlyApiPathFromUri(resourceUri);
  if (!apiPath) {
    throw new Error(`Unsupported Calendly API URI: ${resourceUri}`);
  }

  const response = await fetch(`${CALENDLY_API_BASE}${apiPath}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Calendly API ${response.status}: ${details.slice(0, 400)}`);
  }

  return response.json();
}

async function buildEnrichment(
  payload: Record<string, unknown>,
  calendlyToken: string | undefined
): Promise<CalendlyEnrichment | null> {
  if (!calendlyToken) {
    return null;
  }

  const inviteeUri = getNestedString(payload, ["invitee", "uri"]);
  const eventUri = getNestedString(payload, ["event", "uri"]);

  if (!inviteeUri && !eventUri) {
    return null;
  }

  const enrichment: CalendlyEnrichment = {};
  const errors: string[] = [];

  if (inviteeUri) {
    try {
      enrichment.invitee = await fetchCalendlyResource(inviteeUri, calendlyToken);
    } catch (error) {
      errors.push(error instanceof Error ? error.message : "Failed to fetch invitee resource");
    }
  }

  if (eventUri) {
    try {
      enrichment.event = await fetchCalendlyResource(eventUri, calendlyToken);
    } catch (error) {
      errors.push(error instanceof Error ? error.message : "Failed to fetch event resource");
    }
  }

  if (errors.length > 0) {
    enrichment.errors = errors;
  }

  return enrichment;
}

export async function POST(request: NextRequest) {
  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
  const n8nCustomHeaderName = process.env.N8N_CUSTOM_HEADER_NAME;
  const n8nCustomHeaderValue = process.env.N8N_CUSTOM_HEADER_VALUE;
  const calendlyPat = process.env.CALENDLY_PAT;

  if (!n8nWebhookUrl) {
    return NextResponse.json(
      { error: "Server misconfiguration: missing N8N_WEBHOOK_URL." },
      { status: 500 }
    );
  }

  let parsedBody: ForwardRequestBody;
  try {
    parsedBody = (await request.json()) as ForwardRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const {
    event,
    payload,
    capture_method,
    captured_invitees_response,
    client_context,
  } = parsedBody;
  if (typeof event !== "string" || event.trim().length === 0) {
    return NextResponse.json({ error: "Invalid body: event is required." }, { status: 400 });
  }
  if (!isObject(payload)) {
    return NextResponse.json({ error: "Invalid body: payload must be an object." }, { status: 400 });
  }
  if (!isValidCaptureMethod(capture_method)) {
    return NextResponse.json({ error: "Invalid body: capture_method is not supported." }, { status: 400 });
  }

  const timestamp = new Date().toISOString();
  const normalizedClientContext = isObject(client_context) ? client_context : {};
  const normalizedCapturedInviteesResponse = isObject(captured_invitees_response)
    ? captured_invitees_response
    : null;
  const enrichment = await buildEnrichment(payload, calendlyPat);


  const outboundPayload = {
    source: CALENDLY_SOURCE,
    timestamp,
    event,
    payload,
    capture_method,
    captured_invitees_response: normalizedCapturedInviteesResponse,
    client_context: {
      page_url:
        typeof normalizedClientContext.page_url === "string"
          ? normalizedClientContext.page_url
          : request.headers.get("referer"),
      user_agent:
        typeof normalizedClientContext.user_agent === "string"
          ? normalizedClientContext.user_agent
          : request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for"),
    },
    calendly_enrichment: enrichment,
  };

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (n8nCustomHeaderName && n8nCustomHeaderValue) {
    headers[n8nCustomHeaderName] = n8nCustomHeaderValue;
  }

  try {
    const webhookResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(outboundPayload),
      cache: "no-store",
    });

    if (!webhookResponse.ok) {
      const details = await webhookResponse.text();
      console.error("[Calendly Forward] n8n webhook responded with error", {
        status: webhookResponse.status,
        details: details.slice(0, 400),
      });

      return NextResponse.json(
        {
          error: "Failed to forward payload to webhook.",
          status: webhookResponse.status,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      forwarded_at: timestamp,
      capture_method,
      enriched: enrichment !== null,
    });
  } catch (error) {
    console.error("[Calendly Forward] Unexpected forwarding error", error);
    return NextResponse.json({ error: "Unexpected forwarding error." }, { status: 500 });
  }
}
