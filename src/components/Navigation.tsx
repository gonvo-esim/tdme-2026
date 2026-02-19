'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/tdme-logo.png"
              alt="TDME Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex gap-2 text-sm flex-wrap">
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
                  className="block px-4 py-2 hover:bg-blue-600 first:rounded-t-md"
                >
                  Jacob Jensen
                </Link>
                <Link
                  href="/bittel"
                  className="block px-4 py-2 hover:bg-blue-600 last:rounded-b-md"
                >
                  Bittel
                </Link>
              </div>
            </div>

            {/* eSIM */}
            <Link href="/esim" className="hover:text-blue-400 transition px-3 py-2">
              eSIM
            </Link>

            {/* GRMS */}
            <Link href="/grms" className="hover:text-blue-400 transition px-3 py-2">
              GRMS
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
                  href="/security"
                  className="block px-4 py-2 hover:bg-blue-600 first:rounded-t-md"
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
          </div>
        </div>
      </div>
    </nav>
  );
}
