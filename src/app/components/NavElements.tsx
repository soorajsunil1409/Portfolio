import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { animatePageOut, useSidebarDescriptionAnimation } from "./animations";
import { tabs } from "../utils/consts";
import { useRouter } from "next/navigation";

const NavElements = () => {
    const [activeTab, setActiveTab] = useState<number>(tabs.length);
    const pathname = usePathname();

    const navContainerRef = useSidebarDescriptionAnimation();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        if (tabs[tabs.length - activeTab].href !== pathname) {
            setActiveTab(
                tabs.length - tabs.findIndex((tab) => tab.href === pathname)
            );
        }
    }, []);

    const handleClick = (tab: number, href: string) => {
        if (isLoading) return;

        setIsLoading(true);
        setActiveTab(tab);

        if (href !== pathname) {
            animatePageOut(href, router, () => {
                setIsLoading(false); // only after routing
            });
        } else {
            setIsLoading(false);
        }
    };

    return (
        <div ref={navContainerRef} className="w-full flex flex-col gap-2 p-10">
            {tabs.map((tab, i) => (
                <button
                    disabled={isLoading}
                    onClick={() => handleClick(tabs.length - i, tab.href)}
                    key={tabs.length - i}
                    className={`p-2 px-6 flex border-gray-200 rounded-lg ${
                        isLoading ? "cursor-auto" : "cursor-pointer"
                    } transition-all duration-800 ${
                        activeTab !== tabs.length - i
                            ? `bg-white border-[1px] ${
                                  !isLoading && "hover:bg-gray-200"
                              }`
                            : "bg-amber-300 z-50 border-b-6 border-b-[#e1a604] shadow-[inset_-13px_13px_30px_0px_#d69e2e,-14px_14px_35px_4px_#d69e2e]"
                    }`}
                >
                    <div className="text-[80px] h-max w-[50px] text-center">
                        {tabs.length - i}
                    </div>
                    <div className="flex gap-2 p-5 py-7 text-gray-500">
                        <div className="font-bold text-black">{tab.name}</div>
                        <div>•</div>
                        <div>{tab.subtitle}</div>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default NavElements;
