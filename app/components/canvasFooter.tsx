"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: "sky" | "pink" | "lime";
};

type Wave = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  alpha: number;
  color: string;
};

type Palette = {
  sky: string;
  pink: string;
  lime: string;
};

const LIGHT_PALETTE: Palette = {
  sky: "#3B82F64D",  // ~30%
  pink: "#8B5CF633", // ~20%
  lime: "#10B98133", // ~20%
};

const DARK_PALETTE: Palette = {
  sky: "#3A82FF66",  // ~40% → slightly higher for dark bg
  pink: "#C084FC4D", // ~30%
  lime: "#22C55E4D", // ~30%
};

export function FooterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const getPalette = (): Palette => {
      return document.documentElement.dataset.theme === "dark"
        ? DARK_PALETTE
        : LIGHT_PALETTE;
    };
    let palette = getPalette();
    const waves: Wave[] = [];

    const makeParticles = (width: number, height: number) => {
      particles.length = 0;

      for (let i = 0; i < 220; i += 1) {
        const base = Math.random();
        particles.push({            
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 10 + 1,
          speedX: (Math.random() - 0.005) * 0.1,
          speedY: Math.random() * 0.005 + 0.1,
          opacity: (base * base) * 0.5 + 0.05,
          hue: i % 5 === 0 ? "lime" : i % 2 === 0 ? "pink" : "sky",
        });
      }
    };

    // const makeWaves = (width: number, height: number) => {
    //   waves.length = 0;

    //   for (let i = 0; i < 7; i += 1) {
    //     waves.push({
    //       x: Math.random() * width,
    //       y: Math.random() * height,
    //       radius: Math.random() * 120,
    //       speed: Math.random() * 1.8 + 0.9,
    //       alpha: Math.random() * 0.24 + 0.08,
    //       color: i % 2 === 0 ? "#0ea5e9" : "#ec4899",
    //     });
    //   }
    // };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      makeParticles(canvas.width, canvas.height);
    //   makeWaves(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    let frameId = 0;
    let time = 0;

    const draw = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.x += particle.speedX + Math.sin(time + particle.y * 0.001) * 0.06;
        particle.y -= particle.speedY;

        if (particle.y < -24) {
          particle.y = canvas.height + 24;
          particle.x = Math.random() * canvas.width;
        }

        if (particle.x < -24 || particle.x > canvas.width + 24) {
          particle.x = Math.random() * canvas.width;
        }

        const color =
          particle.hue === "sky"
            ? palette.sky
            : particle.hue === "pink"
              ? palette.pink
              : palette.lime;

        ctx.save();
        ctx.globalAlpha = particle.opacity * (0.8 + Math.sin(time * 4 + particle.x * 0.01) * 0.2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 14;
        ctx.shadowColor = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

    //   for (const wave of waves) {
    //     wave.radius += wave.speed;

    //     if (wave.radius > canvas.width * 1.1) {
    //       wave.x = Math.random() * canvas.width;
    //       wave.y = Math.random() * canvas.height;
    //       wave.radius = 0;
    //     }

    //     ctx.save();
    //     ctx.globalAlpha = wave.alpha * (1 - wave.radius / (canvas.width * 1.1));
    //     ctx.strokeStyle = wave.color;
    //     ctx.setLineDash([4, 8]);
    //     ctx.lineDashOffset = time * 45;

    //     for (let i = 0; i < 3; i += 1) {
    //       ctx.beginPath();
    //       ctx.arc(wave.x, wave.y, wave.radius + i * 20, 0, Math.PI * 2);
    //       ctx.stroke();
    //     }

    //     ctx.restore();
    //   }

      frameId = window.requestAnimationFrame(draw);
    };

    draw();

    const themeObserver = new MutationObserver(() => {
      palette = getPalette();
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />;
}
