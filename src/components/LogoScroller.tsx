'use client';

import Image from 'next/image';

const logos = [
  'avigilon',
  'bittel',
  'bosch',
  'ctcu',
  'edge-core',
  'hp-aruba',
  'huawei',
  'jacobjensen',
  'linux',
  'loop',
  'mitel',
  'motorola',
  'pelco',
  'robotmea',
  'rukus',
  'samsung',
  'sony',
  'tras',
  'visualux',
];

export default function LogoScroller() {
  return (
    <section className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Trusted By Industry Leaders</h2>
        
        <div className="relative flex overflow-x-hidden bg-gray-50 rounded-lg py-8">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll {
              animation: scroll 60s linear infinite;
            }

            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex animate-scroll space-x-12">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 flex items-center justify-center"
              >
                <Image
                  src={`/images/home/${logo}.webp`}
                  alt={logo}
                  width={160}
                  height={80}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
