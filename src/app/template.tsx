"use client";

import { useEffect } from "react";
import { animatePagein } from "./components/animations";

const template = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        animatePagein();
    }, []);

    return (
        <div className="relative h-full w-full">
            <div
                id="ban-1"
                className="h-full bg-amber-300 w-1/3 absolute left-0 z-100"
            ></div>
            <div
                id="ban-2"
                className="h-full bg-amber-300 w-1/3 absolute left-1/3 z-100"
            ></div>
            <div
                id="ban-3"
                className="h-full bg-amber-300 w-1/3 absolute left-2/3 z-100"
            ></div>
            {children}
        </div>
    );
};
export default template;
