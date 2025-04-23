import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TypewriterFade = ({ text }: { text: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const spans = containerRef.current?.querySelectorAll("span") || [];
        gsap.fromTo(
            spans,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.4,
                stagger: 0.01,
                ease: "power2.out",
            }
        );
    }, [text]);

    return (
        <div ref={containerRef} className="text-lg font-medium leading-relaxed">
            {text.split("").map((char, i) => (
                <span key={i} style={{ display: "inline-block" }}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </div>
    );
};

export default TypewriterFade;
