"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "./utils/consts";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigationStore } from "./stores/useNavigationStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
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
            className="flex flex-col overflow-auto h-full w-full bg-black relative text-white"
            id="scroller"
        >
            <div className="min-h-screen">
                <div className="flex flex-col min-h-screen justify-between w-full p-8 pb-15 pr-15">
                    <div className="flex flex-col gap-10 text-[150px] justify-center tracking-tighter">
                        <div className="text-end leading-none mt-[100px]">
                            Sooraj S
                        </div>
                    </div>
                    <div className="w-full flex flex-col border-t-[1px] border-[#3c3c3c]">
                        {projects.map((project, i) => (
                            <Link href={project.url} key={i}>
                                <div
                                    ref={(el) => {
                                        itemRefs.current[i] = el;
                                    }}
                                    className="relative w-full p-5 text-2xl border-b-[1px] border-[#3c3c3c] text-end overflow-hidden"
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={() => handleMouseLeave(i)}
                                >
                                    <div className="hover-bg absolute bottom-0 left-0 w-full h-0 bg-[#3c3c3c] z-0" />
                                    <div className="relative z-0">{project.title}</div>
                                </div>
                            </Link>
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
                        onClick={() => changePage("/works", router)}
                    >
                        <div
                            ref={hoverTextColorDiv}
                            className="flex p-2 justify-between text-xl text-[#8f8f8f]"
                        >
                            <div>Hello, I&apos;m Sooraj</div>
                            <ArrowRight size={30} />
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
