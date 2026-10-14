import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <main className="px-6 md:px-12 py-12 max-w-7xl mx-auto space-y-24">
      {/* 01. HERO INTRO */}
      <section className="space-y-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#e7ff39] shadow-[0_0_8px_#e7ff39]" />
            LEIZÛR / ARCHITECTURAL SYSTEMS
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            One platform for your <br />
            <span className="text-[#e7ff39]">entire living space.</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl">
            From smart gates and circadian lighting to sink-mounted food waste cutters and acoustic wall decor—engineered to work together without rewiring.
          </p>
        </div>

        {/* THE CINEMATIC 4-PILLAR HERO SLIDER */}
        <HeroSlider />
      </section>

      {/* 02. SECTION TWO PLACEHOLDER */}
    </main>
  );
}