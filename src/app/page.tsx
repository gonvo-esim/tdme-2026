import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-black text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Global Connectivity Solutions</h1>
            <p className="text-xl text-gray-300 mb-8">
              Enterprise-grade connectivity for industrial, commercial, and mobile applications worldwide
            </p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Solutions</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Smart Hotel Solutions"
              description="Advanced room control systems with Bluetooth Mesh, occupancy detection, and integrated IoT platform for modern hospitality."
              href="/grms"
            />
            <ProductCard
              title="Industrial Connectivity"
              description="Power stations, offshore platforms, oil/gas fields, and solar farms connectivity solutions."
              href="/industrial"
            />
            <ProductCard
              title="Data Transmission"
              description="Network management systems, TDM networks, carrier-grade switches, and data centers."
              href="/data-transmission"
            />
            <ProductCard
              title="Hospitality Phones"
              description="Premium telephone systems and smart devices for hotel guestrooms, bathrooms, and business centers."
              href="/bittel"
            />
            <ProductCard
              title="Security & Access"
              description="Command & control centers, access control, surveillance, and perimeter security systems."
              href="/security"
            />
            <ProductCard
              title="Services"
              description="Consulting, design, import/export, and turn-key solution implementation."
              href="/services"
            />
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose TDME</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Industrial Applications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Fuel tanker monitoring & location tracking</li>
                  <li>✓ M2M dry contact monitoring</li>
                  <li>✓ Radio communication (Motorola & HYT)</li>
                  <li>✓ Industrial switches & power solutions</li>
                  <li>✓ Metro CCTV integrated connectivity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Commercial & Hospitality Applications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ PBX & telephone systems (Mitel & Grandstream)</li>
                  <li>✓ Hospitality phones (Bittel)</li>
                  <li>✓ GRMS & Smart hotel solutions</li>
                  <li>✓ GSM repeaters & signal boosters</li>
                  <li>✓ Enterprise communication solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-900 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Consulting</h3>
                <p className="text-gray-300">Never build network without proper understanding of your business needs.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-gray-300">Design well, will last long and serve you with less down-time.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Import/Export</h3>
                <p className="text-gray-300">The brand & product quality is key to safe & reliable connectivity.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Turn-Key Solutions</h3>
                <p className="text-gray-300">Complete ELV & ICT turn-key solutions for all requirements.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
