import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industrial Connectivity Solutions | TDME Network Services",
  description: "Enterprise-grade industrial connectivity for power stations, oil/gas fields, offshore platforms, and solar farms. Reliable networks for critical infrastructure worldwide.",
  keywords: "industrial connectivity, power station networks, oil gas solutions, offshore platforms, critical infrastructure, industrial networks",
  openGraph: {
    title: "TDME Industrial Connectivity",
    description: "Enterprise industrial connectivity for critical infrastructure",
    type: "website",
    url: "https://tdme.net/industrial",
  },
};

export default function IndustrialPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Industrial Connectivity</h1>
            <p className="text-xl">Critical communications for power, offshore, oil/gas, and renewable energy infrastructure</p>
          </div>
        </section>

        {/* Overview with Image */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <h2 className="text-3xl font-bold mb-6 text-white bg-orange-600 py-3 px-6 rounded-lg inline-block">Mission-Critical Infrastructure Connectivity</h2>
              <p className="text-lg text-gray-700 mb-8">
                Industrial operations require high-availability, secure, and reliable connectivity. TDME provides SONET/SDH, SCADA, and radio connectivity solutions for critical equipment in the most demanding environments.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-orange-600">Coverage Areas</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold mb-2 text-orange-600">⚡ Power Stations</h4>
                  <p className="text-gray-700 text-sm">Reliable connectivity for power generation, distribution, and monitoring systems. Carrier-grade switches ensure uninterrupted operations.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold mb-2 text-orange-600">🛢️ Oil & Gas Fields</h4>
                  <p className="text-gray-700 text-sm">Distributed network management across vast territories with secure encrypted connections.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold mb-2 text-orange-600">🌊 Offshore Platforms</h4>
                  <p className="text-gray-700 text-sm">Satellite and radio connectivity for remote offshore installations with high-speed communications.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold mb-2 text-orange-600">☀️ Solar Farms</h4>
                  <p className="text-gray-700 text-sm">Smart grid integration and remote management of distributed solar installations.</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg shadow-lg overflow-hidden border-2 border-orange-300">
              <Image
                src="/images/industrial/hero_industrial.webp"
                alt="Industrial Infrastructure"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Product Portfolio Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-orange-600 bg-white">Integrated Industrial Network Products</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">CTCU/CTC Union industrial networking solutions</p>

            {/* Media Converters Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 text-orange-600 border-b-4 border-orange-600 pb-4">Media Converters & Fiber Transmission</h3>
              <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
                <div>
                  <Image
                    src="/images/industrial/frm220-100g.webp"
                    alt="FRM220 Fiber Media Converter"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">FRM220 - Contact Closure Fiber Converter</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The FRM220 series fiber media converters excel at transmitting digital contact closures over extended fiber distances, delivering mission-critical relay information reliably over distances up to 120 kilometers. This modular platform supports both single-mode and multi-mode fiber options with SFP slots, making it flexible for diverse network deployments. The technology is particularly crucial for remote industrial monitoring applications where dry contact relay signals must travel long distances without signal degradation or power loss. With response times of just 4 milliseconds and automatic carrier-loss detection capabilities, the FRM220 ensures that alarm events and critical equipment status changes are communicated instantly across your industrial network. The converter can be deployed in standalone chassis or managed configurations, allowing seamless integration with existing network management systems for centralized visibility and control across geographically distributed assets.
                  </p>
                  <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                    <p className="text-sm text-gray-700"><strong>Key Applications:</strong> Remote alarm triggering, building automation, fire alarm systems, gate and traffic signal control, industrial environmental monitoring.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="order-2 md:order-1">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">IFC-FDC - Serial to Fiber Media Converter</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The IFC-FDC industrial serial-to-fiber media converter represents the backbone of long-distance industrial device connectivity, extending RS-232, RS-422, and RS-485 serial communications over fiber optics for up to 60 kilometers in single-mode configurations. This device is indispensable in manufacturing and automation environments where legacy serial devices must communicate across vast distances without electromagnetic interference. With 2.5kV galvanic isolation between ports, the IFC-FDC protects sensitive control systems from ground loop currents and surge events that could otherwise compromise data integrity. The converter supports multiple topologies including point-to-point, ring redundancy, daisy chain, and dual-cable backup configurations, providing flexibility for complex industrial networks. Industry certifications for EMC immunity (EN61000-6-2), emissions (EN61000-6-4), and mechanical robustness make it suitable for the harshest industrial, rail, and power environments. Extended temperature range versions support operation from -40°C to +75°C, ensuring reliability whether deployed in arctic oil rigs or desert solar installations.
                    </p>
                    <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                      <p className="text-sm text-gray-700"><strong>Key Applications:</strong> PLC-to-device communication, SCADA systems, building management, distributed automation, oil & gas field networks.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/images/industrial/ifc-fdc-pro-application-01.webp"
                    alt="IFC-FDC Fiber Media Converter"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Comparison Table - Media Converters */}
              <div className="mt-8 bg-white border border-gray-300 rounded-lg overflow-hidden shadow">
                <div className="bg-orange-600 text-white p-4">
                  <h5 className="text-lg font-bold">Media Converter Comparison</h5>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b-2 border-orange-600">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">Feature</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">FRM220</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">IFC-FDC</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Function</td>
                        <td className="px-4 py-3 text-gray-700">Contact Closure Transmission</td>
                        <td className="px-4 py-3 text-gray-700">Serial Device Connectivity</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Distance Range</td>
                        <td className="px-4 py-3 text-gray-700">Up to 120 km</td>
                        <td className="px-4 py-3 text-gray-700">Up to 60 km (single-mode)</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Serial Support</td>
                        <td className="px-4 py-3 text-gray-700">N/A (Relay Only)</td>
                        <td className="px-4 py-3 text-gray-700">RS-232/422/485</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Response Time</td>
                        <td className="px-4 py-3 text-gray-700">4 ms</td>
                        <td className="px-4 py-3 text-gray-700">Real-time</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Isolation</td>
                        <td className="px-4 py-3 text-gray-700">Relay isolation</td>
                        <td className="px-4 py-3 text-gray-700">2.5 kV galvanic</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Power Consumption</td>
                        <td className="px-4 py-3 text-gray-700">Max 4W</td>
                        <td className="px-4 py-3 text-gray-700">12W typical</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Industrial Cellular & Gateway Routers Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 text-orange-600 border-b-4 border-orange-600 pb-4">Industrial Cellular & Gateway Routers</h3>
              <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
                <div>
                  <Image
                    src="/images/industrial/gw211w-mq-application.webp"
                    alt="GW211W Modbus Gateway"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">GW211W - Industrial Modbus Gateway Router</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The GW211W-MQ industrial Modbus gateway router bridges the gap between legacy industrial serial devices and modern wireless and Ethernet networks, enabling seamless integration of equipment that was never designed for direct internet connectivity. Its dual-stack design supports both Wi-Fi (IEEE 802.11b/g/n) and Ethernet simultaneously, providing redundant network paths for enhanced reliability in critical operations. The Modbus RTU/ASCII/TCP protocol stack ensures compatibility with existing SCADA systems and industrial automation equipment, while the integrated RS-232 and RS-485 serial ports connect directly to older PLC systems, variable frequency drives, and sensors without requiring expensive legacy device replacements. Web-based configuration interfaces and SNMP management capabilities simplify deployment and monitoring, while 15kV ESD protection on all signals and 1.5kV magnetic isolation on Ethernet ensure equipment protection in electrically harsh industrial environments. Extended power input range (9-32V DC) accommodates diverse power distribution systems found in industrial facilities worldwide.
                  </p>
                  <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                    <p className="text-sm text-gray-700"><strong>Key Applications:</strong> IoT gateway deployment, legacy device connectivity, factory automation, energy management, building automation.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="order-2 md:order-1">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">ICR-W401 - Industrial 4G LTE Cellular Router</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The ICR-W401 industrial 4G LTE router represents the cutting edge of mobile connectivity for distributed industrial operations, providing carrier-grade wireless connectivity where wired infrastructure is impractical or impossible. Supporting LTE Cat 4, GSM, WCDMA fallback, and dual SIM slots, the ICR-W401 ensures continuous connectivity by automatically switching between carriers and network types, preventing communication gaps during network transitions or outages. The integrated IEEE 802.11n WiFi (300 Mbps) provides local area network flexibility for portable devices and guest access, while the RS-232 console port enables direct device management. GPS integration supports location tracking for mobile assets, fleet management, and remote resource mapping. The extensive VPN support (OpenVPN, IPSec with AES encryption, L2TP, PPTP, GRE) protects sensitive industrial data across public mobile networks, while built-in firewall, NAT, and advanced routing (OSPF, BGP, VRRP) capabilities enable complex network topologies. Wide operating temperature range (-30°C to +70°C) and rugged metal housing (IP30) ensure reliability in extreme climates and harsh outdoor deployments.
                    </p>
                    <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                      <p className="text-sm text-gray-700"><strong>Key Applications:</strong> Remote monitoring systems, EV charging stations, smart city infrastructure, CCTV monitoring, cellular backhaul, emergency response networks.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/images/industrial/icr-w401-401-application-01.webp"
                    alt="ICR-W401 4G Router"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Comparison Table - Cellular Routers */}
              <div className="mt-8 bg-white border border-gray-300 rounded-lg overflow-hidden shadow">
                <div className="bg-orange-600 text-white p-4">
                  <h5 className="text-lg font-bold">Industrial Gateway & Router Comparison</h5>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b-2 border-orange-600">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">Feature</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">GW211W</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">ICR-W401</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Primary Function</td>
                        <td className="px-4 py-3 text-gray-700">Modbus Gateway</td>
                        <td className="px-4 py-3 text-gray-700">Cellular Router</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Wireless Capability</td>
                        <td className="px-4 py-3 text-gray-700">WiFi 802.11b/g/n</td>
                        <td className="px-4 py-3 text-gray-700">4G LTE + WiFi</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Serial Ports</td>
                        <td className="px-4 py-3 text-gray-700">RS-232, RS-485</td>
                        <td className="px-4 py-3 text-gray-700">RS-232 + DI/DO</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">VPN Support</td>
                        <td className="px-4 py-3 text-gray-700">TCP/IP protocols</td>
                        <td className="px-4 py-3 text-gray-700">OpenVPN, IPSec, L2TP</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">GPS</td>
                        <td className="px-4 py-3 text-gray-700">No</td>
                        <td className="px-4 py-3 text-gray-700">Yes</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Temperature Range</td>
                        <td className="px-4 py-3 text-gray-700">-20°C to 70°C</td>
                        <td className="px-4 py-3 text-gray-700">-30°C to 70°C</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* PoE & Power Management Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 text-orange-600 border-b-4 border-orange-600 pb-4">PoE Extenders & Power Over Ethernet</h3>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <Image
                    src="/images/industrial/iext101-ph-application-01.webp"
                    alt="IEXT101 PoE Extender"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">IEXT101-PH - Industrial PoE Extender</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The IEXT101-PH industrial PoE extender shatters the traditional 100-meter Ethernet distance limitation, delivering both data and power over standard twisted-pair copper cabling for distances up to 800 meters—eight times the standard range. This breakthrough technology is transformative for surveillance networks, WiFi mesh deployments, and remote sensor installations where running power infrastructure separately from data cables would be cost-prohibitive and logistically challenging. Supporting both IEEE 802.3af (15.4W) and IEEE 802.3at PoE+ (30W) standards, the IEXT101-PH provides sufficient power for high-powered devices like pan-tilt-zoom cameras, industrial access points, and lighting systems at distances where standard switches would fail. The device operates via a simple local-to-remote unit configuration with automatic power sensing and DIP-switch configuration for link-fault pass-through and speed negotiation. Extended temperature ratings (-40°C to +75°C) ensure operation in arctic mining operations and desert solar installations. Standards compliance (EN50121-4, EN61000-6-2/-6-4) confirms suitability for railway and heavy industrial EMI environments.
                  </p>
                  <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                    <p className="text-sm text-gray-700"><strong>Key Applications:</strong> IP camera networks, WiFi AP extension, traffic monitoring, smart city infrastructure, remote facility management.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Infrastructure Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 text-orange-600 border-b-4 border-orange-600 pb-4">Advanced Network Infrastructure</h3>
              <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
                <div className="order-2 md:order-1">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">IBP-202 - Industrial Optical Fiber Bypass Switch</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The IBP-202 industrial optical fiber bypass switch is a mission-critical component for ultra-reliable fiber networks, automatically bypassing failed inline equipment while maintaining network continuity for the rest of the system. When an active optical inline device (such as an optical amplifier or transponder) loses power or fails, the IBP-202 switches to an optical bypass path in less than 10 milliseconds, ensuring no data loss or service interruption. This capability is indispensable in carrier networks, railway backbone systems, and power substation networks where any service interruption can have catastrophic consequences. The switch supports full wavelength ranges from 1260 to 1650nm in single-mode and 810-1340nm in multi-mode fibers, making it compatible with legacy telecom equipment and modern 100G systems. Extremely low power consumption (0.4-0.8W depending on voltage) enables deployment in remote, power-constrained locations, while redundant dual DC power inputs (9.6-60V range) provide built-in redundancy. Mechanical robustness certifications (shock, vibration, freefall per IEC standards) and extensive EMC compliance ensure reliable operation aboard moving trains, on vibrating machinery, and in electrically harsh industrial environments.
                    </p>
                    <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                      <p className="text-sm text-gray-700"><strong>Key Applications:</strong> Railway backbone networks, power substation interconnects, telecom carrier networks, fiber ring protection.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/images/industrial/ibp-202-application-01.webp"
                    alt="IBP-202 Fiber Bypass Switch"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
                <div>
                  <Image
                    src="/images/industrial/msw-4204-carrier ethernet ewitch.webp"
                    alt="MSW-4204 Ethernet Switch"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">MSW-4204 - Carrier Ethernet Network Interface Device</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The MSW-4204 L2+ Carrier Ethernet switch represents the evolution of enterprise networking, designed to serve as a network demarcation device (NID/EDD) between customer premises and service provider networks in carrier Ethernet deployments. With 4x Gigabit Ethernet RJ45 ports and 2x 10G SFP+ ports, the MSW-4204 delivers the high-speed interconnectivity demanded by modern business applications including video conferencing, cloud computing, and VoIP services. Full MEF 2.0 (Metro Ethernet Forum) certification ensures interoperability with global carrier networks, while comprehensive Ethernet OAM support (802.3ah) enables sophisticated Service Level Agreement (SLA) monitoring with per-service and per-port granularity. Advanced QoS hierarchies guarantee premium, standard, or best-effort service levels to different customer classes, while extensive VLAN capabilities (802.1Q, QinQ, MAC-based VLAN) enable flexible traffic isolation in multi-tenant environments. Redundant power supplies, dual standby management interfaces, and comprehensive firewall and access control features (RADIUS/TACACS+, IP/MAC binding, DHCP snooping) make the MSW-4204 enterprise-grade in reliability and security.
                    </p>
                  <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                    <p className="text-sm text-gray-700"><strong>Key Applications:</strong> Metro Ethernet deployments, business service demarcation, mobile backhaul, campus backbone, cloud interconnect.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="order-2 md:order-1">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">ITP-G802 - Industrial SyncE Managed Ethernet Switch</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The ITP-G802 industrial SyncE managed Ethernet switch represents the pinnacle of time-synchronized networking technology, delivering precise clock distribution and timing accuracy critical for telecommunication networks, railway systems, and financial trading platforms. The integrated Synchronous Ethernet (SyncE) interface distributes high-accuracy frequency references across all Ethernet ports, while IEEE 1588v2 Precision Time Protocol (PTP) provides nanosecond-level timing accuracy with support for Ordinary Clock, Boundary Clock, and Transparent Clock modes. This dual-timing architecture ensures that every packet arriving at the switch is timestamped with nanosecond precision, enabling applications like distributed audio/video synchronization, financial transaction logging, and control systems requiring extremely tight temporal coordination. The switch supports both point-to-point and end-to-end PTP modes, giving network architects flexibility in deployment topology. EN50155 and EN50121-4 certifications combined with IP67 hermetically sealed M12 connectors make the ITP-G802 suitable for on-board railway networks, outdoor power substations, and maritime applications subject to salt spray and high humidity. Full 20Gbps switching capacity with 8K MAC table supports dense multi-site industrial automation networks.
                    </p>
                    <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                      <p className="text-sm text-gray-700"><strong>Key Applications:</strong> Railway backbone networks, power substation control, telecom timing distribution, distributed automation, financial trading networks.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/images/industrial/itp-g802tm-g802sm-8ph24-application.webp"
                    alt="ITP-G802 SyncE Switch"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Comparison Table - Network Infrastructure */}
              <div className="mt-8 bg-white border border-gray-300 rounded-lg overflow-hidden shadow">
                <div className="bg-orange-600 text-white p-4">
                  <h5 className="text-lg font-bold">Network Infrastructure Comparison</h5>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b-2 border-orange-600">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">Feature</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">IBP-202</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">MSW-4204</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">ITP-G802</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Type</td>
                        <td className="px-4 py-3 text-gray-700">Bypass Switch</td>
                        <td className="px-4 py-3 text-gray-700">L2+ Switch</td>
                        <td className="px-4 py-3 text-gray-700">SyncE Switch</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Ports</td>
                        <td className="px-4 py-3 text-gray-700">2x Fiber</td>
                        <td className="px-4 py-3 text-gray-700">4x GbE, 2x 10G</td>
                        <td className="px-4 py-3 text-gray-700">10x GbE (M12)</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Switching Speed</td>
                        <td className="px-4 py-3 text-gray-700">&lt;10ms</td>
                        <td className="px-4 py-3 text-gray-700">54 Gbps</td>
                        <td className="px-4 py-3 text-gray-700">20 Gbps</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Timing Support</td>
                        <td className="px-4 py-3 text-gray-700">Optical bypass</td>
                        <td className="px-4 py-3 text-gray-700">Basic QoS</td>
                        <td className="px-4 py-3 text-gray-700">SyncE + 1588v2</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">EN50155</td>
                        <td className="px-4 py-3 text-gray-700">Yes</td>
                        <td className="px-4 py-3 text-gray-700">No</td>
                        <td className="px-4 py-3 text-gray-700">Yes</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Primary Use</td>
                        <td className="px-4 py-3 text-gray-700">Redundancy</td>
                        <td className="px-4 py-3 text-gray-700">Enterprise</td>
                        <td className="px-4 py-3 text-gray-700">Time-critical</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Modular Chassis & Power Management Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 text-orange-600 border-b-4 border-orange-600 pb-4">Modular Media Converter Chassis</h3>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <Image
                    src="/images/industrial/irc200-application.webp"
                    alt="IRC200 Media Converter Chassis"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">IRC200 - Industrial Media Converter Chassis</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The IRC200 is a 2U, 19-inch rack-mountable industrial media converter chassis designed to consolidate multiple media conversion functions into a single, space-efficient platform for large-scale industrial deployments. With 20 modular slots (1 for management, 19 for media converter cards), the IRC200 supports flexible combinations of Fast Ethernet, Gigabit Ethernet, serial communications, and contact closure conversion modules, allowing network architects to build exactly the configuration needed without paying for unused features. Hot-swappable dual power supplies with both AC and DC options ensure redundancy and compatibility with diverse power distribution infrastructure, while the fanless design eliminates noise and heat issues in sensitive industrial environments. The integrated Network Management Card provides SNMP, web GUI, and Telnet-based management across all installed modules, giving operations teams centralized control and visibility. Extended temperature operation (-10°C to +65°C) and IP30 rugged metal housing with shock/vibration certifications (IEC 60068) ensure reliability in demanding industrial settings. With over 2 million hour MTBF and 5-year warranty on chassis and cards, the IRC200 represents a long-term investment in network reliability.
                  </p>
                  <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                    <p className="text-sm text-gray-700"><strong>Key Applications:</strong> Large network deployments, data center edge conversion, utility networks, transportation backhaul, multi-technology infrastructure consolidation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PoE Injectors & Splitters Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 text-orange-600 border-b-4 border-orange-600 pb-4">PoE Injectors & Power Management</h3>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="order-2 md:order-1">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h4 className="text-2xl font-bold mb-4 text-white bg-orange-600 py-2 px-4 rounded inline-block">INJ-SPL01 - Industrial PoE Splitter</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The INJ-SPL01 industrial PoE splitter solves a critical problem in edge deployments: converting standard PoE power into discrete DC voltage for non-PoE equipment. This device accepts IEEE 802.3af (15.4W) or 802.3at PoE+ (30W) input and separates the data and power paths, providing clean Gigabit Ethernet data on one RJ45 port while delivering selectable DC output (12V, 19V, or 24V) via a screw terminal block. This capability is essential for retrofitting legacy industrial equipment that predates PoE standards, allowing single-cable installation from a PoE switch or injector while providing proper voltage conditioning for sensitive analog and digital circuits. The integrated voltage regulation ensures stable power despite upstream voltage variations, while multiple certification standards (EN50121-4 for railway, EN61000-6-2/-6-4 for industrial EMC) confirm suitability for harsh environments. Compact DIN-rail mounting and IP30 metal housing enable installation in confined industrial cabinets, while the extended temperature version (-40°C to +75°C) supports operation in arctic and desert climates. Exceptional MTBF (3.3 million hours) and 5-year warranty demonstrate the device's durability and manufacturer's confidence.
                    </p>
                    <div className="bg-orange-50 p-4 rounded mt-4 border-l-4 border-orange-600">
                      <p className="text-sm text-gray-700"><strong>Key Applications:</strong> Legacy equipment power conditioning, PoE infrastructure at network edge, power management in remote monitoring systems, field device electrification.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/images/industrial/INJ-SPL01-applicstion.webp"
                    alt="INJ-SPL01 PoE Splitter"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Comparison Table - Chassis & Power */}
              <div className="mt-8 bg-white border border-gray-300 rounded-lg overflow-hidden shadow">
                <div className="bg-orange-600 text-white p-4">
                  <h5 className="text-lg font-bold">Modular & Power Management Solutions Comparison</h5>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b-2 border-orange-600">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">Feature</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">IRC200</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-800">INJ-SPL01</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Type</td>
                        <td className="px-4 py-3 text-gray-700">Modular Chassis</td>
                        <td className="px-4 py-3 text-gray-700">PoE Splitter</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Form Factor</td>
                        <td className="px-4 py-3 text-gray-700">2U 19" Rack-mount</td>
                        <td className="px-4 py-3 text-gray-700">Compact DIN Rail</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Modularity</td>
                        <td className="px-4 py-3 text-gray-700">20 slots for cards</td>
                        <td className="px-4 py-3 text-gray-700">Fixed function</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Power Input</td>
                        <td className="px-4 py-3 text-gray-700">AC 100-240V, DC 48V</td>
                        <td className="px-4 py-3 text-gray-700">IEEE 802.3af/at PoE</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Output Types</td>
                        <td className="px-4 py-3 text-gray-700">Multiple (Modular)</td>
                        <td className="px-4 py-3 text-gray-700">12V, 19V, 24V DC</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700">Temperature Range</td>
                        <td className="px-4 py-3 text-gray-700">-10°C to 65°C</td>
                        <td className="px-4 py-3 text-gray-700">-40°C to 75°C (Extended)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Additional Product Images */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white bg-orange-600 py-4 px-6 rounded-lg inline-block mx-auto block">Additional Industrial Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/4g_router-monitor-bus station.webp"
                  alt="4G Router - Bus Station Monitoring"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">4G Router - Bus Station Monitoring</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/cctv_industrial.webp"
                  alt="Industrial CCTV System"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Industrial CCTV System</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/certifications.webp"
                  alt="Industry Certifications"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Industry Certifications</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/city_cctv.webp"
                  alt="City CCTV Network"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">City CCTV Network</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/Clock_Synchronization.webp"
                  alt="Clock Synchronization"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Clock Synchronization</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/Designed-for-Raill.webp"
                  alt="Railway-Designed Solutions"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Railway-Designed Solutions</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/ETC application.webp"
                  alt="ETC Application"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">ETC Application</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/frm220-ccf-application.webp"
                  alt="FRM220-CCF Application"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">FRM220-CCF Contact Closure</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/iAccess VLAN & QoS Prioritized.webp"
                  alt="iAccess VLAN & QoS"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">iAccess VLAN & QoS Prioritized</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/industrial poe switch.webp"
                  alt="Industrial PoE Switch"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Industrial PoE Switch</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/industrial-synce-switch-applisation.webp"
                  alt="Industrial SyncE Switch"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Industrial SyncE Switch</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/internet_provider_cpe.webp"
                  alt="Internet Provider CPE"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Internet Provider CPE</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/images/industrial/IP Backbone application.webp"
                  alt="IP Backbone Application"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">IP Backbone Application</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white bg-orange-600 py-4 px-6 rounded-lg inline-block mx-auto block">Technology & Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Network Infrastructure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ TDM & SONET Networks</li>
                  <li>✓ Carrier-grade switches 600Gbps</li>
                  <li>✓ Industrial switches & media converters</li>
                  <li>✓ Redundant connections</li>
                  <li>✓ Data Centers & hosting</li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Communications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ SCADA systems</li>
                  <li>✓ Radio communication</li>
                  <li>✓ STAR-LINK & RADIO</li>
                  <li>✓ VSAT systems</li>
                  <li>✓ Rugged equipment</li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Management & Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Centralized network management</li>
                  <li>✓ All communication protocols</li>
                  <li>✓ Integration protocols</li>
                  <li>✓ Power solutions</li>
                  <li>✓ Secure encryption</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white bg-orange-600 py-4 px-6 rounded-lg inline-block mx-auto block">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="text-orange-600 font-bold text-2xl mr-4">→</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-600">High Availability</h3>
                  <p className="text-gray-700">99.99% uptime SLA for mission-critical operations. Redundant systems and automatic failover ensure continuous service.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-600 font-bold text-2xl mr-4">→</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Secure Connectivity</h3>
                  <p className="text-gray-700">End-to-end encryption and secure protocols protect sensitive operational data from unauthorized access.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-600 font-bold text-2xl mr-4">→</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Remote Operations</h3>
                  <p className="text-gray-700">Control and monitor equipment from anywhere. Real-time data and analytics for informed decision-making.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-600 font-bold text-2xl mr-4">→</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Scalable Infrastructure</h3>
                  <p className="text-gray-700">Grow from small installations to large-scale operations without major infrastructure changes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
