"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor({
    containerRef,
}: {
    containerRef: React.RefObject<HTMLDivElement | null>;
}) {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const cursor = cursorRef.current;

        console.log(container, cursor);

        if (!container || !cursor) return;

        const moveCursor = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const offsetX = cursor.offsetWidth / 2;
            const offsetY = cursor.offsetHeight / 2;

            gsap.to(cursor, {
                left: x - offsetX,
                top: y - offsetY,
                duration: 0.2,
                ease: "power2.out",
            });
        };

        const showCursor = (e: MouseEvent | null = null) => {
            const rect = container.getBoundingClientRect();
            const x = e ? e.clientX - rect.left : 0;
            const y = e ? e.clientY - rect.top : 0;

            const offsetX = cursor.offsetWidth / 2;
            const offsetY = cursor.offsetHeight / 2;

            gsap.set(cursor, {
                opacity: 0,
                left: x - offsetX,
                top: y - offsetY,
            });
            gsap.to(cursor, { opacity: 1, scale: 1 });
        };

        const hideCursor = () => gsap.to(cursor, { opacity: 0, scale: 0.5 });

        container.addEventListener("mousemove", moveCursor);
        container.addEventListener("mouseenter", showCursor);
        container.addEventListener("mouseleave", hideCursor);

        const triggerMouseEnter = () => showCursor();

        triggerMouseEnter();

        return () => {
            container.removeEventListener("mousemove", moveCursor);
            container.removeEventListener("mouseenter", showCursor);
            container.removeEventListener("mouseleave", hideCursor);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="absolute pointer-events-none size-4 bg-white rounded-full opacity-0 z-50 mix-blend-difference top-0 left-0"
        />
    );
}
