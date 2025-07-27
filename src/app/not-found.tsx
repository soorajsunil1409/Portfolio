"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useNavigationStore } from "./stores/useNavigationStore";

export default function NotFound() {
    const textRef = useRef<HTMLDivElement | null>(null);
    const hoverRef = useRef<HTMLDivElement | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const router = useRouter();

    const { changePage } = useNavigationStore();

    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(
                textRef.current,
                { yPercent: 50, opacity: 0 },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                }
            );
        }
    }, []);

    useEffect(() => {
        if (isHovering) {
            gsap.to(hoverRef.current, {
                color: "white",
                duration: 0.4,
            });
        } else {
            gsap.to(hoverRef.current, {
                color: "#8f8f8f",
            });
        }
    }, [isHovering]);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-white px-6 text-center">
            <div
                className="text-[150px] font-bold leading-none tracking-tighter"
                ref={textRef}
            >
                404
            </div>
            <div className="text-2xl text-[#8f8f8f] mb-10">Page Not Found</div>
            <div
                onClick={() => changePage("/", router)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="cursor-pointer"
            >
                <div
                    ref={hoverRef}
                    className="flex items-center gap-2 text-[#8f8f8f] text-xl transition-colors"
                >
                    <ArrowLeft size={24} />
                    Go back home
                </div>
            </div>
        </div>
    );
}
