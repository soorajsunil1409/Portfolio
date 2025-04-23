"use client";

import Sidebar from "../Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex lg:flex-row flex-col w-full h-[100vh]">
            <div className="flex w-full lg:w-1/3 h-full overflow-auto  z-100">
                <Sidebar />
            </div>
            <div className="flex justify-center w-full lg:w-2/3 h-[calc(100vh-70px)] lg:h-[100vh] z-0">
                <div className="flex justify-center size-full lg:rounded-l-4xl overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
