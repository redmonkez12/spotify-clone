"use client";

import React, { FC, PropsWithChildren, useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";

import { Box } from "@/components/Box";
import { SidebarItem } from "@/components/SidebarItem";

type SidebarProps = {

};

export const Sidebar: FC<PropsWithChildren<SidebarProps>> = ({ children }) => {
    const pathname = usePathname();

    const routes = useMemo(() => {
        return [
            {
                icon: HiHome,
                label: "Home",
                active: pathname !== "/search",
                href: "/",
            },
            {
                icon: BiSearch,
                label: "Search",
                active: pathname === "/search",
                href: "/search",
            }
        ];
    }, [pathname]);

    return (
        <div className={"flex h-full"}>
            <div className={`
            hidden
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2
            `}>
                <Box className={`
                    flex
                    flex-col
                    gap-y-4
                    px-5
                    py-4
                `}>
                    {routes.map(route => (
                        <SidebarItem
                            key={route.label}
                            {...route}
                        />
                    ))}
                </Box>
                <Box className={"overflow-y-auto h-full"}>
                    Song Library
                </Box>
            </div>
        </div>
    );
};
