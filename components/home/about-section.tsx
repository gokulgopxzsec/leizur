import { Button } from "../ui/button";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="about-banner relative isolate overflow-hidden rounded-sm border border-white/10 bg-[#14100b]">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-65"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85')",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-[#050608]/35" />
          <div className="grid min-h-[440px] items-center gap-10 p-7 sm:p-10 md:min-h-[480px] md:grid-cols-[1.2fr_.8fr] md:p-14 lg:p-20">
            <div className="max-w-3xl">
              <p className="eyebrow mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-[#fbf578]">
                <span className="h-px w-8 bg-[#f7eb15]" />
                A more considered way to live
              </p>
              <h2 className="display-font text-4xl leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-7xl">
                Technology should feel like <span className="text-[#f7eb15]">living better.</span>
              </h2>
            </div>
            <div className="max-w-md md:justify-self-end">
              <p className="text-base leading-7 text-white/75">
                LEIZÛR brings together lighting, intuitive home controls, practical kitchen solutions
                and expressive décor. Every detail has a purpose: to make your space more comfortable,
                more personal and easier to enjoy.
              </p>
              <div className="mt-7">
                <Button href="#contact">
                  A little more about us
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#f7eb15]" />
        </div>
      </div>
    </section>
  );
}


