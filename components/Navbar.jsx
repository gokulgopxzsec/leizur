"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/smart-automation", label: "Smart Intelligent Automation" },
    { href: "/lights", label: "Lights" },
    { href: "/ecosmart-kitchen", label: "Ecosmart Kitchen" },
    { href: "/fabric-wall-covering", label: "Fabric Wall Covering" },
  ];

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-[#222] bg-[#090909]/85 backdrop-blur-md px-6 md:px-12 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2.5 tracking-wider font-extrabold text-base">
        <span className="w-7 h-7 bg-[#e7ff39] text-black font-black grid place-items-center -skew-x-6 text-sm">
          L
        </span>
        <span className="tracking-widest">LEIZÛR</span>
      </Link>

      <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-wider text-neutral-400">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/contact"
          className="border border-neutral-700 hover:border-[#e7ff39] hover:text-[#e7ff39] px-4 py-2 text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
        >
          Book Consultation <ArrowUpRight size={14} />
        </Link>
      </div>

      <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="Toggle Menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-[#090909] border-b border-[#222] p-6 flex flex-col gap-4 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-[#e7ff39]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#e7ff39] text-black text-center py-3 text-xs uppercase font-bold tracking-wider"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}