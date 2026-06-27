"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import MobileNav from "./MobileNav";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Actualités", href: "/actualites" },
  { label: "L’Association", href: "/association" },
  { label: "Réseau des Clubs", href: "/reseaux" },
  { label: "Partenariats", href: "/partenariats" },
  { label: "Événements", href: "/evenements" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-100 shadow-sharp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display font-bold text-2xl text-premium-dark tracking-tight">
              AUPRO<span className="text-royal">HADA</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-royal font-medium transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-royal after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bouton CTA */}
          <div className="hidden lg:flex">
            <Button href="/reseaux" variant="royal" size="sm">
              Adhérer
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t-2 border-gray-100">
          <MobileNav items={navItems} onClose={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );
}