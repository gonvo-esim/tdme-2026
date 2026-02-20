import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects & Events | TDME Global Implementations & Case Studies",
  description: "View TDME's successful projects and industry events worldwide. From data centers in Ethiopia to smart hotels in Zanzibar, and tech installations across the Middle East.",
  keywords: "projects, case studies, implementation, installations, events, global, industry experience",
  openGraph: {
    title: "TDME Projects & Events",
    description: "Successful global implementations and industry events",
    type: "website",
    url: "https://tdme.net/projects",
  },
};

const projects = [
  { name: "Arabia Travel Market Show 2019", images: ["arabia-travel-market-show-2019.jpg", "arabia-travel-market-show-2019-2.jpg"] },
  { name: "Bittel New Building Showcase", images: ["bittel-new-building-showcase-1.jpg", "bittel-new-building-showcase-2.jpg"] },
  { name: "Ceiling Projector - Tanzania 2018", images: ["ceiling-projector-tanzania-2018.jpg"] },
  { name: "Congo Hotel - Server Room", images: ["congo-hotel-server-room.jpg"] },
  { name: "Congo Hotel - Structure Cabling 2019", images: ["congo-structure-cabling-hotel-2019.jpg", "congo-structure-cabling-hotel-2019-2.jpg"] },
  { name: "CTCU Taiwan Visit 2015", images: ["ctcu-taiwan-visit-2015.jpg"] },
  { name: "Data Center - Hotel Ethiopia 2018", images: ["data-center-hotel-ethiopia-2018.JPG"] },
  { name: "Hotel Africana - Uganda 2016", images: ["hotel-africana-uganda-2016.JPG"] },
  { name: "Hotel Visit - Tanzania 2017", images: ["hotel-visit-tanzania-2017.jpg"] },
  { name: "Korea Visit - MiniRobo 2018", images: ["korea-visit-minirobo-2018.JPG"] },
  { name: "Korea Visit - Robotron 2018", images: ["korea-visit-robotron-2018.JPG", "korea-visit-robotron-sign-contract-2018.JPG"] },
  { name: "Mitel Event 2019", images: ["mitel-event-2019.jpg", "mitel-event19-1.jpg", "mitel-expo-2019-2.jpg", "Mitel Feras team 1.jpg"] },
  { name: "Shoji KHD", images: ["shoji-khd.JPG"] },
  { name: "SmartGen Connections", images: ["SmartGen Connections.jpg"] },
  { name: "Solar Panel Projects", images: ["solar-panel.jpg", "solar2.jpg"] },
  { name: "Stone Town Tour", images: ["stone-town-tour_003.jpg", "stone-town-tour_011.jpg"] },
  { name: "Tech Team", images: ["tech_team_350x350.jpg"] },
  { name: "Unify System - Tanzania 2017", images: ["unify-system-tanzania-2017.jpg"] },
  { name: "Wireless Installation - Outdoor 2007", images: ["wireless-installation-outdoor-2007.jpg"] },
  { name: "Wireless Outdoor - 2009 & 2010", images: ["wireless-outdoor-2009.jpg", "wireless-outdoor-2010.jpg"] },
  { name: "Zanzibar Hotel - PBX Installation 2018", images: ["zanzibar-hotel-installation-pbx-2018.jpg", "zanzibar-hotel-installation-pbx-2018-2.jpg"] },
];

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Our Projects & Events</h1>
            <p className="text-xl">Showcasing our successful implementations and industry engagement worldwide</p>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="max-w-6xl mx-auto py-20 px-6">
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                  <h2 className="text-3xl font-bold text-blue-900">{project.name}</h2>
                </div>
                <div className="p-8">
                  <div className={`grid gap-6 ${project.images.length === 1 ? "grid-cols-1" : project.images.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
                    {project.images.map((image, imgIdx) => (
                      <div key={imgIdx} className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square hover:shadow-lg transition">
                        <Image
                          src={`/images/projects/${image}`}
                          alt={`${project.name} - Image ${imgIdx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
