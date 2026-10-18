"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

const slides = [
  {
    prefix: "Light,",
    middle: "shaped",
    suffix: "for you",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90",
  },
  {
    prefix: "Your home,",
    middle: "thought",
    suffix: "for living",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90",
  },
  {
    prefix: "Pure space,",
    middle: "crafted",
    suffix: "with purpose",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
  },
  {
    prefix: "Every wall,",
    middle: "curated",
    suffix: "with mood",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=90",
  },
];

const metrics = [
  { value: "350+", label: "Architectural spaces lit with intention" },
  { value: "4.9/5", label: "Client satisfaction on bespoke living" },
  { value: "100%", label: "Integrated smart control & ambient scenes" },
  { value: "10yr", label: "Engineering quality & architectural warranty" },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const slide = slides[activeSlide];

  // Smooth lightweight parallax scroll motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const goTo = (index: number) =>
    setActiveSlide((index + slides.length) % slides.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="LEIZÛR Hero"
      className="relative min-h-[92svh] w-full overflow-hidden bg-[#050608] lg:min-h-[96svh]"
    >
      {/* Background carousel with lightweight parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <motion.div
            style={{ y: bgY, scale: bgScale }}
            className="absolute -inset-y-12 inset-x-0 bg-cover bg-center"
            style-prop={{ backgroundImage: `url("${slide.image}")` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.image}")` }}
            />
          </motion.div>

          {/* Editorial film overlay scrims */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-black/35" />
        </motion.div>
      </AnimatePresence>

      {/* Main hero grid layout matching reference image */}
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1520px] flex-col justify-between px-6 pb-4 pt-16 sm:px-10 sm:pb-6 sm:pt-24 lg:min-h-[96svh] lg:px-14 lg:pb-7">
        {/* Top spacious editorial typography - "Light, think for you" */}
        <motion.div style={{ y: textY }} className="w-full pt-4 sm:pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full"
            >
              {/* Row 1: Left prefix & right suffix headline */}
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h1 className="editorial-font text-[clamp(2.4rem,5.5vw,5.5rem)] font-light leading-[0.98] tracking-[-0.025em] text-white">
                  {slide.prefix}
                </h1>
                <h2 className="editorial-font text-[clamp(2.4rem,5.5vw,5.5rem)] font-light leading-[0.98] tracking-[-0.025em] text-white sm:text-right">
                  {slide.middle}
                </h2>
              </div>

              {/* Row 2: Centered fluid secondary headline */}
              <div className="mt-1 text-center sm:text-center">
                <span className="editorial-font italic text-[clamp(2.8rem,7vw,6.8rem)] font-light leading-[0.95] tracking-[-0.02em] text-[#fbf578] drop-shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
                  {slide.suffix}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Center / Action link & carousel control */}
        <div className="my-auto flex items-center justify-between py-6">
          <Button href="#services">Explore our services</Button>

          {/* Carousel controls without pagination number */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goTo(activeSlide - 1)}
              aria-label="Previous slide"
              className="grid h-10 w-10 place-items-center bg-black/40 text-white backdrop-blur-md transition-all hover:bg-[#f7eb15] hover:text-black"
              style={{ borderRadius: "0px", border: "none" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo(activeSlide + 1)}
              aria-label="Next slide"
              className="grid h-10 w-10 place-items-center bg-black/40 text-white backdrop-blur-md transition-all hover:bg-[#f7eb15] hover:text-black"
              style={{ borderRadius: "0px", border: "none" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom metrics bar with dotted divider like reference image */}
        <div className="w-full pb-1">
          <div
            className="mb-3 h-[1px] w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
              backgroundSize: "6px 1px",
              backgroundRepeat: "repeat-x",
            }}
          />

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* 4 Stat columns - compact & left-aligned */}
            <div className="flex flex-wrap items-start justify-start gap-x-8 gap-y-4 sm:gap-x-10 lg:gap-x-12">
              {metrics.map((item, index) => (
                <div key={index} className="flex max-w-[190px] flex-col text-left">
                  <span className="display-font text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-[30px] leading-none">
                    {item.value}
                  </span>
                  <span className="mt-1.5 text-xs font-normal leading-relaxed text-white/65 sm:text-[12px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <a
              href="#services"
              className="hidden items-center gap-2 text-xs font-medium tracking-widest text-white/70 transition-colors hover:text-white md:inline-flex"
            >
              <span>Scroll</span>
              <ArrowDown size={14} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
