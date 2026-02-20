import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SDH-SONET Networks | TDME Synchronous Transmission Solutions",
  description: "Synchronous Digital Hierarchy (SDH) and SONET transmission networks. High-speed, reliable optical networking for enterprise backbone infrastructure.",
  keywords: "SDH, SONET, synchronous transmission, optical networks, carrier-grade, network backbone",
  openGraph: {
    title: "TDME SDH-SONET Solutions",
    description: "Advanced SDH-SONET transmission networks",
    type: "website",
    url: "https://tdme.net/transmission/sdh-sonet",
  },
};

export default function SDHSONETPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">SDH & SONET</h1>
            <p className="text-xl">Synchronous Digital Hierarchy and Synchronous Optical Networking Infrastructure</p>
          </div>
        </section>

        {/* Transmission Menu Navigation */}
        <section className="bg-white border-b border-gray-200 py-4 px-6">
          <div className="max-w-6xl mx-auto flex gap-6 text-lg font-medium">
            <Link href="/transmission/mpls-tp" className="text-blue-600 hover:text-blue-800 underline">MPLS-TP</Link>
            <Link href="/transmission/sdh-sonet" className="text-blue-800 border-b-2 border-blue-600 pb-1">SDH-SONET</Link>
            <Link href="/transmission/carrier-ethernet" className="text-blue-600 hover:text-blue-800 underline">Carrier Ethernet</Link>
          </div>
        </section>

        {/* SDH-SONET Image */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="rounded-lg shadow-lg overflow-hidden border border-blue-200 bg-white">
            <Image
              src="/images/data-transmission/sdh_pic.webp"
              alt="SDH-SONET Network Architecture"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Synchronous Digital Hierarchy (SDH) represents a globally standardized optical transport network architecture that enables the reliable transmission of time-division multiplexed (TDM) circuits, asynchronous transfer mode (ATM) circuits, and Ethernet traffic within a synchronized digital hierarchy. SDH has been formally standardized by ETSI and the International Telecommunication Union (ITU-T) through recommendations G.707 (1/2007), G.783, G.784, and G.803 (3/1993).
            </p>
            <p className="text-lg text-gray-700">
              Synchronous Optical Networking (SONET) is functionally equivalent to SDH, developed through Telcordia and ANSI standards (T1.105). Both technologies provide identical capabilities for optical fiber transport with deterministic transmission characteristics and absolute quality-of-service guarantees through fixed bandwidth allocation.
            </p>
          </div>
        </section>

        {/* Network Hierarchy */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">SDH Network Specifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>STM1 (155 Mbps)</strong> - Basic SDH transport hierarchy level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>STM4 (622 Mbps)</strong> - Four-level multiplexed transport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>STM16 (2.5 Gbps)</strong> - Enterprise-grade transmission capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>STM64 (10 Gbps)</strong> - High-capacity metropolitan networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>STM256 (40 Gbps)</strong> - Ultra-high-capacity core networks</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">SONET Network Specifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>OC1 (51.84 Mbps)</strong> - Base optical level (not universally supported)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>OC3 (155.52 Mbps)</strong> - Equivalent to SDH STM1</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>OC12 (622.08 Mbps)</strong> - Equivalent to SDH STM4</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>OC48 (2.5 Gbps)</strong> - Equivalent to SDH STM16</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span><strong>OC192/OC768 (10/40 Gbps)</strong> - High-capacity core transmission</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Technical Architecture</h2>
            
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Synchronous Transmission Framework</h3>
            <p className="text-lg text-gray-700 mb-6">
              SDH/SONET architecture implements a high-precision synchronous network utilizing a unified master clock. This clock source generates a complete digital hierarchy with high-order multiplexing across large network nodes and low-order multiplexing within nodes, creating virtual containers (VC) and tributary units (TU) for structured signal mapping of variable bit-rate traffic.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-blue-600 mt-8">Virtual Container Technology</h3>
            <p className="text-lg text-gray-700 mb-6">
              Virtual containers enable simultaneous transport of multiple independent circuit types:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Voice & TDM Traffic:</strong> E1/T1 signals transported via VC12/VC11 containers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Data & IP Networks:</strong> Ethernet and IP traffic mapped into concatenated n×VC3 or n×VC4 structures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>ATM Networks:</strong> Asynchronous transfer mode circuits transported via VC4c containers</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700">
              Each virtual container operates as an independent circuit with permanent bandwidth reservation, dedicated synchronization, and absolute quality-of-service guarantees unaffected by other circuits sharing the same optical fiber.
            </p>
          </div>
        </section>

        {/* Infrastructure Modes */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Network Infrastructure & Protection Mechanisms</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Point-to-Point & Bus Topology</h3>
                <h4 className="text-xl font-bold mb-2 text-gray-800">Multiplexer Section Protection (MSP 1+1)</h4>
                <p className="text-gray-700 mb-3">
                  MSP 1+1 protection utilizes dual fiber pairs (RX/TX), with one pair serving as the working path and the second providing complete redundancy. Full protection encompasses all virtual circuit containers (VCxx) with automatic recovery initiated within 50 milliseconds upon fiber failure detection.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Ring Topology</h3>
                <h4 className="text-xl font-bold mb-2 text-gray-800">Sub-Network Connection Protection (SNCP)</h4>
                <p className="text-gray-700 mb-3">
                  SNCP protection is implemented over a single dual-fiber optical ring, supporting up to 64 SDH/SONET nodes with bidirectional counter-rotating transmission. The working path represents the shortest bidirectional route between two nodes, while the protection path utilizes the complementary ring section. SNCP protection is independently configured per circuit and node pair, enabling selective bandwidth optimization. Recovery time for SNCP is less than 50 milliseconds with near-identical bidirectional transmission timing characteristics.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Mesh Network Topology</h3>
                <h4 className="text-xl font-bold mb-2 text-gray-800">SNCP-MESH Protection</h4>
                <p className="text-gray-700 mb-3">
                  SNCP-MESH architecture enables multiple interconnected ring protection domains to share optical transport resources. This topology provides maximum flexibility for large-scale deployments, allowing aggregate or tributary ring protection at both core and edge network levels.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">Long-Distance & Distributed Architecture</h3>
                <p className="text-gray-700 mb-3">
                  <strong>MS-SPRing (Multiplexed Section-Shared Protection Ring):</strong> Supports four-fiber ring implementations for long-distance backbone networks with shared protection signaling.
                </p>
                <p className="text-gray-700">
                  <strong>Dual Homing Protection:</strong> Sophisticated protection architecture for large central nodes distributed across multiple buildings (MOCC and BOCC), transporting all circuits across four independent optical paths with redundant system components including CPUs and power supplies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Multiservice Support */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">TDM/PDH Transport</h3>
              <p className="text-gray-700 mb-4">
                SDH/SONET systems provide seamless transport of legacy telecommunications infrastructure including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>E1/T1 circuits and CAS signalization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>PRI (Primary Rate Interface) signalization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>E3/T3 trunk circuits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Plesiochronous Digital Hierarchy (PDH) multiplexer outputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Synchronization distribution to downstream nodes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Ethernet over SDH/SONET</h3>
              <p className="text-gray-700 mb-4">
                Modern SDH/SONET networks support Ethernet transport through standardized ITU-T EoS (Ethernet over SDH/SONET) protocols:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <span><strong>GFP-F:</strong> Generic Framing Protocol (ITU-T G.7041) for Ethernet/HDLC frame encapsulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <span><strong>VCAT:</strong> Virtual Concatenation for dynamic bandwidth allocation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <span><strong>LCAS:</strong> Link Capacity Adjustment Signaling for dynamic reallocation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ethernet Services */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Ethernet Service Models</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">E-Line Services</h3>
                <p className="text-gray-700 mb-4">
                  Point-to-point Ethernet circuits providing dedicated virtual connections with fixed bandwidth guarantees over SDH/SONET optical infrastructure.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">E-LAN Services</h3>
                <p className="text-gray-700 mb-4">
                  Multi-point Ethernet Local Area Network services enabling LAN extension across multiple SDH/SONET nodes with broadcast and multicast capabilities.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-green-600 mt-8">Layer 2 Switch Capabilities</h3>
            <p className="text-gray-700 mb-4">
              Gigabit Ethernet cards provide advanced Layer 2 switching functionality including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Protocol flow control and traffic shaping</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>VLAN and Q-in-Q (double VLAN) tagging</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>RSTP/MSTP (Rapid/Multiple Spanning Tree Protocol)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>IGMP (Internet Group Management Protocol) for multicast</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Aggregate throughput up to 622 Mbps or 2.5 Gbps</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Synchronization Distribution */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Operations, Administration & Maintenance (OAM)</h3>
              <p className="text-gray-700 mb-4">
                SDH/SONET OAM functions are transport directly within the optical signal overhead structure, providing in-band management without consuming user bandwidth:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Multiplexer section protection activation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>System management and configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Error monitoring and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Voice communication channels between nodes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Synchronization Distribution</h3>
              <p className="text-gray-700 mb-4">
                Clock synchronization is critical to SDH/SONET network stability and performance. Multiple clock sources are supported at each node:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Primary clock or Stratum/Synchronization Supply Unit (SSU)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Synchronization status messaging (SSM) for clock quality validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Internal system clock fallback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Loop-prevention mechanisms in synchronization chains</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Traffic Engineering Algorithms Image */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="rounded-lg shadow-lg overflow-hidden border border-blue-200 bg-white">
            <Image
              src="/images/data-transmission/Traffic Engineering algorithms.webp"
              alt="Traffic Engineering Algorithms"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Transport Media */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Transport Media & Extension</h2>
            <p className="text-gray-700 mb-6">
              SDH/SONET networks support multiple physical media for transport:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Optical Fiber:</strong> Primary media for SDH/SONET transport (most deployments)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Microwave Radio Links:</strong> Directional radio systems for short-haul connections</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Copper Transmission:</strong> STM1 over copper links (legacy deployments)</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-blue-600">Long-Distance Extension</h3>
            <p className="text-gray-700">
              Long-distance networks utilize optical regenerators or wavelength division multiplexing (WDM) systems for extension:
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Optical Regenerators:</strong> Signal regeneration at intervals for long-haul distances</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>CWDM:</strong> Coarse wavelength division multiplexing for fiber utilization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>DWDM:</strong> Dense wavelength division multiplexing for maximum fiber capacity</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Management */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Network Management & Orchestration</h2>
            <p className="text-gray-700 mb-6">
              Professional management platforms provide integrated control and monitoring of complex SDH/SONET networks:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Network Topology Visualization:</strong> Real-time mapping of network structure and connections</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Circuit Creation:</strong> End-to-end A-to-Z circuit provisioning with automatic node configuration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Multi-Technology Support:</strong> Mixed circuit routing across TDM/PDH, SDH/SONET, Ethernet, and MPLS domains</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Service Monitoring:</strong> Real-time performance tracking and fault detection</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg shadow-lg p-12 border border-blue-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">SDH/SONET Network Characteristics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span>Circuit-oriented transport architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span>Unified synchronous clock hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span>Deterministic transmission with guaranteed QoS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span>Seamless TDM/PDH network integration</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Fixed-rate Ethernet transport with LCAS flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Deterministic protection with &lt;50ms recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Comprehensive in-band OAM capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Automated end-to-end network commissioning</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Ideal Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Telecommunications</h3>
                <p className="text-gray-700">Voice, data, and video transport for carrier networks with guaranteed service levels</p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-green-600">Mission-Critical Communications</h3>
                <p className="text-gray-700">Military, emergency services, and security applications requiring absolute reliability</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-purple-600">Industrial & Infrastructure</h3>
                <p className="text-gray-700">Power grid, transportation networks, oil & gas operations with strict uptime requirements</p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Enterprise Networks</h3>
                <p className="text-gray-700">Large-scale multi-location networks requiring deterministic performance and redundancy</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
