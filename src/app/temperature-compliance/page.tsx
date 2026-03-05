"use client";

import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaThermometerHalf, FaTruck, FaTint, FaAppleAlt, FaSignal, FaWifi } from "react-icons/fa";

export default function TemperatureCompliancePage() {
  const companies = [
    { name: "BMH", logo: "logo-bmh.webp" },
    { name: "CAM", logo: "logo-cam.webp" },
    { name: "CMC", logo: "logo-cmc.webp" },
    { name: "CURE", logo: "logo-cure.webp" },
    { name: "Daily", logo: "logo-daily.webp" },
    { name: "El Ndu", logo: "logo-elndu.webp" },
    { name: "EMSY", logo: "logo-emsy.webp" },
    { name: "RIME", logo: "logo-rime.webp" },
    { name: "RINAC", logo: "logo-rinac.webp" },
    { name: "SARA", logo: "logo-sara.webp" },
    { name: "SB", logo: "logo-sb.webp" },
    { name: "Scandy", logo: "logo-scndy.webp" },
    { name: "SKEI", logo: "logo-skei.webp" },
    { name: "SVR", logo: "logo-svr.webp" },
    { name: "Symega", logo: "logo-symega.webp" },
    { name: "TN", logo: "logo-tn.webp" },
  ];

  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden min-h-screen flex flex-col justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-amber-700/40 bg-slate-800 px-4 py-1.5 text-sm font-medium text-amber-400 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
                Advanced IoT Temperature Monitoring
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-gray-100 leading-[0.9]">
                LoggFi: <br />
                <span className="text-amber-400">Realtime Temperature <br />Data Logger</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl text-balance font-light leading-relaxed">
                Advanced <strong>GSM Data Logger</strong> and <strong>WiFi Data Logger</strong> solutions for precise cold chain monitoring. <strong className="text-amber-300 font-medium">Never guess about safety again.</strong>
              </p>
            </div>
          </div>

           {/* Hero Video Section - MOVED TO DASHBOARD & INTERFACE SECTION */}
        </section>

        {/* Why This Matters to You Section - Moved to below Hero Title */}
        <WhyMattersTabs />
        <section className="py-12 md:py-20 relative overflow-hidden bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-100">
                Solutions Tailored for <span className="text-amber-400">Your Needs</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto text-balance">
                LoggFi provides reliable temperature and location tracking across critical industries requiring cold chain monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Perishable Food */}
              <div className="flex flex-col gap-6 rounded-xl border border-gray-200 py-6 group relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white hover:-translate-y-1 group-hover:border-green-500/50">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-green-500"></div>
                <div className="px-6 relative z-10">
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 bg-green-100 text-green-600">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Perishable Food</h3>
                </div>
                <div className="px-6 relative z-10">
                  <p className="text-gray-600 leading-relaxed">Maintain freshness and quality with continuous temperature monitoring throughout the supply chain.</p>
                </div>
              </div>

              {/* Pharma Products */}
              <div className="flex flex-col gap-6 rounded-xl border border-gray-200 py-6 group relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white hover:-translate-y-1 group-hover:border-rose-500/50">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-rose-500"></div>
                <div className="px-6 relative z-10">
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 bg-rose-100 text-rose-600">
                    <span className="text-2xl">💊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pharma Products</h3>
                </div>
                <div className="px-6 relative z-10">
                  <p className="text-gray-600 leading-relaxed">Protect valuable pharmaceutical products with crucial cold chain monitoring and instant alerts.</p>
                </div>
              </div>

              {/* Cold Chain Transport */}
              <div className="flex flex-col gap-6 rounded-xl border border-gray-200 py-6 group relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white hover:-translate-y-1 group-hover:border-blue-500/50">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-blue-500"></div>
                <div className="px-6 relative z-10">
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 bg-blue-100 text-blue-600">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cold Chain Transport</h3>
                </div>
                <div className="px-6 relative z-10">
                  <p className="text-gray-600 leading-relaxed">Real-time tracking of temperature-sensitive shipments with GSM/WiFi connectivity and location monitoring.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Audit Devices Section - Tabbed Interface */}
        <ComplianceDevicesTabs />

        {/* Product Comparison Section */}
        <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Technology Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-700 border-b-2 border-amber-500">
                  <tr>
                    <th className="p-4 text-left font-bold text-gray-100">Feature</th>
                    <th className="p-4 text-center font-bold text-gray-100">GSM Data Logger</th>
                    <th className="p-4 text-center font-bold text-gray-100">WiFi Only</th>
                    <th className="p-4 text-center font-bold text-gray-100">Passive Logger</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-600 hover:bg-slate-700">
                    <td className="p-4 font-semibold text-gray-100">Real-time Monitoring</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                    <td className="p-4 text-center text-amber-600">Limited</td>
                    <td className="p-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-600 hover:bg-slate-700">
                    <td className="p-4 font-semibold text-gray-100">Mobile Connectivity</td>
                    <td className="p-4 text-center text-green-600">✓ GSM/WiFi</td>
                    <td className="p-4 text-center text-green-600">✓ WiFi Only</td>
                    <td className="p-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-600 hover:bg-slate-700">
                    <td className="p-4 font-semibold text-gray-100">SMS Alerts</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                    <td className="p-4 text-center text-amber-600">App Only</td>
                    <td className="p-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-600 hover:bg-slate-700">
                    <td className="p-4 font-semibold text-gray-100">Transit Tracking</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                    <td className="p-4 text-center text-amber-600">Limited</td>
                    <td className="p-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-600 hover:bg-slate-700">
                    <td className="p-4 font-semibold text-gray-100">Data Loss Risk</td>
                    <td className="p-4 text-center font-semibold text-green-600">Minimal</td>
                    <td className="p-4 text-center font-semibold text-amber-600">Moderate</td>
                    <td className="p-4 text-center font-semibold text-red-600">High</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="p-4 font-semibold text-gray-100">Compliance Audit Ready</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                    <td className="p-4 text-center text-amber-600">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Screenshots/Interface Section */}
        <section className="max-w-6xl mx-auto py-16 px-6 bg-slate-800">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Dashboard & Interface</h2>
          
          {/* Video Section */}
          <div className="mb-12">
            <div className="rounded-2xl border border-slate-600 bg-slate-800 shadow-2xl overflow-hidden backdrop-blur-sm ring-1 ring-slate-600 relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/10 via-transparent to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-gray-200 font-semibold">LoggFi Temperature Monitor Demo</p>
                  <p className="text-sm text-gray-400 mt-2">Video Demo - temperature-data-logger.webm</p>
                </div>
              </div>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                src="/images/temperature-compliance/temperature-data-logger.webm"
              />
            </div>
          </div>

          {/* Screenshots Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-lg p-12 min-h-72 flex items-center justify-center border border-slate-600">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-gray-200 font-semibold text-lg">Mobile App Screenshot</p>
                <p className="text-sm text-gray-400 mt-2">Real-time temperature monitoring app interface</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg shadow-lg p-12 min-h-72 flex items-center justify-center border border-slate-600">
              <div className="text-center">
                <div className="text-6xl mb-4">🖥️</div>
                <p className="text-gray-200 font-semibold text-lg">Web Dashboard</p>
                <p className="text-sm text-gray-400 mt-2">Cloud analytics and compliance reporting</p>
              </div>
            </div>
          </div>

          {/* End Screenshots Grid */}
        </section>

        {/* Industry Applications */}
        <section className="bg-slate-900 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Industry Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border-l-4 border-amber-500 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-100">💊 Pharmaceutical & Vaccines</h3>
                <p className="text-gray-300">Ensure vaccines and temperature-sensitive medications are stored and transported safely. Detailed temperature logs provide compliance documentation for regulatory audits.</p>
              </div>
              <div className="p-8 border-l-4 border-amber-500 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-100">🥶 Food & Beverage</h3>
                <p className="text-gray-300">Maintain freshness and quality with continuous temperature monitoring. Prevent spoilage and waste during transit and storage with complete tracking records.</p>
              </div>
              <div className="p-8 border-l-4 border-amber-500 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-100">🧬 Laboratory Samples</h3>
                <p className="text-gray-300">Protect valuable lab samples and research materials during transit. Ensure scientific integrity with verified temperature compliance across multiple shipments.</p>
              </div>
              <div className="p-8 border-l-4 border-amber-500 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-100">⚕️ Blood & Plasma</h3>
                <p className="text-gray-300">Critical for medical transfusions with precise temperature control. Vein-to-vein tracking ensures safety from collection to administration with compliance documentation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="bg-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-100">Trusted by Global Enterprises</h2>
            <p className="text-lg text-gray-300 text-center mb-12">Leading organizations rely on LoggFi for their critical cold chain monitoring needs</p>
            
            <div className="relative mb-12 overflow-hidden">
              <style>{`
                @keyframes scroll-left {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-180px * 16)); }
                }
                .scroll-animation {
                  animation: scroll-left 40s linear infinite;
                }
                .scroll-container:hover .scroll-animation {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="scroll-container overflow-hidden">
                <div className="scroll-animation flex gap-6">
                  {companies.map((company) => (
                    <div key={company.logo} className="bg-slate-700 p-6 rounded-lg border border-slate-600 hover:shadow-md transition-all flex items-center justify-center min-h-32 flex-shrink-0" style={{ width: '160px' }}>
                      <Image
                        src={`/images/temperature-compliance/${company.logo}`}
                        alt={company.name}
                        width={120}
                        height={60}
                        className="max-w-full h-auto"
                      />
                    </div>
                  ))}
                  {companies.map((company) => (
                    <div key={`${company.logo}-duplicate`} className="bg-slate-700 p-6 rounded-lg border border-slate-600 hover:shadow-md transition-all flex items-center justify-center min-h-32 flex-shrink-0" style={{ width: '160px' }}>
                      <Image
                        src={`/images/temperature-compliance/${company.logo}`}
                        alt={company.name}
                        width={120}
                        height={60}
                        className="max-w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg shadow-lg p-8 text-center border border-slate-600">
              <p className="text-lg font-semibold text-amber-400 mb-4">✓ Serving industries across 100+ countries</p>
              <p className="text-gray-300">From startup labs to multinational enterprises, organizations worldwide trust LoggFi to protect their most critical products</p>
            </div>
          </div>
        </section>

        {/* Key Features Summary */}
        <section className="max-w-6xl mx-auto py-16 px-6 bg-slate-800">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Smart Connectivity</h3>
              <p className="text-gray-300 text-sm">GSM/WiFi dual connectivity ensures connection in any environment. Automatic data upload to secure cloud servers.</p>
            </div>
            <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Instant Notifications</h3>
              <p className="text-gray-300 text-sm">SMS and app alerts when temperatures deviate. Real-time phone notifications so you never miss a critical issue.</p>
            </div>
            <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Cloud Analytics</h3>
              <p className="text-gray-300 text-sm">Unlimited data storage with trend analysis. Generate compliance reports for audits and regulatory requirements.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Cold Chain Today</h2>
            <p className="text-lg mb-8">Join thousands of organizations using LoggFi for real-time temperature compliance monitoring. Get started with a demo or quote.</p>
            <a href="#contact" className="bg-amber-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-600 transition inline-block">
              Request Demo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function WhyMattersTabs() {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
    {
      id: "pharma",
      label: "Pharmaceutical",
      icon: FaThermometerHalf,
      title: "Pharma Safety: Precision Temperature Monitoring for Pharmaceuticals",
      description: "Different drugs. Different temperature requirements. Zero margin for error.",
      benefits: [
        "Ultra-cold monitoring for mRNA Vaccines (-80°C to -20°C)",
        "Real-time tracking for Insulin (+2°C to +8°C)",
        "Continuous logging for Monoclonal Antibodies (+2°C to +8°C)",
        "Deviation alarms for Plasma Products (-25°C or below)",
        "Ambient monitoring for Oral Solids at controlled room temperature"
      ],
      imageName: "pharma-temperature-logger.webp",
      imageColor: "from-rose-100 to-pink-100"
    },
    {
      id: "transporter",
      label: "Transporter",
      icon: FaTruck,
      title: "The Transporter: Real-Time Cold Chain Visibility, From Dock to Delivery",
      description: "Your truck is on the highway. Your customer is waiting. Instead of guessing or calling the driver, open the LoggFi dashboard.",
      benefits: [
        "Zero temperature excursions – Alerts arrive before product is at risk",
        "Instant proof of compliance – Share temperature logs with customers at delivery",
        "Driver peace of mind – They see the number. They know it's right",
        "See the exact temperature inside the refrigerated compartment updated minute-by-minute",
        "Upgrade with Display mount in cab showing current temperature in real numbers"
      ],
      imageName: "Transporter-temperature-monitoring.webp",
      imageColor: "from-blue-100 to-cyan-100"
    },
    {
      id: "blood",
      label: "Blood & Plasma",
      icon: FaTint,
      title: "Vein-to-Vein Safety: Protecting Life, Not Just Boxes",
      description: "Blood is not cargo. It is life. From the moment it leaves a donor's arm to the moment it enters a patient's vein, temperature is the difference between safe and wasted.",
      benefits: [
        "Automatic tracking from pickup at Donation Camp",
        "Real-time alerts to blood bank during Transport",
        "Proof of continuous cold chain at Hospital Receiving",
        "Know instantly if a temperature deviation occurs – not hours later",
        "Action can be taken mid-transport. Lives are protected. Waste is eliminated."
      ],
      imageName: "blood-bank-temperature-logger.webp",
      imageColor: "from-red-100 to-rose-100"
    },
    {
      id: "food",
      label: "Food & Beverage",
      icon: FaAppleAlt,
      title: "Freshness Guaranteed: Eliminate Delivery Blind Spots",
      description: "Food safety isn't just good business—it's the law. HACCP plans require documented temperature control. FSMA mandates proactive risk prevention.",
      benefits: [
        "Continuous monitoring from pick-up to drop-off",
        "Immediate alerts on any temperature deviation",
        "Digital records ready for audits and inspections",
        "Multiple temperature zones – Frozen, refrigerated, ambient",
        "Alert at minute one when issues occur. Driver notified. Problem fixed. Product safe."
      ],
      imageName: "food-temperature-monitoring.webp",
      imageColor: "from-green-100 to-emerald-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Why This Matters to <span className="text-amber-400">You</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose your industry to see how LoggFi solves your specific cold chain challenges
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === index
                  ? "bg-amber-500 text-gray-900 shadow-lg"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              {React.createElement(tab.icon, { className: "text-xl" })}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-100">{tabs[activeTab].title}</h3>
            <p className="text-lg text-gray-300">{tabs[activeTab].description}</p>
            
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-gray-100">Key Benefits:</h4>
              <ul className="space-y-2">
                {tabs[activeTab].benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-1">✓</span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 px-6 py-3 bg-amber-500 text-gray-900 rounded-lg font-semibold hover:bg-amber-600 transition-all">
              Learn More
            </button>
          </div>

          {/* Image Placeholder */}
          <div className={`bg-gradient-to-br ${tabs[activeTab].imageColor} rounded-xl shadow-lg p-12 min-h-96 flex items-center justify-center border border-slate-600`}>
            {tabs[activeTab].imageName ? (
              <Image
                src={`/images/temperature-compliance/${tabs[activeTab].imageName}`}
                alt={tabs[activeTab].label}
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            ) : (
              <div className="text-center">
                <div className="text-8xl mb-4">{React.createElement(tabs[activeTab].icon, { className: "text-8xl" })}</div>
                <p className="text-gray-200 font-semibold text-lg">{tabs[activeTab].label} Solution</p>
                <p className="text-sm text-gray-400 mt-2">Industry-specific monitoring image</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceDevicesTabs() {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
    {
      id: "gsm",
      label: "GSM Data Logger",
      icon: FaSignal,
      title: "Built for the Journey",
      description: "Our GSM data logger combines precise temperature monitoring with location-based tracking, making it ideal for mobile assets. With unlimited cloud storage and instant SMS alerts, you're always in control.",
      features: [
        "Range: -80°C to +80°C",
        "Location-Based Tracking",
        "Alerts: LED, SMS, App, Email",
        "Resolution: 0.01°C"
      ],
      connectivity: [
        "Unlimited Cloud Storage",
        "API Sharing Available",
        "Export CSV/PDF Reports",
        "No Software Installation"
      ],
      imageName: "loggfi-transparent.webp",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      id: "wifi",
      label: "WiFi Data Logger",
      icon: FaWifi,
      title: "Master of the Warehouse",
      description: "The WiFi temperature data logger offers seamless connectivity for real-time temperature monitoring. Perfect for stationary setups like hospitals and warehouses.",
      features: [
        "Range: -80°C to +80°C",
        "Unlimited Cloud Storage",
        "Alerts: LED, App, Email",
        "Resolution: 0.01°C"
      ],
      connectivity: [
        "Adjustable Intervals",
        "API Sharing Available",
        "Export CSV/PDF Reports",
        "Easy Installation"
      ],
      imageName: "wifi-data-logger-display.png",
      bgColor: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Compliance & Audit <span className="text-amber-400">Devices</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect temperature monitoring solution for your deployment
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === index
                  ? "bg-amber-500 text-gray-900 shadow-lg"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              {React.createElement(tab.icon, { className: "text-xl" })}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-100 mb-4">{tabs[activeTab].title}</h3>
              <p className="text-lg text-gray-300 mb-6">{tabs[activeTab].description}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-amber-400 mb-4">Key Features</h4>
              <ul className="space-y-2">
                {tabs[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-1">●</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-amber-400 mb-4">Connectivity & Integration</h4>
              <ul className="space-y-2">
                {tabs[activeTab].connectivity.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className={`bg-gradient-to-br ${tabs[activeTab].bgColor} rounded-xl shadow-lg p-12 min-h-96 flex items-center justify-center border border-slate-600 relative`}>
            {tabs[activeTab].imageName ? (
              <Image
                src={`/images/temperature-compliance/${tabs[activeTab].imageName}`}
                alt={tabs[activeTab].label}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto max-w-sm object-contain"
              />
            ) : (
              <div className="text-center">
                <div className="text-8xl mb-4">{React.createElement(tabs[activeTab].icon, { className: "text-8xl" })}</div>
                <p className="text-white font-semibold text-lg">{tabs[activeTab].label}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
