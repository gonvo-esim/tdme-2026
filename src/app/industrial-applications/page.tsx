import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industrial Applications | TDME Enterprise Solutions",
  description: "Specialized industrial applications including fuel tanker monitoring, M2M dry contact monitoring, radio communication solutions, and metro CCTV integration.",
  keywords: "industrial applications, fuel tanker monitoring, M2M monitoring, radio communication, CCTV integration, industrial solutions",
  openGraph: {
    title: "TDME Industrial Applications",
    description: "Specialized industrial connectivity applications",
    type: "website",
    url: "https://tdme.net/industrial-applications",
  },
};

export default function IndustrialApplicationsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Industrial Applications</h1>
            <p className="text-xl">Real-world connectivity solutions for critical industrial operations</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-white bg-yellow-600 py-3 px-6 rounded-lg inline-block">Proven Industrial Connectivity</h2>
            <p className="text-lg text-gray-700 mb-8">
              TDME delivers proven, reliable connectivity solutions for a wide range of industrial applications. From fuel distribution to machine-to-machine monitoring, our solutions are deployed in demanding environments worldwide.
            </p>
          </div>
        </section>

        {/* Key Applications */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 rounded-lg text-slate-900">Our Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">Fuel Tanker Monitoring</h3>
                <p className="text-gray-700 mb-4">
                  Monitor the level and location of fuel discharge in real-time. Track tanker movements, prevent unauthorized access, and optimize distribution routes.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Real-time level monitoring</li>
                  <li>✓ GPS location tracking</li>
                  <li>✓ Discharge monitoring</li>
                  <li>✓ Alerts for anomalies</li>
                  <li>✓ Historical data analytics</li>
                </ul>
              </div>

              <div className="p-8 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">M2M Monitoring</h3>
                <p className="text-gray-700 mb-4">
                  Dry contact monitoring for machine-to-machine communication. Connect any device with simple contact sensors and collect critical operational data.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Dry contact sensors</li>
                  <li>✓ Wireless connectivity</li>
                  <li>✓ Multiple data points</li>
                  <li>✓ Low power consumption</li>
                  <li>✓ Scalable architecture</li>
                </ul>
              </div>

              <div className="p-8 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">Radio Communication</h3>
                <p className="text-gray-700 mb-4">
                  Enterprise radio systems for critical communication. Motorola and HYT radio integration for seamless field team coordination.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Motorola integration</li>
                  <li>✓ HYT systems support</li>
                  <li>✓ Encrypted communication</li>
                  <li>✓ Wide coverage areas</li>
                  <li>✓ Push-to-talk service</li>
                </ul>
              </div>

              <div className="p-8 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">Industrial Switches</h3>
                <p className="text-gray-700 mb-4">
                  Carrier-grade switches designed for power stations, railways, and trains. Rugged equipment built for harsh industrial environments.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Power station certified</li>
                  <li>✓ Railway standards compliant</li>
                  <li>✓ Redundant connectivity</li>
                  <li>✓ Wide temperature range</li>
                  <li>✓ High availability design</li>
                </ul>
              </div>

              <div className="p-8 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">Metro CCTV Integration</h3>
                <p className="text-gray-700 mb-4">
                  Integrated connectivity solutions for metro CCTV systems. Connect distributed camera networks with high-bandwidth, low-latency transmission.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ High-bandwidth transmission</li>
                  <li>✓ Multiple camera feeds</li>
                  <li>✓ Centralized management</li>
                  <li>✓ Network redundancy</li>
                  <li>✓ Long-distance connectivity</li>
                </ul>
              </div>

              <div className="p-8 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">Remote Equipment Control</h3>
                <p className="text-gray-700 mb-4">
                  Control industrial equipment remotely from a command center. Enable remote maintenance, diagnostics, and emergency shutdown capabilities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Remote equipment control</li>
                  <li>✓ Real-time diagnostics</li>
                  <li>✓ Emergency response</li>
                  <li>✓ Data logging</li>
                  <li>✓ Secure authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-100 py-4 px-6 rounded-lg text-slate-900">Benefits of TDME Industrial Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Reliability</h3>
                <p className="text-gray-700">Industrial-grade equipment designed to operate 24/7 in harsh environments with minimal downtime</p>
              </div>
              <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Scalability</h3>
                <p className="text-gray-700">Start small and expand to thousands of monitoring points without infrastructure overhaul</p>
              </div>
              <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Security</h3>
                <p className="text-gray-700">Enterprise-grade encryption and authentication protect your critical operational data</p>
              </div>
              <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Cost-Effective</h3>
                <p className="text-gray-700">Reduce operational costs with automated monitoring and preventive maintenance</p>
              </div>
              <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Easy Integration</h3>
                <p className="text-gray-700">Integrate with existing industrial systems and protocols without major modifications</p>
              </div>
              <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Expert Support</h3>
                <p className="text-gray-700">24/7 technical support and maintenance to keep your operations running smoothly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 rounded-lg text-slate-900">Industry Deployments</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold mb-3 text-lg">Oil & Gas</h3>
                <p className="text-sm text-gray-600">Remote field monitoring and equipment control in challenging geographic locations</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold mb-3 text-lg">Power Generation</h3>
                <p className="text-sm text-gray-600">Critical infrastructure connectivity for power stations and distribution networks</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold mb-3 text-lg">Transportation</h3>
                <p className="text-sm text-gray-600">Rail and subway systems with integrated CCTV and communication networks</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold mb-3 text-lg">Logistics</h3>
                <p className="text-sm text-gray-600">Real-time tracking and monitoring of distributed assets and shipments</p>
              </div>
            </div>

            {/* Product Images */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg shadow-lg overflow-hidden border border-yellow-300 bg-white">
                <Image
                  src="/images/industrial/hero_industrial.webp"
                  alt="Industrial Applications Hero"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg shadow-lg overflow-hidden border border-yellow-300 bg-white">
                <Image
                  src="/images/industrial/city_cctv.webp"
                  alt="Industrial Infrastructure Monitoring"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
