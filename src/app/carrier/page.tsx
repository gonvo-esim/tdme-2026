import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CarrierPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Carrier & Communication</h1>
            <p className="text-xl">Next-generation telecommunications solutions for service providers and enterprises</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6">Transform Your Telecom Infrastructure</h2>
            <p className="text-lg text-gray-700 mb-8">
              The traditional network of telecom service providers will change to a new level. Prepare for higher demand of bandwidth and new communication paradigms. TDME delivers cutting-edge carrier and communication solutions that enable you to meet tomorrow's demands today.
            </p>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Advantages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4">Low Power Consumption</h3>
                <p className="text-gray-700">Energy-efficient equipment and network designs reduce operational costs and environmental impact</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4">High Data Throughput</h3>
                <p className="text-gray-700">Support for massive bandwidth requirements and future growth with scalable architecture</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4">Secure Connectivity</h3>
                <p className="text-gray-700">End-to-end encryption and advanced security protocols protect customer data and transactions</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4">Easy to Upgrade</h3>
                <p className="text-gray-700">Modular architecture enables simple upgrades without major infrastructure overhaul</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4">Connectivity Everywhere</h3>
                <p className="text-gray-700">Multi-technology support for seamless coverage across all geography and access methods</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4">Automated Customer Experience</h3>
                <p className="text-gray-700">AI-driven provisioning, billing, and support systems for superior customer satisfaction</p>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4">Fast Service Deployment</h3>
                <p className="text-gray-700">Rapid deployment of services at remote sites to enable faster time-to-market</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Backbone Infrastructure</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ High-capacity backbone networks</li>
                  <li>✓ Inter-office connectivity</li>
                  <li>✓ National and international links</li>
                  <li>✓ Redundant paths for reliability</li>
                  <li>✓ Quality of Service (QoS) management</li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Access Networks</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Fiber optic access solutions</li>
                  <li>✓ Wireless access technologies</li>
                  <li>✓ Satellite connectivity</li>
                  <li>✓ Fixed and mobile access</li>
                  <li>✓ Last-mile connectivity</li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Service Platforms</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ VoIP and voice services</li>
                  <li>✓ Video streaming platforms</li>
                  <li>✓ Data center services</li>
                  <li>✓ Cloud integration</li>
                  <li>✓ Content delivery networks</li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Management Systems</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Network management platforms</li>
                  <li>✓ Customer relationship management</li>
                  <li>✓ Billing and revenue systems</li>
                  <li>✓ Performance monitoring</li>
                  <li>✓ Provisioning automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Industry Applications</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="font-bold mb-3 text-lg">Telecom Operators</h3>
                <p className="text-sm text-gray-600">Next-generation networks for mobile and fixed-line services</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="font-bold mb-3 text-lg">Internet Service Providers</h3>
                <p className="text-sm text-gray-600">Broadband and connectivity solutions for residential and business customers</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="font-bold mb-3 text-lg">Enterprise Networks</h3>
                <p className="text-sm text-gray-600">Multi-location connectivity and cloud integration</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="font-bold mb-3 text-lg">Government</h3>
                <p className="text-sm text-gray-600">Secure and resilient communication infrastructure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-cyan-600 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Network?</h2>
            <p className="text-lg mb-8">Contact our team to discuss how TDME can help you build next-generation telecom infrastructure</p>
            <button className="bg-white text-cyan-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Get in Touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
