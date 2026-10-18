"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  SunMedium,
  UtensilsCrossed,
  Layers,
} from "lucide-react";

const slides = [
  {
    id: "automation",
    eyebrow: "01 / ARCHITECTURAL AUTOMATION",
    title: "Smart Home Automation",
    highlight: "Gates, Curtains & Irrigation",
    description:
      "Automate motorized drapes, front perimeter gates, and scheduled drip irrigation into one quiet background routine. No multiple apps or wall clutter.",
    tags: ["Motorized Curtains", "Gate Access", "Smart Irrigation", "Water Level Tracking"],
    icon: ShieldCheck,
    // Background architectural scene
    bgImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    // Product hardware preview (points to your local switchboard image)
    productImage: "/images/switchboard.png",
    productBadge: "CAPACITIVE GLASS TOUCH",
    productCaption: "Flush 6-gang glass panel with dual-color LED status rings",
  },
  {
    id: "lights",
    eyebrow: "02 / ARCHITECTURAL ILLUMINATION",
    title: "Leizûr Lights",
    highlight: "Ambiance That Moves With You",
    description:
      "Transition seamlessly from bright, daylight task lighting to warm, low-intensity evening glow. Scenes adjust automatically as day turns to night.",
    tags: ["Circadian Rhythm", "Cove Dimmers", "Vacation Security Mode", "Alexa & Google Sync"],
    icon: SunMedium,
    bgImage:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2053&auto=format&fit=crop",
    // Product hardware preview
    productImage:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop",
    productBadge: "INTELLIGENT SCENE CONTROLLER",
    productCaption: "Stepless dimming and preset scene transitions for cove and pendant fixtures",
  },
  {
    id: "kitchen",
    eyebrow: "03 / CULINARY WORKSPACE",
    title: "Ecosmart Kitchen",
    highlight: "In-Sink Waste Cutters & Smart Air",
    description:
      "Heavy-duty food waste garbage disposal cutters mounted directly inside the sink drain for instant organic waste disposal, paired with automated ventilation and targeted counter task lighting.",
    tags: ["Sink Food Waste Disposers", "Automated Extraction", "Counter Task Lights", "Load Management"],
    icon: UtensilsCrossed,
    bgImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
    // In-sink disposal unit showcase
    productImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    productBadge: "IN-SINK GARBAGE DISPOSAL CUTTER",
    productCaption: "High-torque continuous-feed grinder fitted flush beneath the sink drain",
  },
  {
    id: "decor",
    eyebrow: "04 / TACTILE ACOUSTICS",
    title: "Fabric Wall Covering",
    highlight: "Kill Echoes, Add Warmth",
    description:
      "Large-format acoustic fabric wall systems that absorb room flutter and chatter bouncing off marble, tile, and glass, creating a quiet space that frames your wall panels flush.",
    tags: ["Acoustic Sound Absorption", "Custom Textures", "Flush Wall Integration", "Luxury Finishes"],
    icon: Layers,
    bgImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    // Fabric texture showcase
    productImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    productBadge: "ACOUSTIC FABRIC SYSTEM",
    productCaption: "Engineered sound-dampening architectural textiles available in custom palettes",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const Icon = slide.icon;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 min-h-[640px] md:min-h-[700px] flex flex-col justify-between">
      {/* 1. DYNAMIC BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.bgImage}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.15]"
            />
          </motion.div>
        </AnimatePresence>
        {/* Scrim Gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 z-1" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-1" />
      </div>

      {/* 2. TOP SLIDER BAR: TABS & CONTROLS */}
      <div className="relative z-10 p-6 md:p-8 flex flex-wrap items-center justify-between border-b border-neutral-800/80 gap-4 bg-black/30 backdrop-blur-md">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrent(idx)}
              className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded transition-all cursor-pointer ${
                current === idx
                  ? "bg-[#e7ff39] text-black font-bold shadow-[0_0_12px_#e7ff39]"
                  : "bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              0{idx + 1} {s.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-9 h-9 rounded-full border border-neutral-700 bg-neutral-900/80 text-white flex items-center justify-center hover:border-[#e7ff39] hover:text-[#e7ff39] transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 rounded-full border border-neutral-700 bg-neutral-900/80 text-white flex items-center justify-center hover:border-[#e7ff39] hover:text-[#e7ff39] transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* 3. SLIDE CONTENT: COPY (LEFT) & PRODUCT SHOWCASE (RIGHT) */}
      <div className="relative z-10 px-6 md:px-12 py-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Descriptive Copy */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#e7ff39] tracking-widest uppercase">
                  <Icon size={16} />
                  <span>{slide.eyebrow}</span>
                </div>

                <div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl font-light text-neutral-300 mt-2">
                    {slide.highlight}
                  </p>
                </div>

                <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {slide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs px-3 py-1.5 rounded-full font-mono backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Physical Product Showcase Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-product"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                className="relative rounded-xl border border-neutral-800 bg-neutral-950/80 p-5 backdrop-blur-md shadow-2xl"
              >
                {/* Product Badge */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800/80">
                  <span className="font-mono text-[10px] text-[#e7ff39] tracking-wider uppercase">
                    {slide.productBadge}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#e7ff39] shadow-[0_0_8px_#e7ff39]" />
                </div>

                {/* Product Image Stage */}
                <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden bg-black/60 flex items-center justify-center p-3">
                  <img
                    src={slide.productImage}
                    alt={slide.productBadge}
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Micro Caption */}
                <p className="mt-3 text-xs text-neutral-400 font-mono leading-relaxed">
                  {slide.productCaption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM FOOTER BAR */}
      <div className="relative z-10 p-6 md:p-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black/50 backdrop-blur-md">
        <div className="text-xs font-mono text-neutral-400 flex items-center gap-3">
          <span>ZERO REWIRING</span>
          <span className="text-neutral-700">|</span>
          <span className="text-[#e7ff39]">STANDARD BACK-BOX RETROFIT</span>
        </div>

        <Link
          href={`/${slide.id === "automation" ? "smart-automation" : slide.id === "decor" ? "fabric-wall-covering" : slide.id}`}
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-black bg-[#e7ff39] px-5 py-2.5 rounded hover:brightness-110 transition-all cursor-pointer"
        >
          Explore System <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}