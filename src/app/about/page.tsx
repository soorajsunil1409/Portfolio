"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { yPercent: 30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="bg-black w-full h-full overflow-auto" id="scroller">
      <div className="flex flex-col gap-4 p-10 lg:p-15 lg:px-15 px-10 sm:px-10 min-h-screen">
        <div className="lg:text-[80px] text-[50px] pt-6 lg:pt-0 text-white">
          About
        </div>
        <div className="w-full h-[2px] bg-white" />
        <div className="flex relative flex-col gap-6 text-white">
          <div className="mt-4 flex justify-between gap-[250px] items-center">
            <div className="text-2xl">
              <div>Sooraj S</div>
              <div>Namboothiry</div>
            </div>
            <div className="text-gray-400">
              Beyond development, Sooraj finds clarity in design, curiosity in AI,
              and inspiration in the evolving digital landscape.
            </div>
          </div>

          <div className="flex flex-col gap-10 text-[#d4d4d4] text-lg mt-6">

            {/* Education */}
            <div>
              <div className="text-2xl text-white mb-2">Education</div>
              <div>B.Tech in AI & ML, VIT Chennai</div>
            </div>


            <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-6">
              <div>
                <div className="text-4xl font-bold text-white">10+</div>
                <div className="text-sm text-[#a3a3a3]">Projects Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">5+</div>
                <div className="text-sm text-[#a3a3a3]">Tech Domains</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">4</div>
                <div className="text-sm text-[#a3a3a3]">Languages Spoken</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">3</div>
                <div className="text-sm text-[#a3a3a3]">Hackathons Won</div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="text-2xl text-white mb-2">Experience</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Intern — KPMG India (SOX Control Testing, 2025)</li>
                <li>Research — Quantum AI for ICU anomaly detection</li>
              </ul>
            </div>

            {/* Stats */}

            {/* Services */}
            <div>
              <div className="text-2xl text-white mb-2">Services</div>
              <ul className="space-y-1">
                <li>🧠 AI/ML Integration (Vision, NLP, Quantum-Aided Models)</li>
                <li>🌐 Full-Stack Web Dev (Next.js, tRPC, Tailwind)</li>
                <li>🎨 Motion & UI/UX Design (GSAP, Framer Motion)</li>
                <li>🔗 Web3 Development (Solana, IPFS, Phantom)</li>
              </ul>
            </div>

            {/* Download CV */}
            <div>
              <a
                href="/Sooraj_S_Namboothiry_CV.pdf"
                className="text-white underline text-xl"
                download
              >
                Download CV →
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
