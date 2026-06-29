"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import MobileNav from "./MobileNav";

const navStructure = [
  { label: "Accueil", href: "/" },
  {
    label: "L’Association",
    href: "/association",
    children: [
      { label: "Notre Histoire", href: "/#histoire" },
      { label: "Bureau National", href: "/association" },
      { label: "Réseau des Clubs", href: "/reseaux" },
    ],
  },
  {
    label: "Actualités & Événements",
    href: "/actualites",
    children: [
      { label: "Actualités", href: "/actualites" },
      { label: "Événements", href: "/evenements" },
    ],
  },
  {
    label: "Partenariats",
    href: "/partenariats",
    children: [
      { label: "Devenir Partenaire", href: "/partenariats" },
      { label: "Librairie Juridique", href: "/#librairie" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gold/20 shadow-sharp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + slogan */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpg"
              alt="AUPROHADA"
              width={36}
              height={36}
              className="flex-shrink-0"
              priority
            />
            <span className="font-display font-bold text-2xl tracking-tight text-premium-dark">
              UPRO<span className="text-royal">HADA</span>
            </span>
            {/* Fine ligne verticale dorée */}
            <span className="hidden sm:block w-px h-8 bg-gold/40 mx-2" />
            <span className="hidden sm:block text-xs text-gray-500 uppercase tracking-widest leading-tight max-w-[120px]">
              L’excellence du droit des affaires
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
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
                  <div className="absolute top-full left-0 w-full h-3 -mt-1" />
                  <div className="absolute top-[calc(100%+4px)] left-0 bg-white border border-gray-100 shadow-sharp py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 delay-75 z-50">
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

          {/* CTA */}
          <div className="hidden lg:flex">
            <Button href="/reseaux" variant="gold" size="sm">
              Rejoindre l’AUPROHADA
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

      {mobileOpen && (
        <div className="lg:hidden border-t border-gold/20">
          <MobileNav structure={navStructure} onClose={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );
}