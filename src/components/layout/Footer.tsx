import React from "react";
import Newsletter from "./Newsletter";

import { services, contact } from "@/src/data/footerData";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      {/* FOOTER  */}
      <div className="bg-[#0f0e1a] px-6 py-14 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:justify-between">
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* Link columns */}
          <div className="flex flex-col gap-12 sm:flex-row md:gap-20">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                {services.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs tracking-wide text-gray-400 uppercase transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact Column  */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
              <ul className="flex flex-col gap-3">
                {contact.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs tracking-wide text-gray-400 uppercase transition-colors hover:text-white"
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
