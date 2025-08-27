"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          color: { value: "#06b6d4" },
          links: { enable: true, color: "#06b6d4", distance: 150, opacity: 0.3, width: 1 },
          move: { enable: true, speed: 1 },
          number: { value: 80, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}

