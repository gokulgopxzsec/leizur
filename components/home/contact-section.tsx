import { Check } from "lucide-react";
import { Button } from "../ui/button";

const whatsappLink =
  "https://wa.me/910000000000?text=Hello%20LEIZ%C3%9BR%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="cta-panel relative isolate overflow-hidden rounded-sm border border-[#f7eb15]/40 bg-[#f7eb15]">
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="cta-lines absolute inset-0" />
            <div className="absolute -right-20 -top-36 h-[440px] w-[440px] rounded-full border border-white/50" />
            <div className="absolute -right-4 -top-20 h-[320px] w-[320px] rounded-full border border-white/40" />
            <div className="absolute right-14 top-0 h-[200px] w-[200px] rounded-full border border-white/30" />
          </div>
          <div className="grid items-center gap-10 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:p-14 lg:p-20">
            <div className="max-w-3xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-white/75">
                <span className="h-px w-8 bg-white" />
                Your next chapter starts at home
              </p>
              <h2 className="display-font text-4xl leading-[1.03] tracking-[-.045em] sm:text-5xl lg:text-7xl">
                Let’s make your space work beautifully.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
                Tell us what you’re imagining. We’ll help you explore the right details, solutions and
                possibilities for your home.
              </p>
            </div>
            <div className="md:justify-self-end">
              <div className="rounded-sm bg-[#050608]/90 p-4 backdrop-blur-sm sm:p-5">
                <Button href={whatsappLink} external>
                  Talk to us on WhatsApp
                </Button>
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-white/75">
                <Check size={14} /> A real conversation, no pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


