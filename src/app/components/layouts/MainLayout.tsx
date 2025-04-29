"use client";

import {
    cloneElement,
    isValidElement,
    useEffect,
    useRef,
    useState,
} from "react";
import CustomCursor from "../cursors/MainCursor";
import Sidebar from "../Sidebar";
import { useRouter } from "next/navigation";
import { animatePageOut } from "../animations";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="flex lg:flex-row flex-col w-full h-[100vh]">
            <div className="flex w-full lg:w-1/3 h-full overflow-auto  z-100">
                <Sidebar />
            </div>
            <div
                ref={containerRef}
                className="flex justify-center w-full lg:w-2/3 h-[calc(100vh-70px)] lg:h-[100vh] z-0"
            >
                <div className="flex cursor-none relative justify-center size-full lg:rounded-l-4xl overflow-hidden">
                    {isMounted && containerRef.current && (
                        <CustomCursor containerRef={containerRef} />
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
