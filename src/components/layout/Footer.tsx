import Link from "next/link";
import Newsletter from "./Newsletter";

import {
  services,
  contact,
  phoneNumbers,
  noidaOffice,
  lucknowOffice,
} from "@/src/data/footerData";

import { NavbarData } from "@/src/data/NavbarData";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      {/* FOOTER  */}
      <div className="bg-[#0f0e1a] px-6 py-14 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="max-w-xs">
            <Logo mode="dark" />
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              This website is intended for educational purposes and is supported
              by insights shared in our{" "}
              <Link
                href="/blog"
                className="text-primary-light font-medium underline-offset-4 transition-colors hover:text-gray-200 hover:underline"
              >
                articles
              </Link>
              .
            </p>
          </div>

          {/* Links column */}
          <div className="flex flex-col gap-12 sm:flex-row md:gap-20">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Pages</h3>
              <ul className="flex flex-col gap-3">
                {NavbarData.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-xs tracking-wide text-gray-400 uppercase transition-colors hover:text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services column */}
            <div className="flex flex-col gap-12 sm:flex-row md:gap-20">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  Services
                </h3>
                <ul className="flex flex-col gap-3">
                  {services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-xs tracking-wide text-gray-400 uppercase transition-colors hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone & Office Column  */}
              <div className="sm:max-w-48">
                <h3 className="mb-4 text-sm font-semibold text-white">
                  {noidaOffice.label}
                </h3>
                <p className="mb-2 text-xs leading-relaxed font-semibold text-gray-400">
                  {noidaOffice.time}
                </p>
                <p className="mb-4 text-xs leading-relaxed text-gray-400">
                  {noidaOffice.address}
                </p>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  {lucknowOffice.label}
                </h3>
                <p className="mb-2 text-xs leading-relaxed font-semibold text-gray-400">
                  {lucknowOffice.time}
                </p>
                <p className="text-xs leading-relaxed text-gray-400">
                  {lucknowOffice.address}
                </p>
              </div>

              {/* Contact Column  */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  Contact
                </h3>
                <ul className="mb-4 flex flex-col gap-3">
                  {contact.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target="_blank"
                        className="text-xs tracking-wide text-gray-400 uppercase transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h3 className="mb-4 text-sm font-semibold text-white">Phone</h3>
                <ul className="mb-6 flex flex-col gap-2">
                  {phoneNumbers.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-xs text-gray-400 transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COPYRIGHT  */}
      <div className="flex justify-center bg-white py-1">
        <span className="text-center text-sm font-semibold text-gray-800">
          Copyright {new Date().getFullYear()}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
