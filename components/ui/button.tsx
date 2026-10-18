import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({
  href,
  children,
  external = false,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const innerContent = (
    <>
      {/* Increased size rotating architectural hexagon emblem */}
      <span className="relative grid h-12 w-12 shrink-0 place-items-center">
        <span
          className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:rotate-60 group-hover:scale-110"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 48 48"
            className="h-10 w-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Architectural regular hexagon */}
            <polygon
              points="24,2 43.8,13.4 43.8,36.6 24,48 4.2,36.6 4.2,13.4"
              fill="#ffffffff"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {/* Directional arrow with enhanced visibility */}
        <span className="relative z-10 text-black transition-transform duration-300">
          <ArrowRight size={20} strokeWidth={2.6} />
        </span>
      </span>

      {/* Button label with increased text size and prominent dashed baseline */}
      <span className="relative flex flex-col pt-0.5">
        <span className="text-[16px] font-normal tracking-wide text-white transition-colors duration-200 sm:text-[16px]">
          {children}
        </span>
        <span
          className="mt-1 w-full border-b-[0.4px] border-dashed border-white/25 transition-all duration-300"
          aria-hidden="true"
        />
      </span>
    </>
  );

  const sharedClasses = `group relative inline-flex items-center gap-4 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7eb15] select-none cursor-pointer text-white ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        onClick={onClick}
        className={sharedClasses}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={sharedClasses}>
      {innerContent}
    </button>
  );
}
