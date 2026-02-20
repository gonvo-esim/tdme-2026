import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Professional Services | TDME Consulting, Design & Implementation",
  description: "End-to-end consulting, design, sourcing, and turn-key connectivity solutions. TDME services for enterprise networks, industrial systems, and smart technologies worldwide.",
  keywords: "consulting services, network design, implementation, turn-key solutions, system integration, enterprise connectivity",
  openGraph: {
    title: "TDME Professional Services",
    description: "Consulting, design, sourcing, and turn-key connectivity solutions",
    type: "website",
    url: "https://tdme.net/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Professional Services</h1>
            <p className="text-xl">Consulting, design, sourcing, and turn-key solutions for your connectivity needs</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6">End-to-End Solution Delivery</h2>
            <p className="text-lg text-gray-700 mb-8">
              TDME provides comprehensive professional services to ensure your connectivity solutions are perfectly tailored to your business needs. From initial consultation through deployment and ongoing support, we're with you every step of the way.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Consulting */}
              <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-l-4 border-green-600">
                <h3 className="text-3xl font-bold mb-4 text-green-900">Consulting</h3>
                <p className="text-gray-700 mb-6">
                  Never build a network without proper understanding of your business needs. Our expert consultants work closely with your team to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Assess your current infrastructure</li>
                  <li>✓ Identify gaps and opportunities</li>
                  <li>✓ Define clear objectives and KPIs</li>
                  <li>✓ Create a roadmap for implementation</li>
                  <li>✓ Ensure ROI and business alignment</li>
                  <li>✓ Provide technology recommendations</li>
                </ul>
              </div>

              {/* Design */}
              <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">Design</h3>
                <p className="text-gray-700 mb-6">
                  Design well, and your solution will last long and serve you with minimal downtime. We deliver:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Detailed network architecture designs</li>
                  <li>✓ Redundancy and failover planning</li>
                  <li>✓ Capacity planning and scalability</li>
                  <li>✓ Security architecture and best practices</li>
                  <li>✓ Implementation timelines and resource planning</li>
                  <li>✓ Documentation and operational procedures</li>
                </ul>
              </div>

              {/* Import/Export */}
              <div className="p-8 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-lg border-l-4 border-yellow-600">
                <h3 className="text-3xl font-bold mb-4 text-yellow-900">Import/Export & Sourcing</h3>
                <p className="text-gray-700 mb-6">
                  The brand and product quality are key to safe and reliable connectivity. We provide:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Access to leading international brands</li>
                  <li>✓ Quality assurance and certification</li>
                  <li>✓ Competitive pricing and bulk discounts</li>
                  <li>✓ Logistics and customs clearance</li>
                  <li>✓ Warranty and support coordination</li>
                  <li>✓ Equipment testing and validation</li>
                </ul>
              </div>

              {/* Turn-Key Solutions */}
              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-3xl font-bold mb-4 text-purple-900">Turn-Key Solutions</h3>
                <p className="text-gray-700 mb-6">
                  Complete ELV (Extra Low Voltage) and ICT (Information & Communication Technology) turn-key solutions. We handle:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ End-to-end project management</li>
                  <li>✓ Installation and configuration</li>
                  <li>✓ Integration with existing systems</li>
                  <li>✓ User training and documentation</li>
                  <li>✓ Testing and quality assurance</li>
                  <li>✓ Handover and support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h3 className="font-bold mb-2">Discovery</h3>
                <p className="text-sm text-gray-700">Understand your business needs and current environment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h3 className="font-bold mb-2">Design</h3>
                <p className="text-sm text-gray-700">Create detailed technical design and project plan</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h3 className="font-bold mb-2">Sourcing</h3>
                <p className="text-sm text-gray-700">Procure quality equipment and materials</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                <h3 className="font-bold mb-2">Implementation</h3>
                <p className="text-sm text-gray-700">Install, configure, and integrate systems</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">5</div>
                <h3 className="font-bold mb-2">Support</h3>
                <p className="text-sm text-gray-700">Training, documentation, and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Link */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">View Our Work</h2>
            <p className="text-lg text-gray-700 mb-8">Explore our portfolio of successful projects and industry events from around the world</p>
            <a href="/projects" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
              View Projects & Events
            </a>
          </div>
        </section>

        {/* Why Choose TDME */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose TDME Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-green-600">Experience</h3>
                <p className="text-gray-700">Years of expertise delivering complex connectivity solutions across industries worldwide</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-green-600">Expertise</h3>
                <p className="text-gray-700">Certified professionals with deep knowledge of enterprise networking and security</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-green-600">Quality</h3>
                <p className="text-gray-700">Commitment to highest standards and customer satisfaction</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-green-600">Reliability</h3>
                <p className="text-gray-700">24/7 support and on-time project delivery with minimal disruption</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-green-600">Innovation</h3>
                <p className="text-gray-700">Access to latest technologies and best practices in the industry</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-green-600">Partnership</h3>
                <p className="text-gray-700">Long-term relationships built on trust and mutual success</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
