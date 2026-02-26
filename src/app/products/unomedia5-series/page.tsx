"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ProductImage {
  series: string;
  images: Array<{ name: string; src: string }>;
}

const productImages: ProductImage[] = [
  {
    series: "UNOMedia5 Models",
    images: [
      { name: "C2 Handset", src: "https://en.tdme.net/wp-content/uploads/2023/04/uno-media5-C2-handset-1024x1024.jpg" },
      { name: "C2 Handset Paging", src: "https://en.tdme.net/wp-content/uploads/2023/04/uno-media5-C2-handset-paging-1024x1024.jpg" },
      { name: "Corded Front", src: "https://en.tdme.net/wp-content/uploads/2023/04/UNOMEDIA-5-corded--1024x1024.jpg" },
      { name: "Corded Side", src: "https://en.tdme.net/wp-content/uploads/2023/04/UNOMEDIA-5-corded-side-1024x1024.jpg" },
      { name: "Corded Side 2", src: "https://en.tdme.net/wp-content/uploads/2023/04/UNOMEDIA-5-corded-side-1-1024x1024.jpg" },
      { name: "Corded Top", src: "https://en.tdme.net/wp-content/uploads/2023/04/UNOMEDIA-5-corded-top-1024x1024.jpg" },
      { name: "Corded Top 2", src: "https://en.tdme.net/wp-content/uploads/2023/04/UNOMEDIA-5-corded-top-1-1024x1024.jpg" },
      { name: "Corded Top 3", src: "https://en.tdme.net/wp-content/uploads/2023/04/UNOMEDIA-5-corded-top2-1024x1024.jpg" },
      { name: "Cordless Front", src: "https://en.tdme.net/wp-content/uploads/2023/04/UNOMEDIA-5-cordeless-1024x1024.jpg" },
      { name: "Cordless Top", src: "https://en.tdme.net/wp-content/uploads/2023/04/UNOMEDIA-5-cordeless-top-1024x1024.jpg" },
      { name: "Handset", src: "https://en.tdme.net/wp-content/uploads/2023/04/UNOMEDIA-5-handset-1024x1024.jpg" },
      { name: "Slim Model", src: "https://en.tdme.net/wp-content/uploads/2023/04/uno-media5-slim-1024x1024.jpg" },
      { name: "Slim Charging", src: "https://en.tdme.net/wp-content/uploads/2023/04/uno-media5-slim-charge-1024x1024.jpg" },
      { name: "Slim Handset", src: "https://en.tdme.net/wp-content/uploads/2023/04/uno-media5-slim-handset-1024x1024.jpg" },
      { name: "Slim Side", src: "https://en.tdme.net/wp-content/uploads/2023/04/uno-media5-slim-side-1024x1024.jpg" },
      { name: "Slim Top", src: "https://en.tdme.net/wp-content/uploads/2023/04/uno-media5-slim-top-1024x1024.jpg" },
    ],
  },
];

export default function UNOMedia5Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">UNOMedia5 Series: All-in-One Integration</h1>
            <p className="text-xl">Complete media, charging, and communication in one elegant device</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-cyan-700">The Future of Guest Room Devices</h2>
            <p className="text-lg text-gray-700 mb-4">
              UNOMedia5 represents the pinnacle of integrated hospitality technology. Combining a full-featured telephone, alarm clock with stereo audio, and powerful charging capability, UNOMedia5 eliminates bedside clutter while delivering comprehensive functionality.
            </p>
            <p className="text-lg text-gray-700">
              Available in multiple configurations to suit your property's specific needs and infrastructure.
            </p>
          </div>
        </section>

        {/* Product Images Gallery */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Product Lines</h2>
            <div className="space-y-12">
              {/* UNOMedia5 Models */}
              <div className="border-l-4 border-cyan-400 pl-8">
                <h3 className="text-2xl font-bold mb-8 text-cyan-300">UNOMedia5 Models</h3>
                <div className="p-8 bg-slate-700 rounded-lg border border-cyan-400">
                  <h4 className="text-xl font-bold mb-6 text-cyan-300">📸 Product Images</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {productImages[0].images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleImageClick(img.src)}
                        className="relative h-40 rounded-lg overflow-hidden border-2 border-cyan-300 hover:border-cyan-200 hover:shadow-lg transition-all cursor-pointer bg-gray-600"
                        title="Click to view larger"
                      >
                        <Image
                          src={img.src}
                          alt={img.name}
                          fill
                          className="object-contain p-2 hover:scale-110 transition-transform"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="text-white text-3xl opacity-0 hover:opacity-100 transition-opacity">
                            🔍
                          </div>
                        </div>
                        <p className="absolute bottom-2 left-2 right-2 text-white text-xs bg-black/50 p-1 rounded truncate">
                          {img.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal for enlarged image view */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handleCloseModal}
                className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition"
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Product"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          </div>
        )}

        {/* Core Features */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Alarm Clock & Audio */}
              <div className="p-8 bg-slate-700 rounded-lg border border-cyan-400">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">⏰ Alarm Clock & Audio Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>TruTime ensures clock time is always correct</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>High quality stereo speakers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>NFC enabled Bluetooth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Audio input cable/connector</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Easy to use alarm/radio with any key snooze</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Single day alarm, 10-minute duration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Auto ascending alarm volume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Rechargeable battery for "always on" clock</span>
                  </li>
                </ul>
              </div>

              {/* Telephone Features */}
              <div className="p-8 bg-slate-700 rounded-lg border border-blue-400">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">📞 Telephone Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Available in analog & SIP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>5 or 10 guest service keys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>High quality speakerphone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Music "muted" while on call</span>
                  </li>
                </ul>
              </div>

              {/* Device Charging */}
              <div className="p-8 bg-slate-700 rounded-lg border border-green-400">
                <h3 className="text-2xl font-bold mb-6 text-green-300">🔌 Device Charging</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Seven (7) charging positions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>4 high powered USB charging ports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Multi-Function Cable (Lightning, Micro-USB, USB-C, audio connector)</span>
                  </li>
                </ul>
              </div>

              {/* SIP Features */}
              <div className="p-8 bg-slate-700 rounded-lg border border-purple-400">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">🌐 SIP Features (Optional)</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>POE 802.3af</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>SIP RFC3261</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>DHCP, Static IP, VLAN Tagging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Web & Server based configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Support TCP, UDP, TLS, SRTP</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Variants */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Available Configurations</h2>
          <div className="space-y-8">
            {/* Standard */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg border-2 border-cyan-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-cyan-700">UNOMedia5 Standard</h3>
              <p className="text-gray-700 mb-4">
                The core configuration featuring all essential features including phone, clock, audio, and charging in one integrated device.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800">Analog Part Number:</p>
                  <p className="text-gray-700">UM7711 5 or 10B (silver/black, all black)</p>
                  <p className="text-gray-700 mt-2">UM7711-NBT 5 or 10B (black)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">SIP Part Number:</p>
                  <p className="text-gray-700">UM7711IP 5 OR 10B</p>
                </div>
              </div>
            </div>

            {/* DECT */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">UNOMedia5 DECT</h3>
              <p className="text-gray-700 mb-4">
                Wireless solution with DECT 6.0 technology. Supports up to 4 additional handsets for comprehensive room coverage.
              </p>
              <ul className="mb-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>DECT 6.0 technology for crystal clear performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Full duplex speakerphone on handset and base</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Supports up to 4 additional handsets per base</span>
                </li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800">Analog Part Number:</p>
                  <p className="text-gray-700">UM7712 5 or 10B</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">SIP Part Number:</p>
                  <p className="text-gray-700">UM7712IP 5 OR 10B</p>
                </div>
              </div>
            </div>

            {/* Slim */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg border-2 border-indigo-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-indigo-700">UNOMedia5 Slim</h3>
              <p className="text-gray-700 mb-4">
                Space-saving design with dial pad on handset. Perfect for compact rooms and minimalist design preferences.
              </p>
              <ul className="mb-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">•</span>
                  <span>Available in analog only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">•</span>
                  <span>Slimline phone model with dial pad on handset</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">•</span>
                  <span>3 guest service keys on handset</span>
                </li>
              </ul>
              <div>
                <p className="font-semibold text-gray-800">Part Number:</p>
                <p className="text-gray-700">UM7711C</p>
                <p className="text-gray-700">UM7711C-NBT</p>
              </div>
            </div>

            {/* C2 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border-2 border-purple-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">UNOMedia5 C2</h3>
              <p className="text-gray-700 mb-4">
                Premium configuration with DECT base and corded handset for lifeline support. Supports up to 5 additional wireless handsets.
              </p>
              <ul className="mb-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>DECT base with corded handset for lifeline support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>Full duplex speakerphone on handset and base</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>Supports up to 5 additional handsets</span>
                </li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800">Analog Part Number:</p>
                  <p className="text-gray-700">UNOM5HS-5 or 10M</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">SIP Part Number:</p>
                  <p className="text-gray-700">UNOM5HS-IP 5 or 10M</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charging Technology */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Multi-Device Charging Hub</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-4 text-green-700">🔌 Seven Charging Positions</h3>
                <p className="text-gray-700">Accommodate multiple guest devices simultaneously with 7 dedicated charging positions.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold mb-4 text-emerald-700">⚡ 4 High-Powered USB Ports</h3>
                <p className="text-gray-700">Fast charging capability with support for high-power devices including tablets and laptops.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-teal-600 md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-teal-700">🔗 Universal Multi-Function Cable</h3>
                <p className="text-gray-700">Single cable supporting Lightning, Micro-USB, USB-C, and audio connectors. No need for multiple cable types.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose UNOMedia5 */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Why Choose UNOMedia5</h2>
          <div className="grid md:grid-cols-1 gap-6">
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-cyan-600">
              <div className="text-3xl mr-4">🎯</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-cyan-700">All-in-One Solution</h3>
                <p className="text-gray-700">Consolidates phone, clock, audio, and charging into a single elegant device. Reduces bedside clutter.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="text-3xl mr-4">📱</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-700">Flexible Charging</h3>
                <p className="text-gray-700">Multiple charging positions and universal cable support ensure every guest device can charge simultaneously.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="text-3xl mr-4">🔊</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-700">Premium Audio</h3>
                <p className="text-gray-700">High-quality stereo speakers enhance the guest experience for music, radio, and entertainment.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-indigo-600">
              <div className="text-3xl mr-4">🛠️</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-indigo-700">Multiple Configurations</h3>
                <p className="text-gray-700">Choose the perfect variant for your property type: Standard, DECT wireless, Slim, or Premium C2.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-pink-600">
              <div className="text-3xl mr-4">🌐</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-pink-700">VoIP Ready</h3>
                <p className="text-gray-700">SIP versions support modern VoIP infrastructure with POE, VLAN tagging, and security features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-cyan-700">Simplify Your Guest Rooms</h2>
          <p className="text-lg text-gray-700 mb-8">Experience the elegance and functionality of UNOMedia5 - the all-in-one solution for modern hospitality.</p>
          <a href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Demo
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
