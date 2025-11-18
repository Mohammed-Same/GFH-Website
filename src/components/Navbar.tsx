"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Services" },
    { href: "/locations", label: "Locations" },
    { href: "/careers", label: "Careers" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/landlord-portal", label: "Landlord Portal" },
  ];
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center h-12">
          <Link href="/">
            <img
              src="/gfh_logo.jpeg"
              alt="GFH Telecom Logo"
              className="h-16 w-auto object-contain p-1 cursor-pointer"
              style={{ opacity: 1 }}
            />
          </Link>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-2 text-sm font-medium text-gray-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-150
                    ${isActive ? "bg-[#ff8200] text-white shadow-md" : "hover:text-orange-700"}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/get-started" className="hidden md:inline-block ml-4 px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-sm">Get Started</Link>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col gap-2 py-4 px-6 text-base font-medium text-gray-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 rounded-lg transition-all duration-150
                      ${isActive ? "bg-[#ff8200] text-white shadow-md" : "hover:text-orange-700"}
                    `}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/get-started" className="block mt-2 px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-base text-center" onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
