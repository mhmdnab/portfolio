"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu, X } from "lucide-react";

const cc = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

const ScrollLink = ({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick?.();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection([
    "hero",
    "about",
    "skills",
    "projects",
    "contact",
  ]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (mobileMenuOpen && !target.closest("[data-mobile-menu]")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={cn(
          "fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500",
          "hidden md:inline-flex items-center gap-2 rounded-full border px-6 py-3 shadow-lg",
          scrolled
            ? "border-[#0c4f57]/20 bg-white/95 shadow-[#0c4f57]/10 backdrop-blur-xl"
            : "border-[#0c4f57]/30 bg-white/80 shadow-[#0c4f57]/20 backdrop-blur-lg",
          "hover:bg-white/95 hover:shadow-xl hover:shadow-[#0c4f57]/15"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center">
          <h1
            className={cn(
              cc.className,
              "text-xl font-normal leading-none text-[#0c4f57] transition-colors duration-200 lg:text-2xl",
              "hover:text-[#147b86]"
            )}
          >
            {pathname === "/contact" ? (
              <Link href="/" className="block">
                moe
              </Link>
            ) : (
              <ScrollLink href="#hero" className="block">
                moe
              </ScrollLink>
            )}
          </h1>

          {/* Separator */}
          <div className="mx-4 h-6 w-px bg-gradient-to-b from-transparent via-[#0c4f57]/30 to-transparent" />
        </div>

        {/* Nav Items */}
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                {item.id === "contact" ? (
                  <Link
                    href="/contact"
                    className={cn(
                      "relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200 lg:text-sm",
                      isActive
                        ? "bg-[#0c4f57] text-white shadow-md"
                        : "text-[#0c4f57]/80 hover:bg-[#0c4f57]/10 hover:text-[#0c4f57]"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <ScrollLink
                    href={`#${item.id}`}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200 lg:text-sm",
                      isActive
                        ? "bg-[#0c4f57] text-white shadow-md"
                        : "text-[#0c4f57]/80 hover:bg-[#0c4f57]/10 hover:text-[#0c4f57]"
                    )}
                  >
                    {item.label}
                  </ScrollLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden",
          scrolled
            ? "border-b border-[#0c4f57]/20 bg-white/95 shadow-sm backdrop-blur-xl"
            : "bg-white/90 backdrop-blur-lg"
        )}
        role="navigation"
        aria-label="Mobile navigation"
        data-mobile-menu
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mobile Logo */}
          <h1
            className={cn(
              cc.className,
              "text-xl font-normal leading-none text-[#0c4f57] transition-colors duration-200",
              "hover:text-[#147b86]"
            )}
          >
            {pathname === "/contact" ? (
              <Link href="/" className="block">
                moe
              </Link>
            ) : (
              <ScrollLink
                href="#hero"
                className="block"
                onClick={closeMobileMenu}
              >
                moe
              </ScrollLink>
            )}
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "relative rounded-xl p-2.5 transition-all duration-300 ease-out",
              "border border-[#0c4f57]/20 bg-white/70 backdrop-blur-sm",
              "hover:border-[#0c4f57]/30 hover:bg-[#0c4f57]/5 hover:shadow-md hover:shadow-[#0c4f57]/10",
              "active:scale-95 active:bg-[#0c4f57]/10",
              "focus:outline-none focus:ring-2 focus:ring-[#0c4f57]/20 focus:ring-offset-1",
              mobileMenuOpen &&
                "border-[#0c4f57]/40 bg-[#0c4f57]/10 shadow-md shadow-[#0c4f57]/15"
            )}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="relative h-5 w-5">
              <Menu
                className={cn(
                  "absolute inset-0 h-5 w-5 text-[#0c4f57] transition-all duration-300",
                  mobileMenuOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 h-5 w-5 text-[#0c4f57] transition-all duration-300",
                  mobileMenuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[60px] bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={cn(
            "absolute left-0 right-0 top-full origin-top transform transition-all duration-300 ease-out",
            mobileMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          )}
          data-mobile-menu
        >
          <div className="border-t border-[#0c4f57]/10 bg-white/95 backdrop-blur-xl shadow-lg w-full">
            <ul className="py-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id}>
                    {item.id === "contact" ? (
                      <Link
                        href="/contact"
                        onClick={closeMobileMenu}
                        className={cn(
                          "flex items-center px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-200",
                          isActive
                            ? "bg-[#0c4f57]/10 text-[#0c4f57] border-r-2 border-[#0c4f57]"
                            : "text-[#0c4f57]/80 hover:bg-[#0c4f57]/5 hover:text-[#0c4f57]"
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <div className="ml-auto h-2 w-2 rounded-full bg-[#0c4f57]" />
                        )}
                      </Link>
                    ) : (
                      <ScrollLink
                        href={`#${item.id}`}
                        onClick={closeMobileMenu}
                        className={cn(
                          "flex items-center px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-200",
                          isActive
                            ? "bg-[#0c4f57]/10 text-[#0c4f57] border-r-2 border-[#0c4f57]"
                            : "text-[#0c4f57]/80 hover:bg-[#0c4f57]/5 hover:text-[#0c4f57]"
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <div className="ml-auto h-2 w-2 rounded-full bg-[#0c4f57]" />
                        )}
                      </ScrollLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
