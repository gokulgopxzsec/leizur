"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

const services = [
  {
    number: "01",
    title: "Leizûr Lights",
    subtitle: "Lighting with intention.",
    description:
      "Layered architectural lighting that makes your interiors feel considered, comfortable and unmistakably yours.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    href: "#contact",
  },
  {
    number: "02",
    title: "Home Automation",
    subtitle: "Intelligence, built in.",
    description:
      "Control your lights and everyday essentials with elegant switches or the simplicity of your voice.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    href: "#contact",
  },
  {
    number: "03",
    title: "Garbage Disposer",
    subtitle: "A cleaner kind of kitchen.",
    description:
      "A practical kitchen upgrade that helps make food-waste handling simpler and your daily routine tidier.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    href: "#contact",
  },
  {
    number: "04",
    title: "Wall Décor",
    subtitle: "The detail that defines it.",
    description:
      "Add dimension and personality with wall finishes and décor chosen to complement the way you live.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    href: "#contact",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative border-b border-white/10 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 flex items-center gap-3 text-xs font-semibold uppercase text-[#f7eb15]">
              <span className="h-px w-8 bg-[#f7eb15]" />
              Designed for everyday living
            </p>
            <h2 className="display-font text-4xl leading-[1.05] tracking-[-.045em] sm:text-5xl lg:text-6xl">
              The details that make<br className="hidden sm:block" /> a house feel like yours.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65 sm:text-base">
            From the right light to the right control, we bring considered upgrades together to make your space work beautifully.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <motion.article
              key={service.number}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.22 }}
              className="service-card group relative isolate flex min-h-[420px] overflow-hidden rounded-sm border border-white/10 bg-[#101216] sm:min-h-[480px] lg:min-h-[540px]"
            >
              <div
                className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                style={{ backgroundImage: `url("${service.image}")` }}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050608] via-[#050608]/55 to-[#050608]/5 transition-colors duration-300 group-hover:from-[#050608]/95" />
              <div className="flex w-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between">
                  <span className="rounded-sm border border-white/25 bg-black/20 px-3 py-1.5 font-mono text-xs text-white/85 backdrop-blur-sm">
                    {service.number}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-sm border border-white/30 bg-black/20 text-white transition-all duration-300 group-hover:border-[#f7eb15] group-hover:bg-[#f7eb15]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="max-w-lg">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-[#fbf578]">
                    {service.subtitle}
                  </p>
                  <h3 className="display-font text-3xl tracking-[-.035em] sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                  <div className="mt-7">
                    <Button href={service.href}>
                      Discover the service
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


