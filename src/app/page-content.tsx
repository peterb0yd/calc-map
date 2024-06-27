"use client"

import { ICounty } from "@/api/county/county.interfaces";
import { InteractiveMap } from "@/app/interactive-map/interactive-map";
import { useState } from "react";
import { Menu } from "./menu/menu";

interface PageContentProps {
    counties: ICounty[];
}

export const PageContent = ({ counties }: PageContentProps) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    return (
        <>
            <Menu
                counties={counties}
                expanded={isSidebarExpanded}
                setExpanded={setIsSidebarExpanded}
            />
            <InteractiveMap
                counties={counties}
                sidebarExpanded={isSidebarExpanded}
                setSidebarExpanded={setIsSidebarExpanded}
            />
        </>
    );
}