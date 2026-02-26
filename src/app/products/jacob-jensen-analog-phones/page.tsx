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
    series: "Jacob Jensen Analog Models",
    images: [
      { name: "HS20D", src: "https://en.tdme.net/wp-content/uploads/2024/04/HS20D.webp" },
      { name: "HT20-Black", src: "https://en.tdme.net/wp-content/uploads/2024/04/HT20-Black.webp" },
      { name: "HT20D-5", src: "https://en.tdme.net/wp-content/uploads/2024/04/HT20D-5.webp" },
      { name: "HT60-Black-Silver", src: "https://en.tdme.net/wp-content/uploads/2024/04/HT60-Black-Silver.webp" },
      { name: "HT60D", src: "https://en.tdme.net/wp-content/uploads/2024/04/HT60D.webp" },
    ],
  },
];

export default function JacobJensenAnalogPage() {
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
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Jacob Jensen Analog Phones</h1>
            <p className="text-xl">Premium traditional communication with timeless Scandinavian design</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-indigo-700">Scandinavian Excellence in Analog</h2>
            <p className="text-lg text-gray-700 mb-4">
              Jacob Jensen analog phones bring the same design excellence and quality craftsmanship to traditional POTS systems. Perfect for properties that value proven analog reliability while appreciating sophisticated Nordic design.
            </p>
            <p className="text-lg text-gray-700">
              These premium analog phones seamlessly integrate with existing telephone infrastructure, delivering exceptional voice quality and elegant aesthetics that complement any hotel environment.
            </p>
          </div>
        </section>

        {/* Product Images Gallery */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-indigo-400">Product Lines</h2>
            <div className="space-y-12">
              {/* Jacob Jensen Analog Models */}
              <div className="border-l-4 border-indigo-400 pl-8">
                <h3 className="text-2xl font-bold mb-8 text-indigo-300">Jacob Jensen Analog Models</h3>
                <div className="p-8 bg-slate-700 rounded-lg border border-indigo-400">
                  <h4 className="text-xl font-bold mb-6 text-indigo-300">📸 Product Images</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {productImages[0].images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleImageClick(img.src)}
                        className="relative h-40 rounded-lg overflow-hidden border-2 border-indigo-300 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer bg-gray-600"
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

        {/* Key Features */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-indigo-400">Premium Analog Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-700 rounded-lg border border-indigo-400">
                <h3 className="text-2xl font-bold mb-6 text-indigo-300">🎨 Design Excellence</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Award-winning Scandinavian design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Premium materials and finishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Multiple color options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Timeless aesthetic appeal</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-purple-400">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">🔌 Universal POTS Compatibility</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Full POTS protocol compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Compatible with all analog PBX systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Standard RJ11 connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>No special provisioning required</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-indigo-400">
                <h3 className="text-2xl font-bold mb-6 text-indigo-300">🔊 Superior Audio Quality</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Clear, natural voice transmission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Full-duplex speakerphone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Professional-grade components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Excellent frequency response</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-purple-400">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">🛡️ Reliability & Durability</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Industrial-quality manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Built to withstand heavy use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>1-year comprehensive warranty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Proven in thousands of deployments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Models Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Available Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg border-2 border-indigo-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-indigo-700">Compact Series</h3>
              <p className="text-gray-700 mb-4">
                Space-efficient models perfect for modern hotel rooms with sleek Nordic design and reliable performance.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-700">HT20 Series</h4>
                  <p className="text-sm text-gray-600 mt-1">Compact corded design with premium finishes</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-lg border-2 border-purple-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">Premium Series</h3>
              <p className="text-gray-700 mb-4">
                Full-featured premium models with advanced functionality for luxury hospitality properties.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700">HT60 Series</h4>
                  <p className="text-sm text-gray-600 mt-1">Premium design with comprehensive features</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Jacob Jensen Analog */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-indigo-700">Why Choose Jacob Jensen Analog Phones</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-indigo-600">
                <div className="text-3xl mr-4">✨</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-700">Timeless Design</h3>
                  <p className="text-gray-700">Jacob Jensen's iconic design philosophy creates phones that enhance your guest room aesthetic while remaining functional and reliable for decades.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
                <div className="text-3xl mr-4">💎</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Premium Quality</h3>
                  <p className="text-gray-700">Handcrafted with attention to detail, these phones combine Scandinavian design principles with superior audio quality and durability.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-indigo-600">
                <div className="text-3xl mr-4">🔄</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-700">Easy Integration</h3>
                  <p className="text-gray-700">Standard POTS compatibility means simple installation with your existing analog infrastructure. No specialized setup or provisioning required.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Elevate Your Analog Communication</h2>
          <p className="text-lg text-gray-700 mb-8">Experience the perfect blend of Scandinavian design and reliable analog technology with Jacob Jensen phones.</p>
          <a href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Demo
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
