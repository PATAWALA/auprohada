"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

interface MobileNavProps {
  structure: NavItem[];
  onClose: () => void;
}

export default function MobileNav({ structure, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="px-4 py-6 space-y-1 bg-white">
      {structure.map((item) =>
        item.children ? (
          <div key={item.label}>
            <button
              onClick={() => setExpanded(expanded === item.label ? null : item.label)}
              className="flex items-center justify-between w-full text-left text-gray-700 hover:text-royal font-medium text-lg py-3 pl-4 border-l-2 border-transparent hover:border-gold transition-colors"
            >
              {item.label}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  expanded === item.label ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {expanded === item.label && (
              <div className="pl-6 mt-1 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href || "#"}
                    onClick={onClose}
                    className="block text-gray-600 hover:text-royal text-base py-2 pl-4 border-l-2 border-transparent hover:border-gold/50 transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href || "#"}
            onClick={onClose}
            className="block text-gray-700 hover:text-royal font-medium text-lg py-3 pl-4 border-l-2 border-transparent hover:border-gold transition-colors"
          >
            {item.label}
          </Link>
        )
      )}
      <div className="pt-6 border-t border-gold/20 mt-6">
        <Button href="/reseaux" variant="gold" className="w-full">
          Rejoindre l’AUPROHADA
        </Button>
      </div>
    </div>
  );
}