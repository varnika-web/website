"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import Logo from "../Logo";
import { NavbarData } from "@/src/data/NavbarData";
import { Services } from "@/src/data/services";
import Button from "../ui/Button";

const aboutNavigationItems = [
  {
    title: "About VR Wealth Creation",
    description: "Learn about our story, values, and investment approach.",
    href: "/about#about-vr-wealth",
  },
  {
    title: "Our Founder",
    description: "Meet Dr. Varnika Tiwari, our Founder and CEO.",
    href: "/about#our-founder",
  },
  {
    title: "Our Team",
    description: "Get to know the people behind VR Wealth Creation.",
    href: "/about#our-team",
  },
  {
    title: "Our Client",
    description: "See the global community of clients we serve.",
    href: "/about#our-client",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [activeServiceSlug, setActiveServiceSlug] = useState(Services[0].slug);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const activeService =
    Services.find((service) => service.slug === activeServiceSlug) ??
    Services[0];

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

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsMobileMenuOpen(false);
      setIsServicesMenuOpen(false);
      setIsAboutMenuOpen(false);

      if (currentScrollY < 50) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsNavbarVisible(true), 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileAboutOpen(false);
  };

  const handleHashLinkClick = (href: string) => {
    if (href.startsWith("/#")) {
      const targetHash = href.slice(2);
      const element = document.getElementById(targetHash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  };

  const handleServicesNavigation = () => {
    setIsServicesMenuOpen(false);

    if (pathname === "/") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    router.push("/#services");
  };

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname !== "/") return false;
      return (hash || "#home") === `#${href.slice(2)}`;
    }

    return pathname.replace(/^\/+/, "") === href.replace(/^\/+/, "");
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 bg-white shadow-sm transition-transform duration-300 ease-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 md:mx-20 md:max-w-7xl lg:mx-auto">
        <Logo size="md" />

        <nav className="text-md hidden items-center gap-8 font-medium text-neutral-600 md:flex">
          {NavbarData.map((item) => {
            if (item.title === "Services") {
              const isServicePage = Services.some(
                (service) => pathname === service.href,
              );

              return (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-1"
                  onMouseEnter={() => setIsServicesMenuOpen(true)}
                  onFocus={() => setIsServicesMenuOpen(true)}
                >
                  <Link
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleServicesNavigation();
                    }}
                    className={`transition ${
                      isServicePage || isServicesMenuOpen
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    aria-label="Open Services menu"
                    aria-expanded={isServicesMenuOpen}
                    aria-controls="services-mega-menu"
                    onClick={() => setIsServicesMenuOpen((isOpen) => !isOpen)}
                    className="inline-flex items-center"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isServicesMenuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              );
            }

            if (item.title === "About") {
              const isAboutPage = pathname === "/about";

              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setIsAboutMenuOpen(true)}
                  className={`inline-flex items-center transition ${
                    isAboutPage || isAboutMenuOpen
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }`}
                >
                  <Link href="/about" onClick={() => setIsAboutMenuOpen(false)}>
                    About
                  </Link>
                  <button
                    type="button"
                    aria-label="Open About menu"
                    aria-expanded={isAboutMenuOpen}
                    aria-controls="about-mega-menu"
                    onClick={() => setIsAboutMenuOpen((isOpen) => !isOpen)}
                    onFocus={() => setIsAboutMenuOpen(true)}
                    className="ml-1"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isAboutMenuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              );
            }

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
        id="services-mega-menu"
        onMouseEnter={() => setIsServicesMenuOpen(true)}
        onMouseLeave={() => setIsServicesMenuOpen(false)}
        className={`absolute top-full right-0 left-0 hidden border-t border-neutral-100 bg-white shadow-xl transition md:block ${
          isServicesMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(15rem,0.8fr)_minmax(0,2fr)] gap-10 px-8 py-8 lg:px-0">
          <div className="border-r border-neutral-200 pr-8">
            <p className="small-heading mb-3">Our services</p>
            <div className="space-y-1">
              {Services.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  onMouseEnter={() => setActiveServiceSlug(service.slug)}
                  onFocus={() => setActiveServiceSlug(service.slug)}
                  onClick={() => setIsServicesMenuOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-semibold transition ${
                    activeService.slug === service.slug
                      ? "bg-primary-light/50 text-primary"
                      : "hover:text-primary text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={activeService.href}
            onClick={() => setIsServicesMenuOpen(false)}
            className="group hover:bg-primary-light/25 grid grid-cols-[minmax(13rem,0.95fr)_minmax(0,1.05fr)] overflow-hidden rounded-xl bg-neutral-50 transition"
          >
            <div className="relative min-h-60">
              <Image
                src={activeService.image}
                alt=""
                fill
                sizes="(max-width: 1280px) 35vw, 420px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <p className="text-primary mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                {activeService.category}
              </p>
              <h2 className="font-libre group-hover:text-primary text-2xl font-semibold text-neutral-900">
                {activeService.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
                {activeService.description}
              </p>
              <span className="text-primary mt-6 text-sm font-semibold">
                Explore service →
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div
        id="about-mega-menu"
        onMouseEnter={() => setIsAboutMenuOpen(true)}
        onMouseLeave={() => setIsAboutMenuOpen(false)}
        className={`absolute top-full right-0 left-0 hidden border-t border-neutral-100 bg-white shadow-xl transition md:block ${
          isAboutMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-8 py-8 lg:px-0">
          <div className="grid gap-8 lg:grid-cols-[minmax(15rem,0.75fr)_minmax(0,2fr)]">
            <div>
              <p className="small-heading mb-3">About VR Wealth</p>
              <h2 className="font-libre text-2xl font-semibold text-neutral-900">
                Your goals deserve a thoughtful financial partner.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {aboutNavigationItems.map((aboutItem) => (
                <Link
                  key={aboutItem.href}
                  href={aboutItem.href}
                  onClick={() => setIsAboutMenuOpen(false)}
                  className="group hover:border-primary/30 hover:bg-primary-light/20 rounded-xl border border-neutral-200 p-5 transition"
                >
                  <h3 className="font-libre group-hover:text-primary text-base font-semibold text-neutral-900">
                    {aboutItem.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {aboutItem.description}
                  </p>
                  <span className="text-primary mt-4 inline-block text-sm font-semibold">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
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
          className={`absolute inset-y-0 right-0 flex h-screen w-[86%] max-w-sm flex-col bg-white p-5 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
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

          <nav className="mt-10 flex flex-1 flex-col gap-2 overflow-y-auto">
            {NavbarData.map((item) => {
              if (item.title === "Services") {
                const isServicePage = Services.some(
                  (service) => pathname === service.href,
                );

                return (
                  <div key={item.title} className="rounded-lg">
                    <div
                      className={`small-heading flex items-center justify-between rounded-lg px-3 py-3 text-lg font-semibold transition ${
                        isServicePage
                          ? "bg-primary/10 text-primary"
                          : "hover:text-primary text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      <Link
                        href={item.href}
                        onClick={(event) => {
                          event.preventDefault();
                          handleServicesNavigation();
                          closeMobileMenu();
                        }}
                        className="flex-1 text-left"
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        aria-label="Open Services menu"
                        aria-expanded={isMobileServicesOpen}
                        aria-controls="mobile-services-menu"
                        onClick={() =>
                          setIsMobileServicesOpen((isOpen) => !isOpen)
                        }
                        className="-mr-1 p-1"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div
                      id="mobile-services-menu"
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                        isMobileServicesOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 space-y-1 px-3 pt-1 pb-2">
                        {Services.map((service) => (
                          <Link
                            key={service.slug}
                            href={service.href}
                            onClick={closeMobileMenu}
                            className={`block rounded-md px-3 py-2.5 text-sm font-medium transition ${
                              pathname === service.href
                                ? "bg-primary-light/50 text-primary"
                                : "hover:text-primary text-neutral-600 hover:bg-neutral-100"
                            }`}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.title === "About") {
                const isAboutPage = pathname === "/about";

                return (
                  <div key={item.title} className="rounded-lg">
                    <div
                      className={`small-heading flex items-center justify-between rounded-lg px-3 py-3 text-lg font-semibold transition ${
                        isAboutPage
                          ? "bg-primary/10 text-primary"
                          : "hover:text-primary text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      <Link href="/about" onClick={closeMobileMenu}>
                        About
                      </Link>
                      <button
                        type="button"
                        aria-label="Open About menu"
                        aria-expanded={isMobileAboutOpen}
                        aria-controls="mobile-about-menu"
                        onClick={() =>
                          setIsMobileAboutOpen((isOpen) => !isOpen)
                        }
                        className="-mr-1 p-1"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            isMobileAboutOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div
                      id="mobile-about-menu"
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                        isMobileAboutOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 space-y-1 px-3 pt-1 pb-2">
                        {aboutNavigationItems.map((aboutItem) => (
                          <Link
                            key={aboutItem.href}
                            href={aboutItem.href}
                            onClick={closeMobileMenu}
                            className="hover:text-primary block rounded-md px-3 py-2.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100"
                          >
                            {aboutItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

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
                  className={`small-heading rounded-lg px-3 py-3 text-lg font-semibold transition ${
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
