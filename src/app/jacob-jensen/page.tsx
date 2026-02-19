import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function JacobJensenPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Jacob Jensen Hotel Telephones</h1>
            <p className="text-xl">Premium telephone solutions for the modern hotel experience</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Professional Hotel Communication</h2>
            <p className="text-lg text-gray-700 mb-8">
              Jacob Jensen hotel telephones are renowned worldwide for their reliability, elegant design, and user-friendly operation. Trusted by luxury hotels and hospitality establishments globally, our telephone systems deliver superior call quality and seamless integration with modern hotel management systems.
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Why Hotels Choose Jacob Jensen</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-lg mb-3">🎯 Proven Reliability</h4>
                <p className="text-gray-700">Thousands of installations worldwide with exceptional uptime and durability. Built to withstand heavy daily use in demanding hotel environments.</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-lg mb-3">✨ Elegant Design</h4>
                <p className="text-gray-700">Award-winning Scandinavian design that complements any hotel décor. Available in multiple finishes to match room aesthetics.</p>
              </div>
              <div className="p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-bold text-lg mb-3">📞 Superior Call Quality</h4>
                <p className="text-gray-700">Crystal-clear audio, noise cancellation, and advanced acoustic engineering ensure excellent voice communication for guests.</p>
              </div>
              <div className="p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-bold text-lg mb-3">🔧 Easy Integration</h4>
                <p className="text-gray-700">Seamless integration with PBX systems, hotel management software, and existing communication infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Image Section 1 */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Product Range</h2>
          <div className="rounded-lg shadow-lg overflow-hidden border-2 border-blue-300 bg-white">
            <Image
              src="/images/jacob-jensen/placeholder_jacobjensen.webp"
              alt="Jacob Jensen Telephone Systems"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-blue-50 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">🔊</div>
                <h3 className="text-xl font-bold mb-3 text-blue-700">Premium Audio</h3>
                <p className="text-gray-700 text-sm">Exceptional sound quality with noise-canceling technology and advanced speaker systems for clear conversations.</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3 text-blue-700">Design Excellence</h3>
                <p className="text-gray-700 text-sm">Scandinavian-inspired design that enhances room ambiance. Multiple colors and styles available for every hotel aesthetic.</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3 text-blue-700">Easy Operation</h3>
                <p className="text-gray-700 text-sm">Intuitive controls and user-friendly interface. Guests immediately know how to place calls without instructions.</p>
              </div>
              <div className="p-8 bg-indigo-50 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">🔌</div>
                <h3 className="text-xl font-bold mb-3 text-indigo-700">Flexible Connectivity</h3>
                <p className="text-gray-700 text-sm">Compatible with analog, digital, and VoIP systems. Easy integration with modern hotel communication platforms.</p>
              </div>
              <div className="p-8 bg-indigo-50 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-3 text-indigo-700">Secure Communication</h3>
                <p className="text-gray-700 text-sm">Advanced security features to protect guest privacy and prevent unauthorized access.</p>
              </div>
              <div className="p-8 bg-indigo-50 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold mb-3 text-indigo-700">Durability</h3>
                <p className="text-gray-700 text-sm">Heavy-duty construction built to withstand constant hotel use. Long lifespan reduces replacement costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">DESIGN FOR</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3 text-blue-700">🏨 Luxury Hotels</h3>
                <p className="text-gray-700">Premium properties where guest experience and aesthetics are paramount. Enhance room comfort with professional communication solutions.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3 text-blue-700">🏢 Business Hotels</h3>
                <p className="text-gray-700">Professional communication for business travelers. Reliable systems for corporate guests requiring seamless connectivity.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-indigo-600">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">🎯 Resort Properties</h3>
                <p className="text-gray-700">Weather-resistant designs suitable for resort environments. Easy maintenance in challenging climates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Image Section 2 */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Premium Features</h2>
          <div className="rounded-lg shadow-lg overflow-hidden border-2 border-indigo-300 bg-white">
            <Image
              src="/images/jacob-jensen/product_jacobjensen.webp"
              alt="Award-Winning Jacob Jensen Design"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Technical Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border-2 border-blue-200 rounded-lg">
                <h3 className="text-lg font-bold mb-4 text-blue-700">Communication Standards</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Analog line support</li>
                  <li>✓ Digital system compatible</li>
                  <li>✓ VoIP ready</li>
                  <li>✓ PBX integration</li>
                  <li>✓ Caller ID display</li>
                </ul>
              </div>
              <div className="p-8 border-2 border-indigo-200 rounded-lg">
                <h3 className="text-lg font-bold mb-4 text-indigo-700">Hotel Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Do Not Disturb button</li>
                  <li>✓ Conference calling</li>
                  <li>✓ Speed dial functions</li>
                  <li>✓ Bedside and desk options</li>
                  <li>✓ Customizable configurations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Upgrade Your Hotel Communication</h2>
            <p className="text-lg mb-8">Provide your guests with reliable, beautiful communication solutions. Contact us for a customized proposal.</p>
            <a href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Request Demo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
