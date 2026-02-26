import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo/tdme-logo.png"
                alt="TDME Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm">Enterprise-grade connectivity for industrial, commercial, and mobile applications worldwide</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/esim" className="hover:text-blue-400 transition">
                  eSIMGEN
                </Link>
              </li>
              <li>
                <Link href="/industrial" className="hover:text-blue-400 transition">
                  Industrial Connectivity
                </Link>
              </li>
              <li>
                <Link href="/data-transmission" className="hover:text-blue-400 transition">
                  Data Transmission
                </Link>
              </li>
              <li>
                <Link href="/carrier" className="hover:text-blue-400 transition">
                  Carrier & Communication
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-blue-400 transition">
                  Security & Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industrial-applications" className="hover:text-blue-400 transition">
                  Industrial Applications
                </Link>
              </li>
              <li>
                <Link href="/grms" className="hover:text-blue-400 transition">
                  GRMS System
                </Link>
              </li>
              <li>
                <Link href="/network-monitoring" className="hover:text-blue-400 transition">
                  Network Monitoring
                </Link>
              </li>
              <li>
                <Link href="/temperature-compliance" className="hover:text-blue-400 transition">
                  Temperature Compliance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: sales@tdme.net</li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Global Connectivity Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
