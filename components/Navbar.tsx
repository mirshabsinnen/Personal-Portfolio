
"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 mx-auto max-w-6xl px-6 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          Mirshab<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 text-sm text-gray-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-black hover:text-white md:inline-flex"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 md:hidden"
        >
          {isOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-6 right-6 top-full mt-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg md:hidden"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
