import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MODA - Customizable Modular Hotel Telephone | TDME",
  description: "MODA - The future of hotel design. Customizable modular telephone with wireless charging, alarm clock, speakerphone, and voice recognition capabilities.",
  keywords: "MODA telephone, modular phone, hotel design, wireless charging, customizable",
  openGraph: {
    title: "MODA - Modular Hotel Telephone",
    description: "Innovative customizable modular telephone for modern hotels",
    type: "website",
    url: "https://tdme.net/products/moda",
  },
};

export default function MODAPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">MODA: The Future of Hotel Design</h1>
            <p className="text-xl">A unique and customizable modular telephone system</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-teal-700">Revolutionary Modular Design</h2>
            <p className="text-lg text-gray-700 mb-4">
              MODA represents a paradigm shift in hotel telephone design. With its EasyClean Shield Technology and customizable modules, MODA offers unprecedented flexibility to match your hotel's unique aesthetic and functional requirements.
            </p>
            <p className="text-lg text-gray-700">
              Perfect for today's new cleaning protocols, MODA's DuraFace premium acrylic protects the faceplate and electronic surfaces while remaining easy to clean with common cleaners.
            </p>
          </div>
        </section>

        {/* EasyClean Shield Technology */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">EasyClean Shield Technology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-700 rounded-lg border border-cyan-400">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">DuraFace Premium Protection</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Premium acrylic protects faceplate and electronic surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Fast, easy cleaning with common cleaners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>No damage from aggressive cleaning protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Perfect for modern hospitality cleaning standards</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-slate-700 rounded-lg border border-cyan-400 flex items-center justify-center">
                <Image
                  src="/images/bittel/moda-series.webp"
                  alt="MODA EasyClean Technology"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customizable Modules */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Customizable Modules</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Charging Module */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border-2 border-blue-300 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">🔌 Charging Module</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Wireless charging (optional)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Convenient charging cables magnetically attached</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>2 USB Ports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>1 USB-C Port</span>
                </li>
              </ul>
            </div>

            {/* Alarm Clock Module */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg border-2 border-purple-300 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-purple-700">⏰ Alarm Clock Module</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>TruTime ensures clock time is always correct</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>Auto dimming with ambient light sensor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>Easy to use alarm with 10 minute duration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">•</span>
                  <span>Single day alarm functionality</span>
                </li>
              </ul>
            </div>

            {/* Speakerphone Module */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-lg border-2 border-teal-300 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">📞 Speakerphone Module</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">•</span>
                  <span>Customized faceplate options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">•</span>
                  <span>4 Guest service keys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">•</span>
                  <span>Optional handset</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">•</span>
                  <span>3 Guest service keys on handset</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">•</span>
                  <span>Corded & cordless handset options</span>
                </li>
              </ul>
            </div>

            {/* Casting Module */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg border-2 border-orange-300 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-orange-700">📺 Casting Module</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">•</span>
                  <span>Wired casting for Apple & Samsung devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">•</span>
                  <span>Wireless casting capabilities</span>
                </li>
              </ul>
            </div>

            {/* Bluetooth Module */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-lg border-2 border-indigo-300 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-indigo-700">🔵 Bluetooth Module</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">•</span>
                  <span>NFC enabled Bluetooth connectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">•</span>
                  <span>Seamless device pairing</span>
                </li>
              </ul>
            </div>

            {/* Voice Recognition Module */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border-2 border-green-300 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-green-700">🎤 Voice Recognition Module</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">•</span>
                  <span>All MODA modules are "Voice Ready"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">•</span>
                  <span>Designed to work with voice recognition technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 font-bold">•</span>
                  <span>Future-proof integration capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Do You Stack */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">How Do You Stack?</h2>
            <p className="text-center text-gray-300 mb-8 text-lg">
              Customize your MODA system by stacking modules according to your specific needs and space constraints.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/bittel/moda-series.webp"
                alt="MODA Module Stacking Options"
                width={600}
                height={400}
                className="w-full max-w-2xl h-auto rounded-lg border-2 border-cyan-400"
              />
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Design Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-teal-600">
              <h3 className="text-xl font-bold mb-4 text-teal-700">🎨 Aesthetic Flexibility</h3>
              <p className="text-gray-700">Customize every aspect of your MODA phone to match your hotel's unique design language and brand identity.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-cyan-600">
              <h3 className="text-xl font-bold mb-4 text-cyan-700">🔧 Functional Modularity</h3>
              <p className="text-gray-700">Add only the modules you need. Start simple and expand as your requirements grow and technology evolves.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-4 text-blue-700">✨ Future-Ready</h3>
              <p className="text-gray-700">Built with voice recognition and smart integration in mind. Ready for tomorrow's hospitality innovations today.</p>
            </div>
          </div>
        </section>

        {/* Clean Nightstand */}
        <section className="bg-teal-50 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-teal-700">Beautiful Design. Clean Nightstand...</h2>
            <p className="text-3xl font-bold text-teal-900">PRICELESS</p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-teal-700">Transform Your Guest Experience</h2>
          <p className="text-lg text-gray-700 mb-8">Discover how MODA's customizable design can elevate your hotel's guestroom experience.</p>
          <a href="/contact" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Demo
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
