import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { InstagramIcon, LinkedInIcon } from "../ui/social-icons";

const whatsappLink =
  "https://wa.me/910000000000?text=Hello%20LEIZ%C3%9BR%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.";

export function Footer() {
  return (
    <footer className="relative bg-[#050608]">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 xl:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
          <div className="max-w-sm">
            <a href="#home" aria-label="LEIZÛR home" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo/logo2.png"
                alt="LEIZÛR"
                width={148}
                height={42}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="mt-6 text-sm leading-7 text-white/60">
              Considered lighting, intuitive home automation and thoughtful
              finishing touches for a home that feels unmistakably yours.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-sm border border-white/15 text-white/65 transition-all hover:border-[#f7eb15] hover:bg-[#f7eb15] hover:text-white"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-sm border border-white/15 text-white/65 transition-all hover:border-[#f7eb15] hover:bg-[#f7eb15] hover:text-white"
              >
                <LinkedInIcon size={17} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">Explore</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a className="footer-link" href="#about">
                  About LEIZÛR
                </a>
              </li>
              <li>
                <a className="footer-link" href="#services">
                  Our services
                </a>
              </li>
              <li>
                <a className="footer-link" href="#partners-title">
                  Our partners
                </a>
              </li>
              <li>
                <a className="footer-link" href="#contact">
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">Our services</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#services" className="group block">
                  <span className="footer-link text-white/80">Leizûr Lights</span>
                  <span className="mt-1 block text-xs text-white/40">Atmosphere by design</span>
                </a>
              </li>
              <li>
                <a href="#services" className="group block">
                  <span className="footer-link text-white/80">Home Automation</span>
                  <span className="mt-1 block text-xs text-white/40">Switch. Speak. Simplify.</span>
                </a>
              </li>
              <li>
                <a href="#services" className="group block">
                  <span className="footer-link text-white/80">Garbage Disposer</span>
                  <span className="mt-1 block text-xs text-white/40">A cleaner kitchen routine</span>
                </a>
              </li>
              <li>
                <a href="#services" className="group block">
                  <span className="footer-link text-white/80">Wall Décor</span>
                  <span className="mt-1 block text-xs text-white/40">Finishing touches</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">Let’s connect</h3>
            <p className="mb-4 text-sm leading-6 text-white/55">
              Have a project in mind? We’d love to hear what you’re planning.
            </p>
            <a
              href="tel:+910000000000"
              className="mb-3 flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-[#fbf578]"
            >
              <Phone size={16} className="text-[#f7eb15]" /> +91 00000 00000
            </a>
            <div className="mt-4">
              <Button href={whatsappLink} external>
                Talk to LEIZÛR
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LEIZÛR. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#home" className="footer-link">
              Back to top ↑
            </a>
            <span>Designed for better living.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


