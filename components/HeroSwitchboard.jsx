"use client";

import { useState } from "react";
import Image from "next/image";
import { Power } from "lucide-react";

const controls = [
  { id: "lights", label: "Cove Lights", x: "33.6%", y: "33.5%" },
  { id: "curtains", label: "Drapes", x: "41.6%", y: "33.5%" },
  { id: "gate", label: "Front Gate", x: "49.6%", y: "33.5%" },
  { id: "irrigation", label: "Irrigation", x: "33.6%", y: "43.3%" },
  { id: "water", label: "Water Tank", x: "41.6%", y: "43.3%" },
  { id: "security", label: "Perimeter", x: "49.6%", y: "43.3%" },
];

export default function HeroSwitchboard() {
  const [active, setActive] = useState({
    lights: false,
    curtains: false,
    gate: false,
    irrigation: false,
    water: true,
    security: true,
  });

  const toggle = (id) => setActive((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141414] border border-[#222] p-6 md:p-10 rounded-xl">
      {/* Visual Space Output */}
      <div className="lg:col-span-7 relative h-72 md:h-96 rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center">
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-amber-950/30 to-transparent transition-opacity duration-700 ${
            active.lights ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="relative text-center z-10 space-y-2 px-4">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Live Room Status</p>
          <p className="text-2xl font-bold tracking-tight">
            {active.lights ? "Ambient Warm Glow Active" : "Standby Mode"}
          </p>
          <p className="font-mono text-xs text-[#e7ff39]">
            {Object.values(active).filter(Boolean).length} Systems Armed
          </p>
        </div>
      </div>

      {/* Hardware Panel */}
      <div className="lg:col-span-5 flex flex-col items-center">
        <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-4">
          Tap Hotspot to Test Hardware
        </p>

        <div className="relative w-full max-w-sm aspect-[4/3]">
          <Image
            src="/images/switchboard.png"
            alt="Leizûr Glass Touch Switchboard"
            fill
            className="object-contain"
            priority
          />

          {controls.map(({ id, label, x, y }) => (
            <button
              key={id}
              onClick={() => toggle(id)}
              style={{ left: x, top: y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full group cursor-pointer z-10"
              aria-label={label}
            >
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  active[id]
                    ? "bg-[#e7ff39] glow-yellow opacity-90 scale-110"
                    : "bg-cyan-400/30 opacity-0 group-hover:opacity-75"
                }`}
              />
              <span className="sr-only">{label}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-neutral-500">
          <Power size={12} className="text-[#e7ff39]" />
          <span>LOCAL MESH BUS · READY</span>
        </div>
      </div>
    </div>
  );
}