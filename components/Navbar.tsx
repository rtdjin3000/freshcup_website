"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Find Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md shadow-black/5 backdrop-blur-md"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center" aria-label="Fresh Cup Bubble Tea & Café home">
          <Image
            src="/images/logo-horizontal.png"
            alt="Fresh Cup Bubble Tea & Café"
            width={832}
            height={240}
            className="h-9 w-auto md:h-11"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "bg-brand-mint text-brand-green shadow-md shadow-brand-green/20"
                      : "text-brand-greenDark/80 hover:bg-brand-mint/60 hover:text-brand-green hover:shadow-md hover:shadow-brand-green/10"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${restaurant.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-brand-greenDark hover:text-brand-green hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" />
            {restaurant.phoneDisplay}
          </a>
          <Link href="/menu" className="btn-primary px-5 py-2.5 text-sm">
            Order Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-3 text-brand-greenDark hover:bg-brand-mint/50 transition-colors md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-black/5 bg-white md:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        } transition-[max-height] duration-300`}
      >
        <ul className="container-x flex flex-col gap-2 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`block rounded-2xl px-4 py-4 text-base font-bold transition-all ${
                  pathname === l.href
                    ? "bg-brand-mint text-brand-green shadow-md"
                    : "text-brand-greenDark hover:bg-brand-cream"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-3 flex flex-col gap-3 px-1">
            <a
              href={`tel:${restaurant.phone}`}
              className="btn-outline w-full px-4 py-4 font-bold min-h-[48px]"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <Link href="/menu" className="btn-primary w-full px-4 py-4 font-bold min-h-[48px]">
              📋 Order Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
