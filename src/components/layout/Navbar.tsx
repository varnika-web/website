"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Logo from "../Logo";
import { NavbarData } from "@/src/data/NavbarData";
import Button from "../ui/Button";

const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollTimeoutRef = useState<NodeJS.Timeout | null>(null)[1];

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Sticky Navbar Effect
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu when scrolling
      setIsMobileMenuOpen(false);

      // Show navbar when at top of page
      if (currentScrollY < 50) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsNavbarVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Clear existing timeout and set new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsNavbarVisible(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleHashLinkClick = (href: string) => {
    if (href.startsWith("/#")) {
      const targetHash = href.slice(2);
      const element = document.getElementById(targetHash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  };

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname !== "/") return false;
      const targetHash = href.slice(2);
      return (hash || "#home") === `#${targetHash}`;
    }

    return pathname.replace(/^\/+/, "") === href.replace(/^\/+/, "");
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 bg-white/95 shadow-sm shadow-slate-200 backdrop-blur-md transition-transform duration-300 ease-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 md:mx-20 md:max-w-7xl lg:mx-auto">
        <Logo size="md" mode="dark" />

        <nav className="text-md hidden items-center gap-8 font-medium text-neutral-600 md:flex">
          {NavbarData.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => handleHashLinkClick(item.href)}
                aria-current={isActive ? "page" : undefined}
                className={`transition ${
                  isActive ? "text-primary font-semibold" : "hover:text-primary"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            path="/contact"
            label="Book Consultation"
            variant="secondary"
            size="sm"
          />
          {/* MOBILE MENU ICON  */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
            className="hover:border-primary hover:text-primary inline-flex h-8 w-8 items-center justify-center text-slate-700 transition md:hidden md:h-10 md:w-10"
          >
            <Menu className="h-5 w-5 md:h-7 md:w-7" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 h-screen md:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-slate-950/40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />

        <div
          className={`absolute inset-y-0 right-0 flex h-screen w-[80%] flex-col bg-white p-5 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMobileMenu}
              className="hover:border-primary hover:text-primary inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 text-slate-700 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-10 flex flex-1 flex-col gap-2">
            {NavbarData.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => {
                    handleHashLinkClick(item.href);
                    closeMobileMenu();
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-lg font-semibold transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:text-primary text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <Button
            path="/contact"
            label="Book Consultation"
            variant="primary"
            size="md"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
