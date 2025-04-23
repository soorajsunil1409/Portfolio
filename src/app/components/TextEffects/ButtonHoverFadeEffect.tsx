import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ButtonHoverFadeEffect = ({
    text,
    className,
}: {
    text: string;
    className: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    useEffect(() => {
        const spans = containerRef.current?.querySelectorAll("span") || [];

        if (isHovering === true) {
            gsap.fromTo(
                spans,
                { opacity: 0, x: -20, y: -20 },
                {
                    opacity: 1,
                    stagger: 0.04,
                    x: 0,
                    y: 0,
                }
            );
        } else {
            gsap.fromTo(
                spans,
                { opacity: 0, x: -20, y: 20 },
                {
                    opacity: 1,
                    stagger: 0.04,
                    x: 0,
                    y: 0,
                }
            );
        }
    }, [isHovering]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={className}
        >
            {text.split("").map((char, i) => (
                <span key={i} style={{ display: "inline-block" }}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </div>
    );
};

export default ButtonHoverFadeEffect;
