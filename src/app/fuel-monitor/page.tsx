"use client";

import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FuelMonitorPage() {
  const products = [
    {
      id: 1,
      title: "Universal Monitoring Platform",
      description: "All-in-one monitoring system for mobile objects (vehicles, trucks, buses, tankers) and stationary objects (fuel storage tanks, generators, transformers). Provides comprehensive real-time tracking and data analysis across diverse applications.",
      image: "page1-1-1.jpg"
    },
    {
      id: 2,
      title: "Fuel Monitoring & Control System",
      description: "Advanced fuel control and fuel-saving system with high-precision fuel level measurement. Detects and prevents fraud, unauthorized draining, and fuel theft. Provides detailed fuel tank fueling and draining information with complete audit trails.",
      image: "page1-1-2.jpg"
    },
    {
      id: 3,
      title: "GPS Vehicle Monitoring",
      description: "Satellite-based vehicle monitoring system enabling real-time operative control of vehicle movements and locations via GSM network. Remotely collects information about vehicle movement, driver activity, fuel consumption, and fuel draining events.",
      image: "page1-1-3.jpg"
    },
    {
      id: 4,
      title: "Vehicle Fuel Monitoring by Application",
      description: "Specialized monitoring solutions for passenger cars, SUVs, mini buses, light trucks, heavy trucks, buses, special machinery, building equipment, mining trucks, refrigerated trucks, and road fuel tankers. Tailored for each vehicle type's unique requirements.",
      image: "page1-2-01.jpg"
    },
    {
      id: 5,
      title: "Car Fuel Monitoring Without Extra Sensors",
      description: "Innovative adapter (GuardMagic DAFS) that works with existing resistive fuel level sensors in vehicles. Provides fuel monitoring functionality without requiring additional hardware installation, reducing technical and economic barriers.",
      image: "page1-2-02.jpg"
    },
    {
      id: 6,
      title: "Special Machinery Real-Time Monitoring",
      description: "Comprehensive monitoring for construction machinery, mining equipment, and heavy-duty vehicles. Supports multiple fuel tanks (regular and service), real-time fuel level tracking, fuel consumption analysis, fueling/draining events, and driver activity monitoring.",
      image: "page1-2-06-special.jpg"
    },
    {
      id: 7,
      title: "Refrigerator Truck Monitoring",
      description: "Integrated system monitoring refrigerated trucks with dual temperature tracking (outside and inside refrigerator), refrigerator operation time, fuel tank level in refrigeration units, truck location, vehicle movement parameters, and driver behavior analysis.",
      image: "page1-2-07-refrigerator.jpg"
    },
    {
      id: 8,
      title: "Road Fuel Tanker Real-Time Monitoring",
      description: "Specialized solution for fuel tankers providing real-time fuel cargo level monitoring in each compartment, loading and unloading control with location data, complete fuel history per tank, fraud prevention, and unauthorized fuel manipulation detection.",
      image: "page1-2-08-tanker.jpg"
    },
    {
      id: 9,
      title: "Trailer Identification System",
      description: "Automatic trailer and fuel trailer identification system integrated into the monitoring platform. Tracks which trailers are connected to tractors, maintains complete trailer history, preserves tractor-trailer connection records, and operates in fully automatic mode.",
      image: "page1-2-10-trailer-id.jpg"
    },
    {
      id: 10,
      title: "Power Management & Backup System",
      description: "Provides uninterrupted, high-quality power for vehicle monitoring modules, fuel level sensors, and other connected equipment. Features automatic hitless switching between primary power and backup battery with integrated power filtration and protection.",
      image: "page1-2-11-UBM.jpg"
    },
    {
      id: 11,
      title: "Driver Behavior & Safety Monitoring",
      description: "Comprehensive driver safety monitoring system tracking speeding, harsh braking, and unsafe driving behaviors. Provides complete safety risk assessment, prevents aggressive driving patterns, improves driver behavior, and enables driver comparison and quality analytics.",
      image: "page1-2-12-safety.jpg"
    },
    {
      id: 12,
      title: "Rail Fuel Tank Car Monitoring",
      description: "Automated monitoring system for railroad fuel tank cars enabling fixed and logged fuel level readings in automatic mode. Tracks tank locations, stops, mileage, and speed with detailed fuel history per tank and complete route tracking information.",
      image: "page1-2-14-railtank.jpg"
    },
    {
      id: 13,
      title: "Wired Fuel Tank Monitoring",
      description: "Simple and reliable fuel level monitoring solution for stationary fuel tanks located near office or monitoring rooms. Direct wired connection provides accurate real-time fuel volume measurement and basic inventory tracking.",
      image: "page1-3-02b-wired2.jpg"
    },
    {
      id: 14,
      title: "Wireless Fuel Tank Monitoring",
      description: "Remote wireless monitoring for small diesel fuel storage tanks with multi-tank support capability. Provides latest realistic fuel level information, analyzes complete fuel history including loading times and values, detects fraud and unauthorized draining.",
      image: "page1-3-03-smalltank1.jpg"
    },
    {
      id: 15,
      title: "Underground Fuel Tank Monitoring",
      description: "Specialized wireless monitoring for above-ground and underground fuel storage tanks supporting multiple tanks. Maintains realistic fuel level data, analyzes fuel history with timestamps, prevents fuel fraud and draining, and provides complete audit records.",
      image: "page1-3-04-fuelstorage1.jpg"
    },
    {
      id: 16,
      title: "Diesel Generator Fuel Tank Monitoring",
      description: "Remote wireless system for monitoring fuel levels in diesel generator backup systems with multi-tank support. Tracks fuel consumption and actual fueling events, maintains accurate fuel history, and prevents unauthorized fuel removal or fraud.",
      image: "page1-3-05-generator-tank1.jpg"
    },
    {
      id: 17,
      title: "Advanced Diesel Generator Monitoring",
      description: "Comprehensive diesel generator monitoring providing automated real-time data collection on generator status, operation, fuel level, fuel consumption, actual fueling, output voltage, and other critical parameters with full automatic operation.",
      image: "page1-3-06-generator2.jpg"
    },
    {
      id: 18,
      title: "Fueling Station Tank Monitoring",
      description: "Wireless monitoring solution for fueling station tank networks. Provides real-time fuel level data, tracks fuel loading and consumption events, maintains complete fuel history per tank, and detects fraud, unauthorized access, and fuel manipulation.",
      image: "page1-3-05-fuelingstation7.jpg"
    },
    {
      id: 19,
      title: "Solid Digital Fuel Level Sensors",
      description: "Industrial-grade digital fuel level sensors for standard and heavy-duty applications in standard and explosive environments. Features multi-tank functionality, wide temperature range support, robust die-cast aluminum sensor head, and 25mm aluminum measurement rod with M6 mounting.",
      image: "page1-4-01-sensor.jpg"
    }
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
                Advanced IoT Fuel Monitoring
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-gray-100 leading-[0.9]">
                GuardMagic: <br />
                <span className="text-amber-400">Real-time Fuel <br />Monitoring System</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl text-balance font-light leading-relaxed">
                Advanced <strong>GPS and GSM fuel monitoring</strong> solutions for vehicles, machinery, and storage tanks. <strong className="text-amber-300 font-medium">Save up to 40% fuel while preventing fraud and theft.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-3 h-14 text-lg rounded-full font-medium bg-amber-500 text-gray-900 hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl">
                  Explore Solutions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-3 h-14 text-lg rounded-full font-medium border-2 border-slate-600 text-gray-300 hover:bg-slate-700 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  Get Datasheet
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-12 md:py-20 relative overflow-hidden bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-100">
                Complete Fuel Monitoring <span className="text-amber-400">Solutions</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto text-balance">
                From vehicle fuel tracking to industrial tank monitoring, GuardMagic offers comprehensive GPS/GSM-based solutions for all fuel management needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="flex flex-col gap-6 rounded-xl border border-gray-200 py-6 group relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white hover:-translate-y-1 group-hover:border-amber-500/50"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-amber-500"></div>
                  
                  {/* Image */}
                  <div className="mx-6 h-40 rounded-lg overflow-hidden relative z-10">
                    <Image
                      src={`/images/fuel-monitor/${product.image}`}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="px-6 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                  </div>
                  
                  <div className="px-6 relative z-10 flex-grow">
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                  
                  <div className="px-6 relative z-10">
                    <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors flex items-center gap-2">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Why Choose GuardMagic?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">Save Up to 40% Fuel</h3>
                <p className="text-gray-300 text-sm">Real-time fuel consumption monitoring and analytics help optimize fuel usage and reduce operational costs significantly.</p>
              </div>
              <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">Prevent Fraud & Theft</h3>
                <p className="text-gray-300 text-sm">Detect unauthorized fuel draining, theft attempts, and fraudulent fuel manipulation with complete audit trails and instant alerts.</p>
              </div>
              <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">Real-Time Tracking</h3>
                <p className="text-gray-300 text-sm">GPS/GSM-based real-time vehicle and equipment location tracking combined with comprehensive fuel level monitoring across all assets.</p>
              </div>
              <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">Complete Analytics</h3>
                <p className="text-gray-300 text-sm">Detailed fuel history reports, consumption analysis, driver behavior monitoring, and data-driven insights for fleet optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="bg-slate-900 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Industry Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border-l-4 border-amber-500 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-100">🚚 Fleet Management</h3>
                <p className="text-gray-300">Monitor fuel consumption across your entire fleet, optimize routes, track driver behavior, and reduce fuel expenses while improving operational efficiency.</p>
              </div>
              <div className="p-8 border-l-4 border-amber-500 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-100">🏗️ Construction & Mining</h3>
                <p className="text-gray-300">Track fuel levels in heavy machinery, monitor equipment operation, prevent fuel theft on job sites, and optimize fuel usage across construction projects.</p>
              </div>
              <div className="p-8 border-l-4 border-amber-500 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-100">⛽ Fuel Distribution & Tankers</h3>
                <p className="text-gray-300">Monitor fuel cargo in tankers, control loading/unloading events, prevent fuel loss and spillage, track fuel history per compartment, and ensure safe transport.</p>
              </div>
              <div className="p-8 border-l-4 border-amber-500 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-100">🏢 Stationary Fuel Storage</h3>
                <p className="text-gray-300">Monitor fuel storage tanks, diesel generator fuel levels, fueling station inventory, and backup power systems with continuous remote wireless monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Features */}
        <section className="max-w-6xl mx-auto py-16 px-6 bg-slate-800">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Technology & Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">GPS & GSM Technology</h3>
              <p className="text-gray-300 text-sm">Advanced satellite positioning combined with global GSM cellular networks ensures continuous real-time connectivity and location tracking worldwide.</p>
            </div>
            <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Fuel History & Analytics</h3>
              <p className="text-gray-300 text-sm">Detailed fuel history logs for every tank with timestamps for fueling and draining events, consumption trends, and comprehensive audit trails for compliance.</p>
            </div>
            <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Instant Alerts & Notifications</h3>
              <p className="text-gray-300 text-sm">Real-time SMS and app notifications for unauthorized draining, suspicious activities, fuel level changes, and driver behavior violations.</p>
            </div>
            <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Power Management System</h3>
              <p className="text-gray-300 text-sm">Uninterrupted power supply with automatic battery backup, power filtration, and protection for all monitoring modules and sensors in vehicles or stationary installations.</p>
            </div>
            <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Multi-Tank Support</h3>
              <p className="text-gray-300 text-sm">Monitor multiple fuel tanks simultaneously (regular tanks, service tanks, refrigerator units) with independent tracking and history for each tank.</p>
            </div>
            <div className="p-8 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition border border-slate-600">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Multi-Application Support</h3>
              <p className="text-gray-300 text-sm">Specialized solutions for cars, trucks, buses, refrigerated vehicles, construction machinery, mining equipment, rail tankers, and stationary fuel systems.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Optimize Your Fuel Management Today</h2>
            <p className="text-lg mb-8">Join thousands of organizations using GuardMagic for real-time fuel monitoring, cost reduction, and fraud prevention. Get started with a demo or quote.</p>
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
