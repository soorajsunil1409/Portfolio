"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const useIconAnimation = (isHovering: boolean) => {
    const iconRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        gsap.to(iconRef.current?.children || [], {
            keyframes: [{ scale: 1.1 }, { scale: 1 }],
            duration: 0.3,
        });
    }, [isHovering]);

    return iconRef;
};

export const useSidebarNameAnimation = () => {
    const nameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(nameRef.current, {
            y: -70,
            opacity: 0.1,
            duration: 1,
            ease: "power2.out",
        });
    }, []);

    return nameRef;
};

export const useSidebarDescriptionAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(containerRef.current, {
            y: -20,
            opacity: 0.1,
            duration: 1.5,
            ease: "power2.out",
        });
    }, []);

    return containerRef;
};

export const animatePagein = () => {
    const ban1 = document.getElementById("ban-1");
    const ban2 = document.getElementById("ban-2");
    const ban3 = document.getElementById("ban-3");

    if (ban1 && ban2 && ban3) {
        const tl = gsap.timeline();

        tl.set([ban1, ban2, ban3], {
            yPercent: 0
        }).to([ban1, ban2, ban3], {
            yPercent: 100,
            stagger: 0.2,
            ease: "none"
        })
    }
}

export const animatePageOut = (
    href: string,
    router: AppRouterInstance,
    onComplete: () => void
) => {
    const ban1 = document.getElementById("ban-1");
    const ban2 = document.getElementById("ban-2");
    const ban3 = document.getElementById("ban-3");

    if (ban1 && ban2 && ban3) {
        const tl = gsap.timeline();

        tl.set([ban1, ban2, ban3], {
            yPercent: -100,
        }).to([ban1, ban2, ban3], {
            yPercent: 0,
            stagger: 0.2,
            onComplete: () => {
                router.push(href);
                onComplete();
            },
        });
    } else {
        router.push(href);
        onComplete();
    }
};
