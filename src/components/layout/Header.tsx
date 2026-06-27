"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import MobileNav from "./MobileNav";

const navStructure = [
  { label: "Accueil", href: "/" },
  {
    label: "L’Association",
    href: "/association",
    children: [
      { label: "Notre mission", href: "/association" },
      { label: "Bureau National", href: "/association#bureau" },
      { label: "Réseau des Clubs", href: "/reseaux" },
    ],
  },
  {
    label: "Activités",
    href: "/actualites",
    children: [
      { label: "Actualités", href: "/actualites" },
      { label: "Événements", href: "/evenements" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gold/20 shadow-sharp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="w-9 h-9 bg-gold flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-white text-lg leading-none">A</span>
            </span>
            <span className="font-display font-bold text-2xl tracking-tight text-premium-dark">
              UPRO<span className="text-royal">HADA</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navStructure.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="relative text-gray-600 hover:text-royal font-medium transition-colors py-2 text-sm uppercase tracking-wider inline-flex items-center gap-1"
                  >
                    {item.label}
                    <svg
                      className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>

                  {/* Pont invisible */}
                  <div className="absolute top-full left-0 w-full h-3 -mt-1" />

                  {/* Dropdown */}
                  <div className="absolute top-[calc(100%+4px)] left-0 bg-white border border-gray-100 shadow-sharp py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 delay-75 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-royal hover:bg-premium-light transition-colors relative pl-6 before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gold before:opacity-0 hover:before:opacity-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-gray-600 hover:text-royal font-medium transition-colors py-2 text-sm uppercase tracking-wider group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* Boutons CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/partenariats" variant="outline" size="sm">
              Partenariats
            </Button>
            <Button href="/reseaux" variant="gold" size="sm">
              Rejoindre
            </Button>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-premium-dark focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gold/20">
          <MobileNav structure={navStructure} onClose={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );
}