'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SearchDialog from "./SearchDialog";

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
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
          <div className="flex gap-2 text-sm flex-wrap items-center">
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
      </div>
    </nav>
  );
}
