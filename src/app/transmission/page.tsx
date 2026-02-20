import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transmission Networks | SDH, SONET, MPLS-TP & Carrier Ethernet",
  description: "Advanced transmission network solutions including SDH-SONET, MPLS-TP, and Carrier Ethernet. Carrier-grade infrastructure for enterprises worldwide.",
  keywords: "transmission networks, SDH, SONET, MPLS-TP, carrier ethernet, network infrastructure, carrier-grade",
  openGraph: {
    title: "TDME Transmission Networks",
    description: "Advanced transmission network solutions",
    type: "website",
    url: "https://tdme.net/transmission",
  },
};

export default function TransmissionPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Transmission Technologies</h1>
            <p className="text-xl">Enterprise-Grade Network Transport Solutions</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Modern telecommunications infrastructure relies on diverse transmission technologies, each designed to address specific operational requirements, performance characteristics, and deployment scenarios. Understanding the capabilities and limitations of each technology is essential for architecting reliable, scalable networks.
            </p>
            <p className="text-lg text-gray-700">
              TDME provides comprehensive solutions across three dominant transmission technologies: synchronous optical networks (SDH/SONET), multiprotocol label switching transport (MPLS-TP), and carrier-grade Ethernet services. Each technology represents a distinct approach to the core challenge of reliable, efficient data transport with carrier-grade operational characteristics.
            </p>
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Technology Overview</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* SDH-SONET Card */}
              <Link href="/transmission/sdh-sonet">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-600">SDH & SONET</h3>
                  <p className="text-gray-700 mb-4">
                    Synchronous optical networks with deterministic synchronous transmission, fixed bandwidth allocation, and comprehensive protection mechanisms for mission-critical applications.
                  </p>
                  <h4 className="font-bold text-gray-800 mb-2">Key Characteristics:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm mb-4">
                    <li>✓ Circuit-oriented architecture</li>
                    <li>✓ Synchronized clock hierarchy</li>
                    <li>✓ &lt;50ms protection recovery</li>
                    <li>✓ TDM/PDH/ATM/Ethernet transport</li>
                  </ul>
                  <span className="inline-block text-blue-600 font-bold hover:underline">Learn More →</span>
                </div>
              </Link>

              {/* MPLS-TP Card */}
              <Link href="/transmission/mpls-tp">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-lg p-8 border border-indigo-200 hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">MPLS-TP</h3>
                  <p className="text-gray-700 mb-4">
                    Packet-based transport profile combining efficient label-switching with carrier-grade operations, protection mechanisms, and advanced traffic engineering capabilities.
                  </p>
                  <h4 className="font-bold text-gray-800 mb-2">Key Characteristics:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm mb-4">
                    <li>✓ Packet-based forwarding</li>
                    <li>✓ Fast reroute (FRR) protection</li>
                    <li>✓ Traffic engineering & optimization</li>
                    <li>✓ Multiservice pseudowire support</li>
                  </ul>
                  <span className="inline-block text-indigo-600 font-bold hover:underline">Learn More →</span>
                </div>
              </Link>

              {/* Carrier Ethernet Card */}
              <Link href="/transmission/carrier-ethernet">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg p-8 border border-amber-200 hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-600">Carrier Ethernet</h3>
                  <p className="text-gray-700 mb-4">
                    Simplified, cost-effective Ethernet-based services with quality-of-service guarantees, service level agreements, and comprehensive management for enterprise connectivity.
                  </p>
                  <h4 className="font-bold text-gray-800 mb-2">Key Characteristics:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm mb-4">
                    <li>✓ E-Line point-to-point services</li>
                    <li>✓ E-LAN multipoint connectivity</li>
                    <li>✓ Bandwidth guarantees & SLAs</li>
                    <li>✓ Layer 2 switching & multicast</li>
                  </ul>
                  <span className="inline-block text-amber-600 font-bold hover:underline">Learn More →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Comparative Analysis */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Technology Comparison Matrix</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="text-left py-3 px-4 font-bold">Aspect</th>
                    <th className="text-left py-3 px-4 font-bold">SDH/SONET</th>
                    <th className="text-left py-3 px-4 font-bold">MPLS-TP</th>
                    <th className="text-left py-3 px-4 font-bold">Carrier Ethernet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><strong>Layer</strong></td>
                    <td className="py-3 px-4">Physical (Layer 1)</td>
                    <td className="py-3 px-4">Layer 2.5</td>
                    <td className="py-3 px-4">Layer 2</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4"><strong>Synchronization</strong></td>
                    <td className="py-3 px-4">Mandatory</td>
                    <td className="py-3 px-4">Optional</td>
                    <td className="py-3 px-4">Optional</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><strong>Bandwidth Model</strong></td>
                    <td className="py-3 px-4">Fixed timeslots</td>
                    <td className="py-3 px-4">Label-based variable</td>
                    <td className="py-3 px-4">Committed/Peak rates</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4"><strong>Service Models</strong></td>
                    <td className="py-3 px-4">Circuits & E-pipes</td>
                    <td className="py-3 px-4">P2P, P2MP, MP2MP</td>
                    <td className="py-3 px-4">E-Line, E-LAN, E-Tree</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><strong>Protection</strong></td>
                    <td className="py-3 px-4">MSP, SNCP, Ring</td>
                    <td className="py-3 px-4">FRR, Path, Ring</td>
                    <td className="py-3 px-4">RSTP, Link/Service redundancy</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4"><strong>OAM Capabilities</strong></td>
                    <td className="py-3 px-4">Comprehensive in-band</td>
                    <td className="py-3 px-4">Comprehensive IETF standard</td>
                    <td className="py-3 px-4">MEF/IEEE standard</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><strong>Legacy Support</strong></td>
                    <td className="py-3 px-4">Native TDM/ATM</td>
                    <td className="py-3 px-4">Pseudowire transport</td>
                    <td className="py-3 px-4">Transparent frame forwarding</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4"><strong>Deployment Trend</strong></td>
                    <td className="py-3 px-4">Mature/Legacy</td>
                    <td className="py-3 px-4">Growing adoption</td>
                    <td className="py-3 px-4">Dominant modern choice</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Selection Guide */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Technology Selection Guide</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Choose SDH/SONET When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Existing infrastructure investment requires compatibility</li>
                  <li>• TDM/voice circuit transport is primary use case</li>
                  <li>• Synchronization is critical network requirement</li>
                  <li>• Legacy equipment integration is necessary</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Choose MPLS-TP When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Transitioning from circuit to packet-based networks</li>
                  <li>• Advanced traffic engineering requirements</li>
                  <li>• Multi-service support (TDM, ATM, Ethernet, IP) is needed</li>
                  <li>• Flexible, rapid service provisioning is priority</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-bold mb-3 text-amber-600">Choose Carrier Ethernet When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cost efficiency and simplicity are important factors</li>
                  <li>• Enterprise WAN connectivity (E-Line) is primary requirement</li>
                  <li>• Layer 2 network extension is needed</li>
                  <li>• Building modern, standards-based infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Common Deployment Scenarios</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-slate-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-slate-600">Telecommunications Providers</h3>
                <p className="text-gray-700 mb-3">
                  Large carriers operate heterogeneous networks combining SDH/SONET backbones (legacy), MPLS-TP metropolitan networks (transition), and Carrier Ethernet edge services (growth).
                </p>
                <p className="text-sm text-gray-600"><strong>Key Challenge:</strong> Managing multi-technology complexity while modernizing infrastructure</p>
              </div>

              <div className="border-l-4 border-slate-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-slate-600">Enterprise Networks</h3>
                <p className="text-gray-700 mb-3">
                  Enterprises increasingly rely on Carrier Ethernet services for WAN connectivity, with MPLS-TP for advanced traffic management and SDH/SONET for legacy voice infrastructure.
                </p>
                <p className="text-sm text-gray-600"><strong>Key Challenge:</strong> Transitioning from private circuit networks to shared managed services</p>
              </div>

              <div className="border-l-4 border-slate-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-slate-600">Data Centers & Cloud</h3>
                <p className="text-gray-700 mb-3">
                  Data center interconnect (DCI) heavily relies on Carrier Ethernet (high capacity, low cost) with MPLS-TP for traffic engineering and advanced multicast features.
                </p>
                <p className="text-sm text-gray-600"><strong>Key Challenge:</strong> Supporting 10+Gbps connectivity with predictable performance</p>
              </div>

              <div className="border-l-4 border-slate-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-slate-600">Mission-Critical Infrastructure</h3>
                <p className="text-gray-700 mb-3">
                  Power utilities, emergency services, and transportation networks predominantly use SDH/SONET for uncompromising reliability, with Carrier Ethernet as secondary connectivity.
                </p>
                <p className="text-sm text-gray-600"><strong>Key Challenge:</strong> Achieving 99.999% availability with 50ms protection switching</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
