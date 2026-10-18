"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "../ui/social-icons";

interface ContactIslandProps {
  phone?: string;
  phoneHref?: string;
  whatsappHref?: string;
}

export function ContactIsland({
  phone = "+91 00000 00000",
  phoneHref = "tel:+910000000000",
  whatsappHref = "https://wa.me/910000000000?text=Hello%20LEIZ%C3%9BR%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.",
}: ContactIslandProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show contact island once user starts scrolling (past 60px)
      setIsVisible(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Quick contact"
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 pointer-events-auto"
        >
          <div
            className="group relative flex items-center bg-[#f7eb15] px-4 py-2.5 text-black transition-all duration-300 hover:bg-[#fff74a]"
            style={{
              borderRadius: "0px",
              border: "none",
              boxShadow: "0 10px 30px -8px rgba(0,0,0,0.5)",
            }}
          >
            {/* Corner architectural ticks */}
            <span
              className="pointer-events-none absolute -top-1 -left-1 h-2 w-2 border-l border-t border-gray-100"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute -bottom-1 -right-1 h-2 w-2 border-r border-b border-gray-100"
              aria-hidden="true"
            />

            {/* Phone Action */}
            <a
              href={phoneHref}
              className="group/phone flex items-center gap-2 text-[13px] font-medium tracking-normal text-black transition-opacity hover:opacity-75"
            >
              <Phone size={14} strokeWidth={2.25} className="text-black shrink-0" />
              <span className="relative pb-0.5">
                <span>{phone}</span>
                {/* Dotted underline under the text only */}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-[1px] opacity-0 transition-opacity duration-200 group-hover/phone:opacity-100"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #000000 1px, transparent 1px)",
                    backgroundSize: "5px 1px",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "bottom",
                  }}
                  aria-hidden="true"
                />
              </span>
            </a>

            {/* Architectural divider */}
            <span className="mx-3 h-3.5 w-px bg-black/25" aria-hidden="true" />

            {/* WhatsApp Chat link */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="group/wa flex items-center gap-2 text-[13px] font-medium tracking-normal text-black transition-opacity hover:opacity-75"
            >
              <WhatsAppIcon size={14} strokeWidth={2.25} className="text-black shrink-0" />
              <span className="relative pb-0.5">
                <span className="hidden sm:inline">WhatsApp</span>
                {/* Dotted underline under the text only */}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-[1px] opacity-0 transition-opacity duration-200 group-hover/wa:opacity-100"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #000000 1px, transparent 1px)",
                    backgroundSize: "5px 1px",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "bottom",
                  }}
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
