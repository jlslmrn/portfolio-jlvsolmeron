import { CheckCircle2 } from "lucide-react";

export function Highlights() {
  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--icon-color)]" />
            <span className="font-medium">5+ years experience</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--icon-color)]" />
            <span className="font-medium">Team Lead for 7 developers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--icon-color)]" />
            <span className="font-medium">Enterprise e-commerce systems</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--icon-color)]" />
            <span className="font-medium">API & automation workflows</span>
          </div>
        </div>
      </div>
    </section>
  );
}

