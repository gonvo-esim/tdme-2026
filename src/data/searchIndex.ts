export interface SearchItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  keywords: string[];
  content?: string; // Full-text content for searching
}

export const searchIndex: SearchItem[] = [
  // Services
  {
    id: 'services',
    title: 'Services',
    category: 'Services',
    description: 'Comprehensive telecommunications and hospitality solutions',
    url: '/services',
    keywords: ['service', 'solutions', 'support'],
    content: `TDME Services. Comprehensive telecommunications solutions for hospitality and business.
    Consulting services for communication system design and implementation. Installation and setup support.
    Technical support and maintenance services. Staff training on communication systems. 24/7 support available.
    Customized solutions for hotels, offices, manufacturing facilities, and enterprises.`,
  },
  {
    id: 'security',
    title: 'Security & Access Control',
    category: 'Services',
    description: 'Motorola DMR, Avigilon & Pelco - Complete integrated security systems',
    url: '/security',
    keywords: ['security', 'access control', 'motorola', 'avigilon', 'pelco', 'dmr', 'cameras', 'surveillance'],
    content: `Security and Access Control Systems. Motorola MOTOTRBO Digital Mobile Radio (DMR) systems for hospitality and enterprise.
    Avigilon advanced cameras with 4K to 8K resolution and AI-powered analytics. Pelco Pro security cameras with dome and PTZ options.
    Integrated command center for centralized monitoring. Motorola radios with encrypted channels and GPS tracking.
    Perfect for hotels, casinos, and large facilities. Real-time alerts and video management. Emergency panic buttons.
    Seamless integration between radio communications, video surveillance, and access control.`,
  },
  {
    id: 'industrial-applications',
    title: 'Industrial Applications',
    category: 'Services',
    description: 'Industrial telecommunications solutions',
    url: '/industrial-applications',
    keywords: ['industrial', 'applications', 'factory', 'manufacturing'],
    content: `Industrial Applications and Solutions. Telecommunications for manufacturing and industrial environments.
    Rugged equipment for harsh conditions. Wireless communication systems for factories and plants.
    Real-time monitoring and control systems. Safety and emergency communication solutions.
    Integration with industrial IoT and automation systems. Mission-critical reliability.
    Training and support for industrial operations.`,
  },

  // Connectivity
  {
    id: 'industrial',
    title: 'Connectivity',
    category: 'Main',
    description: 'Industrial connectivity solutions',
    url: '/industrial',
    keywords: ['connectivity', 'industrial', 'network'],
    content: `Connectivity Solutions for Industrial and Enterprise Networks. Wide area network (WAN) connectivity.
    Leased line and dedicated connectivity. Carrier Ethernet services. MPLS-TP for mission-critical applications.
    SDH/SONET optical networking. Redundancy and failover capabilities. Low latency connections.
    Support for IoT and real-time applications. Network reliability and performance.`,
  },

  // Transmission
  {
    id: 'transmission',
    title: 'Transmission',
    category: 'Connectivity',
    description: 'Data transmission solutions',
    url: '/transmission',
    keywords: ['transmission', 'data', 'network'],
    content: `Data Transmission Systems. High-speed data transmission solutions.
    Synchronous optical networking (SONET) and SDH standards. MPLS-TP for packet transport.
    Carrier Ethernet services for data and voice. Multi-protocol support. Redundancy and protection switching.
    Enterprise-grade reliability and performance. Global network connectivity.`,
  },
  {
    id: 'sdh-sonet',
    title: 'SDH-SONET',
    category: 'Transmission',
    description: 'Synchronous optical networking',
    url: '/transmission/sdh-sonet',
    keywords: ['sdh', 'sonet', 'optical', 'networking'],
    content: `SDH-SONET Synchronous Optical Networking. Synchronous Digital Hierarchy (SDH) and Synchronous Optical NETwork (SONET).
    Optical transmission standards for telecommunications. High-speed data transmission over fiber optic cables.
    Supports E1, E3, STM-1, STM-4, STM-16, OC-3, OC-48 and higher rates. Automatic protection switching.
    Alarm and performance monitoring. Built-in redundancy. Global standard for backbone telecommunications.`,
  },
  {
    id: 'mpls-tp',
    title: 'MPLS-TP',
    category: 'Transmission',
    description: 'Multiprotocol Label Switching Transport Profile',
    url: '/transmission/mpls-tp',
    keywords: ['mpls', 'mpls-tp', 'label switching'],
    content: `MPLS-TP Multiprotocol Label Switching - Transport Profile. Next-generation transport protocol.
    Label switching for efficient packet routing. Support for multiple service types and QoS levels.
    Low latency and high throughput. Carrier-grade reliability and availability. OAM capabilities.
    Seamless integration with existing networks. Supports Ethernet, IP, and other protocols.`,
  },
  {
    id: 'carrier-ethernet',
    title: 'Carrier Ethernet',
    category: 'Transmission',
    description: 'Carrier-grade Ethernet solutions',
    url: '/transmission/carrier-ethernet',
    keywords: ['carrier', 'ethernet', 'carrier-ethernet'],
    content: `Carrier Ethernet Services. Carrier-grade Ethernet for business and enterprise connectivity.
    High-speed Ethernet services (10 Mbps to 100 Gbps). Metro Ethernet services. E-LAN and E-Line offerings.
    Quality of Service (QoS) for voice and video. Security and encryption options. SLA guarantees.
    Direct fiber connectivity. Redundancy and failover. Perfect for data centers and enterprises.`,
  },

  // Brand Pages
  {
    id: 'bittel',
    title: 'Bittel',
    category: 'Brands',
    description: 'Bittel phones and communication systems',
    url: '/bittel',
    keywords: ['bittel', 'phone'],
    content: `Bittel Brand Communication Systems. Professional telephone systems for hospitality and business environments.
    SIP IP phones and traditional analog phones. Models for every application from basic rooms to premium suites.
    Hotel PMS integration. Programmable function keys. Multi-line support.
    Reliable and durable equipment for commercial use. Excellent warranty and support.`,
  },
  {
    id: 'jacob-jensen',
    title: 'Jacob Jensen',
    category: 'Brands',
    description: 'Jacob Jensen premium communication devices',
    url: '/jacob-jensen',
    keywords: ['jacob jensen', 'jacob-jensen'],
    content: `Jacob Jensen Brand Premium Communication Devices. Scandinavian design excellence for phones and communication systems.
    Minimalist aesthetic with advanced features. SIP and analog phone models.
    Premium materials and craftsmanship. Perfect for luxury hotels and high-end offices.
    Elegant appearance combined with reliable functionality. Danish engineering and design.`,
  },

  // Products - Classic Phone
  {
    id: 'classic-phone',
    title: 'Classic Phone',
    category: 'Products',
    description: '12 & 38 Series corded and cordless phones',
    url: '/products/classic-phone',
    keywords: ['classic phone', 'phone', '12 series', '38 series', 'corded', 'cordless'],
    content: `Classic Phone Systems. 12 Series corded phones with 3, 6 function keys. 38 Series cordless phones with 5, 10 function keys. 
    Hotel and business grade phones. Single and dual line models. Complete feature set including hold, transfer, conference, 
    programmable keys. Available in black and ivory colors. 1 year warranty. Corded 12 TDS, Cordless 38 DC models with
    charging base and USB support. Perfect for hotel rooms, office desks, and hospitality venues.`,
  },

  // Products - Bittel SIP Phones
  {
    id: 'bittel-sip-phones',
    title: 'Bittel SIP Series',
    category: 'Products',
    description: 'IP SIP phones for business and hospitality',
    url: '/products/bittel-sip-phones',
    keywords: ['bittel', 'sip', 'ip phone', 'sip phone', '7712ip', '7713mip'],
    content: `Bittel SIP Series IP phones. Models include 7712IP, 7713MIP-LP, HA62IP-10S, HA62IP-N, HWD62IP-10S-C2-7V2, HWD62IP-10S.
    VoIP phones for SIP protocol. Enterprise-grade business communication systems. Corded and cordless options.
    Multiple line support with function keys. HD voice quality. PoE powered. Programmable keys for speed dial and features.
    Compatible with hotel PMS systems. 1 year warranty. Professional business phones for offices and hospitality.`,
  },

  // Products - Bittel Analog Phones
  {
    id: 'bittel-analog-phones',
    title: 'Bittel Analog Series',
    category: 'Products',
    description: 'Traditional analog phones for hotels and hospitality',
    url: '/products/bittel-analog-phones',
    keywords: ['bittel', 'analog phone', 'traditional phone', '7711', '7712'],
    content: `Bittel Analog Series traditional phones. Models 7711-C, 7712, HA12TSD-6S, HA62TSD-10S-Black, HA62TS-N-7V, HWD62TSD-10S.
    Corded and cordless analog phone systems. Standard telephone service compatible. Multi-line support.
    Perfect for hotels, motels, and hospitality venues. Programmable buttons for features like hold, transfer, conference.
    Durable construction for commercial environments. Black and silver finishes available. 1 year warranty.
    Traditional POTS compatible analog communication systems.`,
  },

  // Products - MODA
  {
    id: 'moda',
    title: 'MODA',
    category: 'Products',
    description: 'MODA premium communication systems',
    url: '/products/moda',
    keywords: ['moda', 'premium', 'communication'],
    content: `MODA Premium Communication Systems. Professional-grade phone systems for hospitality and business.
    Elegant design with advanced features. Support for multiple lines and extensions. Integration with modern PBX systems.
    Programmable function keys. Hold, transfer, conference capabilities. Premium materials and finishes.
    1 year warranty. Perfect for upscale hotels and executive offices.`,
  },

  // Products - MODA SE
  {
    id: 'moda-se',
    title: 'MODA SE',
    category: 'Products',
    description: 'MODA SE Scandinavian design phones',
    url: '/products/moda-se',
    keywords: ['moda se', 'moda-se', 'scandinavian'],
    content: `MODA SE Scandinavian Edition phones. Premium Scandinavian design communication devices.
    Minimalist aesthetic with maximum functionality. Available in sleek black and silver finishes.
    Multi-line support with advanced calling features. HD voice quality. Integration with modern telephony systems.
    Programmable buttons for speed dial and features. Professional appearance for boutique hotels and design-conscious businesses.
    1 year warranty. Scandinavian excellence in design.`,
  },

  // Products - UNO Media5
  {
    id: 'unomedia5-series',
    title: 'UNO Media5 Series',
    category: 'Products',
    description: 'UNO Media5 conference and communication systems',
    url: '/products/unomedia5-series',
    keywords: ['uno media5', 'unomedia5', 'conference', 'media'],
    content: `UNO Media5 Series Conference Phones. Professional communication and conference systems.
    Multiple models including C2 Handset, Corded and Cordless units. Premium audio quality with crystal-clear voice.
    Ideal for conference rooms, meeting spaces, and hospitality venues. Wideband audio technology.
    Compact slim design for modern offices. Multiple connectivity options. Support for modern communication protocols.
    1 year warranty. Enterprise-grade conference communication solution.`,
  },

  // Products - Jacob Jensen SIP Phones
  {
    id: 'jacob-jensen-sip-phones',
    title: 'Jacob Jensen SIP Phones',
    category: 'Products',
    description: 'Premium Scandinavian design SIP phones',
    url: '/products/jacob-jensen-sip-phones',
    keywords: ['jacob jensen', 'sip', 'ip phone', 'scandinavian', 'design'],
    content: `Jacob Jensen SIP Phones. Premium Scandinavian design IP phones. Models IP20D-BT6570, IP20-S3, IP60DU, IP60D, IP60WF, IPHS20D.
    Elegant minimalist design. HD voice quality. SIP protocol support. VoIP communication systems.
    Premium materials and craftsmanship. Corded and cordless models with charging base.
    Business and hospitality grade communication devices. Advanced audio with noise cancellation.
    Integration with modern PBX and cloud telephony systems. 1 year warranty.
    Scandinavian design excellence for professional environments.`,
  },

  // Products - Jacob Jensen Analog Phones
  {
    id: 'jacob-jensen-analog-phones',
    title: 'Jacob Jensen Analog Phones',
    category: 'Products',
    description: 'Premium analog phones with Scandinavian design',
    url: '/products/jacob-jensen-analog-phones',
    keywords: ['jacob jensen', 'analog', 'phone', 'scandinavian', 'design'],
    content: `Jacob Jensen Analog Phones. Premium traditional phones with Scandinavian design. Models HS20D, HT20-Black, HT20D-5, HT60-Black-Silver, HT60D.
    Elegant minimalist aesthetic. POTS compatible analog system. Premium materials and construction.
    Corded and cordless models available. Black and silver color options.
    Perfect for luxury hotels and high-end offices. Reliability and style combined.
    Programmable features including hold, transfer, and conference capabilities.
    1 year warranty. Danish design excellence in communication devices.`,
  },

  // Other Pages
  {
    id: 'about',
    title: 'About',
    category: 'Company',
    description: 'About TDME',
    url: '/about',
    keywords: ['about', 'company', 'info'],
    content: `TDME Company Information. Leading provider of telecommunications and hospitality technology solutions.
    Specializing in communication systems for hotels, offices, and enterprises.
    Experienced team with deep industry knowledge. Commitment to quality and customer support.
    Global network of partners and suppliers. Innovation in communication technology.`,
  },
  {
    id: 'contact',
    title: 'Contact',
    category: 'Company',
    description: 'Contact TDME',
    url: '/contact',
    keywords: ['contact', 'email', 'phone', 'support'],
    content: `Contact TDME for inquiries and support. Get in touch for sales, technical support, and service requests.
    Contact form available on website. Email and phone support. Office locations and team information.
    Quick response times. Expert consultation available.`,
  },
  {
    id: 'esim',
    title: 'eSIM',
    category: 'Products',
    description: 'eSIM solutions',
    url: '/esim',
    keywords: ['esim', 'sim', 'mobile'],
    content: `eSIM Embedded SIM Solutions. Modern mobile connectivity without physical SIM cards.
    Secure digital SIM technology. Multiple carrier support. IoT connectivity. Machine-to-machine communication.
    Remote SIM provisioning. Global coverage. Enterprise-grade reliability.`,
  },
  {
    id: 'network-monitoring',
    title: 'Monitoring',
    category: 'Services',
    description: 'Network monitoring solutions',
    url: '/network-monitoring',
    keywords: ['monitoring', 'network', 'monitor'],
    content: `Network Monitoring and Management Services. Real-time monitoring of telecommunications infrastructure.
    Performance analysis and reporting. Proactive issue detection and resolution.
    24/7 monitoring capabilities. Alert and notification systems. SLA compliance tracking.
    Network optimization recommendations.`,
  },
  {
    id: 'loggfi',
    title: 'LoggFi',
    category: 'Products',
    description: 'Temperature compliance logging system',
    url: '/temperature-compliance',
    keywords: ['loggfi', 'temperature', 'compliance', 'logging'],
    content: `LoggFi Temperature Compliance Logging System. Temperature monitoring for cold chain and storage.
    Real-time data logging and alerts. Cloud-based monitoring dashboard. Compliance reporting.
    Perfect for food service, pharmaceuticals, and perishables. Automated compliance documentation.
    Regulatory compliance support. Historical data tracking.`,
  },
  {
    id: 'grms',
    title: 'GRMS',
    category: 'Connectivity',
    description: 'Global Roaming Management System',
    url: '/grms',
    keywords: ['grms', 'roaming', 'global'],
    content: `GRMS Global Roaming Management System. International roaming solutions for mobile users and devices.
    Multi-carrier roaming agreements worldwide. Cost optimization and billing control.
    Mobile device management and usage monitoring. Global connectivity for business travelers.
    Coverage in 190+ countries and regions. Enterprise roaming management. Security and authentication.
    Simplified account management for global organizations. Roaming plans and rates management.`,
  },
];

export function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase().trim();
  const normalizedQuery = lowerQuery.replace(/[\s-]/g, '');
  const results: Array<{ item: SearchItem; score: number }> = [];
  const seen = new Set<string>();

  for (const item of searchIndex) {
    if (seen.has(item.id)) continue;

    let score = 0; // Ranking score for relevance

    // Normalize spaces/hyphens for matching
    const normalizedTitle = item.title.toLowerCase().replace(/[\s-]/g, '');

    // Title match (highest priority)
    if (normalizedTitle.includes(normalizedQuery) || item.title.toLowerCase().includes(lowerQuery)) {
      score += 100;
    }

    // Category match
    if (item.category.toLowerCase().includes(lowerQuery)) {
      score += 50;
    }

    // Description match
    if (item.description.toLowerCase().includes(lowerQuery)) {
      score += 40;
    }

    // Keywords match
    if (item.keywords.some((k) => k.includes(lowerQuery) || k.replace(/[\s-]/g, '').includes(normalizedQuery))) {
      score += 30;
    }

    // Content/full-text match (medium priority)
    if (item.content && item.content.toLowerCase().includes(lowerQuery)) {
      score += 20;
    }

    // If any match found, add to results
    if (score > 0) {
      results.push({ item, score });
      seen.add(item.id);
    }
  }

  // Sort by relevance score (descending)
  results.sort((a, b) => b.score - a.score);

  return results.slice(0, 10).map(({ item }) => item); // Return just the items
}
