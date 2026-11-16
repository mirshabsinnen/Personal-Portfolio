
"use client";

import { useEffect, useState } from "react";

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
  const [activeSection, setActiveSection] = useState("home");

  // Track the section currently visible on screen.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);


const scrollToSection = (href: string) => {
  const target = document.querySelector(href);

  if (!target) return;

  const navbarHeight = 80;
  const targetPosition =
    target.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });

  closeMenu();
};


  return (
    <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/85 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
          }} 
            className="group text-xl font-bold tracking-tight text-gray-950 transition-colors duration-300"
          >
            Mirshab
            <span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
              .
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.href}
                  href={link.href}
                    onClick={(e) => {
                    e.preventDefault();
                   scrollToSection(link.href);
                  }}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ease-out ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 md:inline-flex"
          >
            Let's Talk
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
          >
            <span className="text-xl leading-none">
              {isOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!isOpen}
          inert={!isOpen}
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen
              ? "max-h-[420px] translate-y-0 pb-5 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 pb-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-lg shadow-gray-200/40">
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    aria-current={isActive ? "location" : undefined}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-gray-950 px-5 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
