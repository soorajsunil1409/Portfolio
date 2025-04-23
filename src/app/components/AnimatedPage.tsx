// components/AnimatedPage.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AnimatedPage({
    children,
}: {
    children: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Exit (of old content)
            tl.to(containerRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
                onComplete: () => {
                    router.push(pathname);
                },
            });

            // Enter (new content)
            tl.fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [pathname, router]);

    return (
        <div ref={containerRef} className="w-full h-full">
            {children}
        </div>
    );
}
