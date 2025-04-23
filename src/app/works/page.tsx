"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { projects } from "../utils/consts";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const cardsRef = useRef<HTMLDivElement | null>(null);
    const color = ["#ffffff"];

    useEffect(() => {
        const cards = Array.from(cardsRef.current?.children || []);

        cards.forEach((card) => {
            gsap.set(card, {
                rotation: -4,
            });
        });

        cards.forEach((card) => {
            gsap.to(card, {
                rotation: 0,
                scrollTrigger: {
                    scroller: "#scroller",
                    trigger: card,
                    start: "top+=100px bottom",
                    end: "bottom-=100px bottom",
                    scrub: true,
                },
            });
        });
    }, []);

    return (
        <div className="bg-black w-full h-full overflow-auto" id="scroller">
            <div className="flex flex-col gap-4 p-10 lg:p-15 lg:px-15 px-10 sm:px-10 min-h-screen">
                <div className="lg:text-[80px] text-[50px] pt-6 lg:pt-0 text-white">
                    Works
                </div>
                <div className="w-full h-[2px] bg-white" />
                <div className="bg-black h-[300px] w-full" />
                <div className="flex relative flex-col gap-6" ref={cardsRef}>
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-b from-[rgb(182,133,100)] to-[rgb(229,211,180)] aspect-square shadow-[0px_-4px_16px_8px_#00000024] w-full sticky top-20 rounded-lg p-12 py-10"
                        >
                            <div className="text-white text-[40px] lg:text-[50px]">
                                {project}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
