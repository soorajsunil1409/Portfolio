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
        if (!isOpen) {
            gsap.to(navRef.current, {
                rotation: -45,
                ease: "elastic.in",
            });
        } else {
            gsap.to(navRef.current, {
                rotation: 0,
            });
        }

        setIsOpen((prev) => !prev);
    };

    return (
        <div
            className={`w-full lg:h-auto ${
                isOpen ? "h-[100%]" : "h-[85px]"
            } transition-all duration-300 flex absolute bg-white lg:static flex-col`}
        >
            <div className="w-full flex flex-col h-max">
                <div
                    ref={nameRef}
                    className="flex justify-between lg:h-auto h-[50px] p-5 lg:p-10"
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
                        ref={navRef}
                    >
                        <Plus className="size-full text-white" />
                    </div>
                </div>
                <div
                    className={`flex flex-col gap-5 ${
                        isOpen ? "border-b-[1px]" : "border-0"
                    } border-gray-200`}
                >
                    <div className="lg:block hidden px-5 ld:p-0 lg:px-10">
                        <TypewriterFade
                            text="I'm a developer based in Bangalore, building future-focused
                        apps that blend AI, Web3, and intuitive UX — where
                        performance meets possibility."
                        />
                    </div>
                    <div
                        className={`${
                            isOpen ? "flex" : "lg:flex hidden"
                        } flex gap-3 pt-13 lg:pt-3 pb-5 px-5 lg:px-10`}
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
