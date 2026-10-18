"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "../ui/button";
import { InstagramIcon, LinkedInIcon } from "../ui/social-icons";

const navItems = [
  ["Leizûr Lights", "#services"],
  ["Home Automation", "#services"],
  ["Garbage Disposer", "#services"],
  ["Wall Décor", "#services"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger boxed floating state after scrolling past initial area (30px)
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  return (
    <>
      {/* Fixed Header container attached to viewport */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Top announcement bar */}
        {/* <div
          className={`hidden border-b border-white/10 pointer-events-auto transition-all duration-300 md:block ${
            isScrolled ? "h-0 opacity-0 overflow-hidden border-none bg-black/90" : "h-auto opacity-100 bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2.5 text-xs tracking-wide text-white/65 lg:px-10">
            <p>Thoughtful technology. Considered living.</p>
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#f7eb15]"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-[#f7eb15]"
              >
                <LinkedInIcon size={14} />
              </a>
              <span className="h-3 w-px bg-white/20" />
              <a
                href="tel:+910000000000"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={13} /> +91 00000 00000
              </a>
            </div>
          </div>
        </div> */}

        {/* Main boxed navigation */}
        <header
          className={`pointer-events-auto w-full transition-all duration-500 ease-out ${isScrolled ? "pt-3 pb-2 px-4 sm:px-8" : "pt-0 pb-0 px-0"
            }`}
        >
          <div
            className={`mx-auto transition-all duration-500 ease-out ${isScrolled
              ? "max-w-[1240px] bg-[#050608]/95 backdrop-blur-2xl"
              : "w-full max-w-full bg-transparent backdrop-blur-none"
              }`}
            style={{
              borderRadius: "0px",
              boxShadow: "none",
              border: "none",
            }}
          >
            <div
              className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${isScrolled
                ? "h-[66px] px-6 lg:px-9"
                : "h-[78px] max-w-[1440px] px-5 sm:px-6 lg:px-10"
                }`}
            >
              <a href="#home" aria-label="LEIZÛR home" className="inline-flex items-center gap-2.5">
                <Image
                  src="/logo/logo2.png"
                  alt="LEIZÛR"
                  width={148}
                  height={42}
                  priority
                  className={`w-auto object-contain transition-all duration-500 ease-out ${isScrolled ? "h-10" : "h-12"
                    }`}
                />
              </a>

              <nav aria-label="Main navigation" className="hidden items-center gap-8 xl:flex">
                {navItems.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="group relative pb-1 text-[13.5px] font-medium tracking-wide text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <span>{label}</span>
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      style={{
                        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "6px 1px",
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "bottom",
                      }}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </nav>

              <div className="hidden xl:block">
                <Button href="#contact">Contact us</Button>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="grid h-11 w-11 place-items-center bg-white/5 text-white transition-colors hover:bg-[#f7eb15] hover:text-black xl:hidden"
                style={{
                  borderRadius: "0px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile navigation drawer */}
            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden bg-[#0c0d10]"
                  style={{
                    borderRadius: "0px",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <div className="flex flex-col px-6 py-5 sm:px-8">
                    {navItems.map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="py-3.5 text-sm font-medium text-white/80 transition-colors hover:text-[#f7eb15]"
                      >
                        {label}
                      </a>
                    ))}
                    <div className="mt-6 pt-3">
                      <Button
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                      >
                        Contact us
                      </Button>
                    </div>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </header>
      </div>
    </>
  );
}
