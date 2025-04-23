"use client";

import { Instagram, Plus } from "lucide-react";
import { LiaLinkedinIn } from "react-icons/lia";
import TypewriterFade from "./TextEffects/TypeWriterFade";
import ButtonHoverFadeEffect from "./TextEffects/ButtonHoverFadeEffect";
import { useSidebarNameAnimation } from "./animations";
import NavElements from "./NavElements";
import { useRef, useState } from "react";
import gsap from "gsap";

const Sidebar = () => {
    const nameRef = useSidebarNameAnimation();
    const navRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenSidebar = () => {
        // if (!isOpen) {
        //     gsap.to(navRef.current, {
        //         height: "100%",
        //         ease: "power4.out",
        //     });
        // } else {
        //     gsap.to(navRef.current, {
        //         height: "85px",
        //         ease: "power4.out",
        //     });
        // }
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            className={`w-full lg:h-auto ${
                isOpen ? "h-[100%]" : "h-[85px]"
            } transition-all duration-300 flex absolute bg-white lg:static flex-col`}
            ref={navRef}
        >
            <div className="w-full flex flex-col gap-8 h-max p-5 lg:p-10">
                <div
                    ref={nameRef}
                    className="flex justify-between lg:h-auto h-[50px]"
                >
                    <div className="flex gap-3">
                        <div className="size-[50px] rounded-full bg-black" />
                        <div>
                            <div>Sooraj S</div>
                            <div>Available for work</div>
                        </div>
                    </div>
                    <div
                        className="size-[50px] lg:hidden rounded-full bg-black p-2 cursor-pointer"
                        onClick={handleOpenSidebar}
                    >
                        <Plus className="size-full text-white" />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="lg:block hidden">
                        <TypewriterFade
                            text="I'm a developer based in Bangalore, building future-focused
                        apps that blend AI, Web3, and intuitive UX — where
                        performance meets possibility."
                        />
                    </div>
                    <div
                        className={`${
                            isOpen ? "flex" : "lg:flex hidden"
                        } flex gap-3`}
                    >
                        <ButtonHoverFadeEffect
                            className="hover:bg-black w-max h-max transition-all duration-300 hover:text-white border-[1px] bg-white text-black font-semibold px-9 py-2 cursor-pointer text-lg rounded-3xl"
                            text="Contact"
                        />
                        <button className="border-[1px] cursor-pointer size-[45px] p-2 rounded-full bg-transparent flex items-center justify-center">
                            <Instagram />
                        </button>
                        <button className="border-[1px] cursor-pointer size-[45px] p-2 rounded-full bg-transparent flex items-center justify-center">
                            <LiaLinkedinIn className="size-full" />
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`h-[calc(100vh-200px)] overflow-auto ${
                    isOpen ? "block" : "lg:flex hidden"
                }`}
            >
                <NavElements />
            </div>
        </div>
    );
};

//shadow-[0px_0px_0px_5px_#fc8181]
export default Sidebar;
