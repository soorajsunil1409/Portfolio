"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { projects } from "../utils/consts";
import { ArrowRight, ArrowUpRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useNavigationStore } from "../stores/useNavigationStore";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const cardsRef = useRef<HTMLDivElement | null>(null);

    const helloRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const hoverTextColorDiv = useRef<HTMLDivElement | null>(null);

    const [isHovering, setIsHovering] = useState<boolean>(false);
    const router = useRouter();


    const { changePage } = useNavigationStore();


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

    useEffect(() => {
        if (isHovering) {
            gsap.to(hoverTextColorDiv.current, {
                color: "white",
                duration: 0.5,
                paddingRight: 0,
            });
        } else {
            gsap.to(hoverTextColorDiv.current, {
                color: "#8f8f8f",
                paddingRight: "8px",
            });
        }
    }, [isHovering]);

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
                            className="bg-gradient-to-b from-[rgb(182,133,100)] to-[rgb(229,211,180)] aspect-square shadow-[0px_-4px_16px_8px_#00000024] h-[50%] sticky top-20 rounded-lg p-12 py-10"
                        >
                            <Link href={project.url}>
                                <div className="text-white text-[40px] lg:text-[50px] size-full flex flex-col gap-10">
                                    <div className="flex justify-between items-center">
                                        {project.title}
                                        <ArrowUpRightIcon className="size-[50px]" />
                                    </div>
                                    <div className="bg-red-300 w-full rounded-3xl overflow-hidden">
                                        <img className="w-full" src={project.img} alt="" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

                <div
                    className="flex relative flex-col gap-3 bg-black w-full p-18 overflow-hidden"
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div
                        ref={helloRef}
                        onClick={() => changePage("/contact", router)}
                    >
                        <div
                            ref={hoverTextColorDiv}
                            className="flex p-2 justify-between text-xl text-[#8f8f8f]"
                        >
                            <div>Let&apos;s Collab</div>
                            <ArrowRight size={30} />
                        </div>
                        <div className="text-[50px] text-white">
                            Contact Me
                        </div>
                    </div>
                </div>
        </div>
    );
}
