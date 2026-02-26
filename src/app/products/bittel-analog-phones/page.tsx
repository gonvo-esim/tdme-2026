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
    series: "Analog Phone Models",
    images: [
      { name: "7711-C", src: "https://en.tdme.net/wp-content/uploads/2024/04/7711-C.webp" },
      { name: "7712", src: "https://en.tdme.net/wp-content/uploads/2024/04/7712.webp" },
      { name: "HA12TSD-6S", src: "https://en.tdme.net/wp-content/uploads/2024/04/HA12TSD-6S.webp" },
      { name: "HA62TSD-10S-Black", src: "https://en.tdme.net/wp-content/uploads/2024/04/HA62TSD-10S-Black.webp" },
      { name: "HA62TS-N-7V", src: "https://en.tdme.net/wp-content/uploads/2024/04/HA62TS-N-7V.webp" },
      { name: "HWD62TSD-10S", src: "https://en.tdme.net/wp-content/uploads/2024/04/HWD62TSD-10S.webp" },
    ],
  },
];

export default function BittelAnalogPage() {
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
        <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Bittel Analog Phones</h1>
            <p className="text-xl">Reliable traditional communication systems with modern features</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-green-700">Proven POTS Compatibility</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bittel Analog phones represent the gold standard in traditional hotel communication. Built on proven Plain Old Telephone Service (POTS) technology, these phones deliver rock-solid reliability for properties seeking traditional infrastructure without compromise.
            </p>
            <p className="text-lg text-gray-700">
              Perfect for hotels with existing analog PBX systems, Bittel analog phones integrate seamlessly while offering modern guest service features and exceptional audio quality.
            </p>
          </div>
        </section>

        {/* Product Images Gallery */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Product Lines</h2>
            <div className="space-y-12">
              {/* Analog Phone Models */}
              <div className="border-l-4 border-green-400 pl-8">
                <h3 className="text-2xl font-bold mb-8 text-green-300">Analog Phone Models</h3>
                <div className="p-8 bg-slate-700 rounded-lg border border-green-400">
                  <h4 className="text-xl font-bold mb-6 text-green-300">📸 Product Images</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {productImages[0].images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleImageClick(img.src)}
                        className="relative h-40 rounded-lg overflow-hidden border-2 border-green-300 hover:border-green-200 hover:shadow-lg transition-all cursor-pointer bg-gray-600"
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

        {/* Key Advantages */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Analog Technology Advantages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-700 rounded-lg border border-green-400">
                <h3 className="text-2xl font-bold mb-6 text-green-300">🔌 Universal Compatibility</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Works with any POTS-compatible PBX system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>No special configuration required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Simple plug-and-play installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Backward compatible with legacy systems</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-teal-400">
                <h3 className="text-2xl font-bold mb-6 text-teal-300">🛡️ Proven Reliability</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-3">✓</span>
                    <span>Decades of proven technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-3">✓</span>
                    <span>Minimal downtime, maximum uptime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-3">✓</span>
                    <span>Simple maintenance and troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-3">✓</span>
                    <span>Worldwide service and support availability</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-blue-400">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">📞 Superior Audio Quality</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Crystal-clear voice transmission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Echo cancellation technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Noise reduction features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Professional-grade sound quality</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-cyan-400">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">⚙️ Industrial Construction</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Heavy-duty materials for durability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Designed for high-traffic environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Extended warranty coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Resistant to wear and tear</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-yellow-400">
                <h3 className="text-2xl font-bold mb-6 text-yellow-300">💡 Guest Service Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>Programmable function keys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>Message waiting indicators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>Hold, Flash, and Redial functions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>Labeled, intuitive key layout</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-purple-400">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">🎨 Design Flexibility</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Multiple color options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Corded and cordless options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Wall-mount and desktop configurations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Customization options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Available Models */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Available Models</h2>
          <div className="space-y-8">
            {/* Corded Series */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg border-2 border-green-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Corded Phone Series</h3>
              <p className="text-gray-700 mb-4">
                Traditional wired phones offering reliability and simplicity. Perfect for guestrooms where phones remain stationary.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">•</span>
                  <span>Available in 3, 5, and 10 function key configurations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">•</span>
                  <span>Single and dual line options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">•</span>
                  <span>Bright message waiting indicator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">•</span>
                  <span>Color options: Cream, Black, Ivory</span>
                </li>
              </ul>
              <div className="p-6 bg-white rounded-lg border border-green-200">
                <p className="font-semibold text-green-700 mb-2">Typical Configurations:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Classic 12 Series (single line)</li>
                  <li>• Classic 38 Series (single/dual line)</li>
                  <li>• Full warranty: 2-5 years depending on model</li>
                </ul>
              </div>
            </div>

            {/* Cordless Series */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-lg border-2 border-teal-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Cordless Phone Series</h3>
              <p className="text-gray-700 mb-4">
                Wireless DECT 6.0 phones providing guest mobility throughout the room. Multiple handset support for extended coverage.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">•</span>
                  <span>DECT 6.0 technology for clear wireless</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">•</span>
                  <span>Supports up to 4 additional handsets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">•</span>
                  <span>Lifeline support - base functions during power loss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">•</span>
                  <span>Full-duplex speakerphone on handset</span>
                </li>
              </ul>
              <div className="p-6 bg-white rounded-lg border border-teal-200">
                <p className="font-semibold text-teal-700 mb-2">Features:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• 0, 3, 5, or 10 programmable guest service keys</li>
                  <li>• Message waiting indicator</li>
                  <li>• 5-year warranty</li>
                </ul>
              </div>
            </div>

            {/* Optional Charging Base */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Device Charging Base (Optional)</h3>
              <p className="text-gray-700 mb-4">
                Add charging capability to any Bittel analog phone with our optional charging bases. Perfect for modern guest expectations.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Six (6) charging positions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>2 high powered USB charging ports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Optional multi-connection cables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Lightning, Micro-USB, USB-C support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Bittel Analog */}
        <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-700">Why Choose Bittel Analog Phones</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-green-600">
                <div className="text-3xl mr-4">✅</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-green-700">Immediate Compatibility</h3>
                  <p className="text-gray-700">Drop-in replacement for existing analog phones. No infrastructure upgrades or retraining required. Install and go.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-teal-600">
                <div className="text-3xl mr-4">💪</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-teal-700">Proven Performance</h3>
                  <p className="text-gray-700">Thousands deployed worldwide with minimal issues. Guests expect simple, reliable communication - Bittel delivers.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-cyan-600">
                <div className="text-3xl mr-4">🔧</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-700">Easy Maintenance</h3>
                  <p className="text-gray-700">Simple technology means fewer repairs. Extensive service network worldwide ensures rapid support when needed.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="text-3xl mr-4">💰</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Cost Effective</h3>
                  <p className="text-gray-700">Lower acquisition and installation costs. Works with existing infrastructure. Excellent total cost of ownership.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-indigo-600">
                <div className="text-3xl mr-4">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-700">Flexible Options</h3>
                  <p className="text-gray-700">Choose between corded, cordless, single/dual line, and various key configurations. Optional charging bases for modern needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Proven Communication Excellence</h2>
          <p className="text-lg text-gray-700 mb-8">Bittel analog phones deliver reliability, quality, and simplicity. The smart choice for traditional communication infrastructure.</p>
          <a href="/contact" className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Demo
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
