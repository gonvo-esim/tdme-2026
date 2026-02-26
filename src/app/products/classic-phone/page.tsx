'use client';

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ClassicPhonePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const productImages = [
    // 12 Series
    {
      category: "12 Series",
      images: [
        {
          src: "https://en.tdme.net/wp-content/uploads/2023/05/12TDS-black.jpg",
          alt: "12 Series - Black Phone",
        },
        {
          src: "https://en.tdme.net/wp-content/uploads/2023/05/12TDS-black-6btn.jpg",
          alt: "12 Series - Black with 6 Buttons",
        },
        {
          src: "https://en.tdme.net/wp-content/uploads/2023/05/12TDS-ivory-3btn.jpg",
          alt: "12 Series - Ivory with 3 Buttons",
        },
        {
          src: "https://en.tdme.net/wp-content/uploads/2023/05/12TDS-ivory-6btn.jpg",
          alt: "12 Series - Ivory with 6 Buttons",
        },
        {
          src: "https://en.tdme.net/wp-content/uploads/2023/05/12TDS-black-usb.jpg",
          alt: "12 Series - Black with USB Charging Base",
        },
        {
          src: "https://en.tdme.net/wp-content/uploads/2023/05/12TDS-ivory-usb.jpg",
          alt: "12 Series - Ivory with USB Charging Base",
        },
      ],
    },
    // 38 Series Cordless
    {
      category: "38 Series Cordless",
      images: [
        {
          src: "https://en.tdme.net/wp-content/uploads/2023/05/38dc-cordless-10btn.jpg",
          alt: "38 Series Cordless - 10 Buttons",
        },
        {
          src: "https://en.tdme.net/wp-content/uploads/2023/05/38dc-cordless-black-10btn.jpg",
          alt: "38 Series Cordless - Black 10 Buttons",
        },
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Classic Phone Series</h1>
            <p className="text-xl">Premium analog and cordless phones with industrial-quality construction</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-amber-700">Timeless Design, Modern Features</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Classic Phone Series represents the pinnacle of analog and cordless phone design. Combining timeless aesthetics with industrial-quality construction, these phones deliver exceptional reliability and guest satisfaction.
            </p>
            <p className="text-lg text-gray-700">
              Built to withstand the rigors of hospitality environments, Classic phones feature optional device charging, modern guest service capabilities, and clean design that complements any hotel décor.
            </p>
          </div>
        </section>

        {/* Product Lines */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-amber-400">Product Lines</h2>
            <div className="space-y-12">
              {/* 12 Series */}
              <div className="border-l-4 border-amber-400 pl-8">
                <h3 className="text-2xl font-bold mb-8 text-amber-300">12 Series - Classic Corded Phone</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-700 rounded-lg border border-amber-400">
                    <h4 className="text-xl font-bold mb-6 text-amber-300">📞 Telephone Features</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Single speakerphone configuration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Available in Black or Ivory</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>3 or 6 programmable guest service keys</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Bright message waiting indicator</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Hold, Flash, Redial functions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Industrial quality manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Labeled function keys for clarity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Full 1-year warranty</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-slate-700 rounded-lg border border-amber-400">
                    <h4 className="text-xl font-bold mb-6 text-amber-300">📸 Product Images</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {productImages[0].images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(img.src)}
                          className="relative h-32 rounded-lg overflow-hidden border-2 border-amber-300 hover:border-amber-200 hover:shadow-lg transition-all cursor-pointer bg-gray-600"
                          title="Click to view larger"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-contain hover:scale-105 transition-transform"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors">
                            <span className="text-white text-2xl opacity-0 hover:opacity-100 transition-opacity">🔍</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4 text-center">Click any image to view larger size</p>
                  </div>
                </div>
              </div>

              {/* 38 Series Cordless */}
              <div className="border-l-4 border-yellow-400 pl-8">
                <h3 className="text-2xl font-bold mb-8 text-yellow-300">38 Series - Premium Cordless DECT</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-700 rounded-lg border border-yellow-400">
                    <h4 className="text-xl font-bold mb-6 text-yellow-300">📱 Wireless Features</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>DECT 6.0 technology for crystal clear performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Lifeline support - base functions during power loss</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Multiple handsets - supports up to 4 additional</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Full duplex speakerphone</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Single or dual line options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>0, 3, 5, or 10 programmable guest service keys</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Industrial quality manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Full 1-year warranty</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-slate-700 rounded-lg border border-yellow-400">
                    <h4 className="text-xl font-bold mb-6 text-yellow-300">📸 Product Images</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {productImages[1].images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(img.src)}
                          className="relative h-32 rounded-lg overflow-hidden border-2 border-yellow-300 hover:border-yellow-200 hover:shadow-lg transition-all cursor-pointer bg-gray-600"
                          title="Click to view larger"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-contain hover:scale-105 transition-transform"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors">
                            <span className="text-white text-2xl opacity-0 hover:opacity-100 transition-opacity">🔍</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4 text-center">Click any image to view larger size</p>
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-700 rounded-lg border border-amber-400">
                    <h4 className="text-xl font-bold mb-6 text-amber-300">🔧 Additional Features</h4>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Bright message waiting indicator</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Hold, Flash, Redial functions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Labeled function keys</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Programmable message waiting indicator</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-400 border-t border-amber-600 pt-4">
                      <strong>Part Numbers:</strong><br/>
                      38DCTS-5 or 10B<br/>
                      38DCTS-5 or 10C<br/>
                      <strong>Charging Base:</strong><br/>
                      CGR-38-MCC | CGR-38-USB
                    </p>
                  </div>

                  <div className="p-8 bg-slate-700 rounded-lg border border-amber-400">
                    <h4 className="text-xl font-bold mb-6 text-amber-300">🔌 Optional Device Charging</h4>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Six (6) charging positions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>2 high powered USB charging ports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Optional multi-connection cables</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-3">✓</span>
                        <span>Lightning, Micro-USB, USB-C support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 38 Series Corded */}
              <div className="border-l-4 border-orange-400 pl-8">
                <h3 className="text-2xl font-bold mb-8 text-orange-300">38 Series - Premium Corded Phone</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-700 rounded-lg border border-orange-400">
                    <h4 className="text-xl font-bold mb-6 text-orange-300">☎️ Telephone Features</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Single or dual line options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Available in Cream or Black</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>0, 3, 5, or 10 programmable guest service keys</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Bright message waiting indicator</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Hold, Flash, Redial functions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Industrial quality manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Labeled function keys</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Full 1-year warranty</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-slate-700 rounded-lg border border-yellow-400">
                    <h4 className="text-xl font-bold mb-6 text-yellow-300">🔌 Optional Device Charging</h4>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Six (6) charging positions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>2 high powered USB charging ports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Optional multi-connection cables</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span>Lightning, Micro-USB, USB-C support</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-400 border-t border-yellow-600 pt-4">
                      <strong>Part Numbers:</strong><br/>
                      38TSD-5 or 10B<br/>
                      38TSD-5 or 10C<br/>
                      <strong>Charging Base:</strong><br/>
                      CGR-38-MCC | CGR-38-USB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Why Classic Phones</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-600">
              <h3 className="text-xl font-bold mb-4 text-amber-700">🎯 Industrial Durability</h3>
              <p className="text-gray-700">
                Built to endure high-traffic hotel environments. Heavy-duty materials and construction ensure years of reliable service with minimal maintenance required.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-600">
              <h3 className="text-xl font-bold mb-4 text-orange-700">📱 Modern Guest Features</h3>
              <p className="text-gray-700">
                Optional device charging brings modern convenience to classic design. Supports all major charging standards, meeting contemporary guest expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-yellow-600">
              <h3 className="text-xl font-bold mb-4 text-yellow-700">🎨 Flexible Design</h3>
              <p className="text-gray-700">
                Available in multiple colors and configurations. Choose between wired, cordless DECT, single/dual line, and various key counts to perfectly match your property.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-500">
              <h3 className="text-xl font-bold mb-4 text-amber-700">⭐ Proven Reliability</h3>
              <p className="text-gray-700">
                Backed by a comprehensive 1-year warranty reflecting confidence in quality. Time-tested design with thousands of satisfied hotel deployments worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold mb-4 text-orange-700">💼 Professional Features</h3>
              <p className="text-gray-700">
                Full speakerphone capability, message waiting indicators, and programmable function keys deliver professional communication capabilities for business guests.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold mb-4 text-yellow-700">🌍 Global Support</h3>
              <p className="text-gray-700">
                Extensive service network worldwide. Parts availability and technical support ensure your phones continue performing optimally throughout their lifespan.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-amber-700">Choose Your Perfect Configuration</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-amber-300">
                <h3 className="text-xl font-bold mb-4 text-amber-700">12 Series</h3>
                <p className="text-gray-700 mb-4">Corded single-line phone</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Compact design</li>
                  <li>✓ 3 or 6 function keys</li>
                  <li>✓ 1-year warranty</li>
                  <li>✓ Affordable solution</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-yellow-300">
                <h3 className="text-xl font-bold mb-4 text-yellow-700">38 Series Cordless</h3>
                <p className="text-gray-700 mb-4">Wireless DECT system</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Guest mobility</li>
                  <li>✓ Up to 4 handsets</li>
                  <li>✓ 1-year warranty</li>
                  <li>✓ Premium features</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-orange-300">
                <h3 className="text-xl font-bold mb-4 text-orange-700">38 Series Corded</h3>
                <p className="text-gray-700 mb-4">Hotel / Business grade</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ 5 or 10 function keys</li>
                  <li>✓ Single and Dual line</li>
                  <li>✓ 1-year warranty</li>
                  <li>✓ Complete feature set</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-700">Experience Classic Excellence</h2>
          <p className="text-lg text-gray-700 mb-8">Discover why thousands of hotels worldwide trust Classic Phone Series for reliable, feature-rich communication.</p>
          <a href="/contact" className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Demo
          </a>
        </section>
      </main>
      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Enlarged product image"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition shadow-lg"
              title="Close"
            >
              <span className="text-2xl text-black">✕</span>
            </button>
            <p className="text-white text-center mt-4 text-sm">Click anywhere to close</p>
          </div>
        </div>
      )}
    </>
  );
}
