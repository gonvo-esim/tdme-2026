'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SearchDialog from "./SearchDialog";

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-full px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/tdme-logo.png"
              alt="TDME Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 text-sm items-center">
            {/* Menu Items */}
            {/* Connectivity */}
            <Link href="/industrial" className="hover:text-blue-400 transition px-3 py-2">
              Connectivity
            </Link>

            {/* Transmission Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("transmission")}
                className="hover:text-blue-400 transition px-3 py-2 flex items-center"
              >
                Transmission
                <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/transmission"
                  className="block px-4 py-2 hover:bg-blue-600 first:rounded-t-md"
                >
                  Overview
                </Link>
                <Link
                  href="/transmission/sdh-sonet"
                  className="block px-4 py-2 hover:bg-blue-600"
                >
                  SDH-SONET
                </Link>
                <Link
                  href="/transmission/mpls-tp"
                  className="block px-4 py-2 hover:bg-blue-600"
                >
                  MPLS-TP
                </Link>
                <Link
                  href="/transmission/carrier-ethernet"
                  className="block px-4 py-2 hover:bg-blue-600 last:rounded-b-md"
                >
                  Carrier Ethernet
                </Link>
              </div>
            </div>

            {/* Hospitality Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("hospitality")}
                className="hover:text-blue-400 transition px-3 py-2 flex items-center"
              >
                Hospitality
                <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/jacob-jensen"
                  className="block px-4 py-2 hover:bg-blue-600 first:rounded-t-md font-semibold"
                >
                  Jacob Jensen
                </Link>
                <Link
                  href="/products/jacob-jensen-sip-phones"
                  className="block px-4 py-2 hover:bg-blue-600 pl-8 text-sm"
                >
                  JJ SIP
                </Link>
                <Link
                  href="/products/jacob-jensen-analog-phones"
                  className="block px-4 py-2 hover:bg-blue-600 pl-8 text-sm"
                >
                  JJ Analog
                </Link>
                <Link
                  href="/bittel"
                  className="block px-4 py-2 hover:bg-blue-600 font-semibold"
                >
                  Bittel
                </Link>
                <Link
                  href="/products/moda"
                  className="block px-4 py-2 hover:bg-blue-600 pl-8 text-sm"
                >
                  MODA
                </Link>
                <Link
                  href="/products/moda-se"
                  className="block px-4 py-2 hover:bg-blue-600 pl-8 text-sm"
                >
                  MODA SE
                </Link>
                <Link
                  href="/products/unomedia5-series"
                  className="block px-4 py-2 hover:bg-blue-600 pl-8 text-sm"
                >
                  UNO Media5
                </Link>
                <Link
                  href="/products/bittel-sip-phones"
                  className="block px-4 py-2 hover:bg-blue-600 pl-8 text-sm"
                >
                  SIP Series
                </Link>
                <Link
                  href="/products/bittel-analog-phones"
                  className="block px-4 py-2 hover:bg-blue-600 pl-8 text-sm"
                >
                  Analog Series
                </Link>
                <Link
                  href="/products/classic-phone"
                  className="block px-4 py-2 hover:bg-blue-600 pl-8 text-sm"
                >
                  Classic Series
                </Link>
                <Link
                  href="/grms"
                  className="block px-4 py-2 hover:bg-blue-600 last:rounded-b-md"
                >
                  GRMS
                </Link>
              </div>
            </div>

            {/* eSIM */}
            <Link href="/esim" className="hover:text-blue-400 transition px-3 py-2">
              eSIM
            </Link>

            {/* Monitoring */}
            <Link href="/network-monitoring" className="hover:text-blue-400 transition px-3 py-2">
              Monitoring
            </Link>

            {/* LoggFi */}
            <Link href="/temperature-compliance" className="hover:text-blue-400 transition px-3 py-2">
              LoggFi
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("services")}
                className="hover:text-blue-400 transition px-3 py-2 flex items-center"
              >
                Services
                <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-blue-600 first:rounded-t-md"
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className="block px-4 py-2 hover:bg-blue-600"
                >
                  Projects
                </Link>
                <Link
                  href="/security"
                  className="block px-4 py-2 hover:bg-blue-600"
                >
                  Security
                </Link>
                <Link
                  href="/industrial-applications"
                  className="block px-4 py-2 hover:bg-blue-600"
                >
                  Applications
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-blue-600 last:rounded-b-md"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Search Icon */}
            <SearchDialog />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-1 text-sm">
              {/* Connectivity */}
              <Link
                href="/industrial"
                className="px-4 py-2 hover:bg-gray-900 rounded transition"
                onClick={closeMobileMenu}
              >
                Connectivity
              </Link>

              {/* Transmission */}
              <button
                onClick={() => toggleDropdown("transmission")}
                className="px-4 py-2 hover:bg-gray-900 rounded transition text-left flex items-center justify-between"
              >
                Transmission
                <span
                  className={`transition-transform ${
                    openDropdown === "transmission" ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openDropdown === "transmission" && (
                <div className="bg-gray-900 rounded ml-4 flex flex-col">
                  <Link
                    href="/transmission"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/transmission/sdh-sonet"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    SDH-SONET
                  </Link>
                  <Link
                    href="/transmission/mpls-tp"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    MPLS-TP
                  </Link>
                  <Link
                    href="/transmission/carrier-ethernet"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    Carrier Ethernet
                  </Link>
                </div>
              )}

              {/* Hospitality */}
              <button
                onClick={() => toggleDropdown("hospitality")}
                className="px-4 py-2 hover:bg-gray-900 rounded transition text-left flex items-center justify-between"
              >
                Hospitality
                <span
                  className={`transition-transform ${
                    openDropdown === "hospitality" ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openDropdown === "hospitality" && (
                <div className="bg-gray-900 rounded ml-4 flex flex-col">
                  <Link
                    href="/jacob-jensen"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition font-semibold"
                    onClick={closeMobileMenu}
                  >
                    Jacob Jensen
                  </Link>
                  <Link
                    href="/products/jacob-jensen-sip-phones"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition pl-6 text-xs"
                    onClick={closeMobileMenu}
                  >
                    JJ SIP
                  </Link>
                  <Link
                    href="/products/jacob-jensen-analog-phones"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition pl-6 text-xs"
                    onClick={closeMobileMenu}
                  >
                    JJ Analog
                  </Link>
                  <Link
                    href="/bittel"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition font-semibold"
                    onClick={closeMobileMenu}
                  >
                    Bittel
                  </Link>
                  <Link
                    href="/products/moda"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition pl-6 text-xs"
                    onClick={closeMobileMenu}
                  >
                    MODA
                  </Link>
                  <Link
                    href="/products/moda-se"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition pl-6 text-xs"
                    onClick={closeMobileMenu}
                  >
                    MODA SE
                  </Link>
                  <Link
                    href="/products/unomedia5-series"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition pl-6 text-xs"
                    onClick={closeMobileMenu}
                  >
                    UNO Media5
                  </Link>
                  <Link
                    href="/products/bittel-sip-phones"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition pl-6 text-xs"
                    onClick={closeMobileMenu}
                  >
                    SIP Series
                  </Link>
                  <Link
                    href="/products/bittel-analog-phones"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition pl-6 text-xs"
                    onClick={closeMobileMenu}
                  >
                    Analog Series
                  </Link>
                  <Link
                    href="/products/classic-phone"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition pl-6 text-xs"
                    onClick={closeMobileMenu}
                  >
                    Classic Series
                  </Link>
                  <Link
                    href="/grms"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    GRMS
                  </Link>
                </div>
              )}

              {/* eSIM */}
              <Link
                href="/esim"
                className="px-4 py-2 hover:bg-gray-900 rounded transition"
                onClick={closeMobileMenu}
              >
                eSIM
              </Link>

              {/* Monitoring */}
              <Link
                href="/network-monitoring"
                className="px-4 py-2 hover:bg-gray-900 rounded transition"
                onClick={closeMobileMenu}
              >
                Monitoring
              </Link>

              {/* LoggFi */}
              <Link
                href="/temperature-compliance"
                className="px-4 py-2 hover:bg-gray-900 rounded transition"
                onClick={closeMobileMenu}
              >
                LoggFi
              </Link>

              {/* Services */}
              <button
                onClick={() => toggleDropdown("services")}
                className="px-4 py-2 hover:bg-gray-900 rounded transition text-left flex items-center justify-between"
              >
                Services
                <span
                  className={`transition-transform ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openDropdown === "services" && (
                <div className="bg-gray-900 rounded ml-4 flex flex-col">
                  <Link
                    href="/services"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                  <Link
                    href="/projects"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/security"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    Security
                  </Link>
                  <Link
                    href="/industrial-applications"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    Applications
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 hover:bg-blue-600 rounded transition"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </div>
              )}

              {/* Search for Mobile */}
              <div className="px-4 py-2">
                <SearchDialog />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
