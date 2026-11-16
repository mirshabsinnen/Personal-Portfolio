
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

          
          {/* Desktop Social Links + Contact Button */}
          <div className="hidden items-center gap-4 md:flex">

            {/* GitHub */}
            <a
              href="https://github.com/mirshabsinnen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="group flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-950"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.02 3.6 1.53.1-.74.39-1.24.71-1.53-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mirshab-sinnen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="group flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-600"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.98V9.23h2.95v9.51ZM6.45 7.93a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.81h-2.94v-4.63c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.71H9.54V9.23h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.98 0 3.56 1.96 3.56 4.51v5.23Z" />
              </svg>
            </a>

            {/* Let's Talk */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Let's Talk
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>


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
              ? "max-h-[520px] translate-y-0 pb-5 opacity-100"
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

              {/* Mobile Social Links */}
              <div className="mt-4 flex items-center justify-center gap-5 border-t border-gray-100 pt-4">

                <a
                  href="https://github.com/mirshabsinnen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-950"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.02 3.6 1.53.1-.74.39-1.24.71-1.53-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/mirshab-sinnen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.98V9.23h2.95v9.51ZM6.45 7.93a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.81h-2.94v-4.63c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.71H9.54V9.23h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.98 0 3.56 1.96 3.56 4.51v5.23Z" />
                  </svg>
                  LinkedIn
                </a>

              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
