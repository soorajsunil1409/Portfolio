"use client";

import { useEffect, useRef } from "react";
import { projects } from "./utils/consts";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const helloRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (helloRef.current) {
            gsap.fromTo(
                helloRef.current,
                {
                    yPercent: -130,
                    opacity: 0,
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        scroller: "#scroller",
                        start: "top+=100px bottom",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                }
            );
        }
    }, []);

    const handleMouseEnter = (index: number) => {
        const bg = itemRefs.current[index]?.querySelector(".hover-bg");
        if (bg) {
            gsap.to(bg, {
                height: "100%",
                duration: 0.4,
                ease: "power2.out",
            });
        }
    };

    const handleMouseLeave = (index: number) => {
        const bg = itemRefs.current[index]?.querySelector(".hover-bg");
        if (bg) {
            gsap.to(bg, {
                height: "0%",
                duration: 0.4,
                ease: "power2.out",
            });
        }
    };

    return (
        <div
            className="flex flex-col overflow-auto h-full w-full bg-[#222222] relative text-white"
            id="scroller"
        >
            <div className="min-h-screen">
                <div className="flex flex-col min-h-screen justify-between w-full p-8 pb-15 pr-15">
                    <div className="flex flex-col gap-0 text-[130px] justify-center">
                        <div className="text-end font-semibold">Sooraj S</div>
                        <div className="text-end -translate-y-10 font-semibold">
                            Namboothiry
                        </div>
                    </div>
                    <div className="w-full flex flex-col border-t-[1px] border-[#3c3c3c]">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                ref={(el) => {
                                    itemRefs.current[i] = el;
                                }}
                                className="relative w-full p-5 text-2xl border-b-[1px] border-[#3c3c3c] text-end overflow-hidden cursor-pointer"
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={() => handleMouseLeave(i)}
                            >
                                <div className="hover-bg absolute bottom-0 left-0 w-full h-0 bg-[#3c3c3c] z-0" />
                                <div className="relative z-0">{project}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="flex flex-col gap-3 bg-black w-full p-18 overflow-hidden"
                    ref={scrollRef}
                >
                    <div ref={helloRef}>
                        <div className="flex justify-between text-[#8f8f8f]">
                            <div>Hello, I'm Sooraj</div>
                            <ArrowRight />
                        </div>
                        <div className="text-[50px]">
                            Check my latest projects
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
