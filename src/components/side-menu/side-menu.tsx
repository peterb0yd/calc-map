"use client";

import Image from "next/image";
import styles from "./side-menu.module.css";
import { Text } from "../text/text";
import { Select } from "../select/select";
import { mapOptions } from "@/utils/mapOptions";
import { useRouter, useSearchParams } from "next/navigation";
import { FlexBox } from "../flex-box/flex-box";
import { MapLegend } from "../map-legend/map-legend";
import { MapFields } from "@/enums/map-fields.enums";
import { ICounty } from "@/api/county/county.interfaces";
import { startCase } from "lodash-es";
import { Divider } from "../divider/divider";
import { ScrollArea } from "../scroll-area/scroll-area";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ChevronRight } from "../svg/chevron-right";
import { ChevronLeft } from "../svg/chevron-left";
import clsx from "clsx";
import { Logo, LogoIcon } from "../logo/logo";

interface SideMenuProps extends PropsWithChildren {
    expanded: boolean;
    setExpanded: (val: boolean) => void;
}

const SideMenuContext = createContext<SideMenuProps>(undefined!);

const useSideMenu = () => useContext(SideMenuContext);

export const SideMenu = ({ children, expanded, setExpanded }: SideMenuProps) => {

    const LogoComponent = expanded ? Logo : LogoIcon;

    return (
        <SideMenuContext.Provider value={{ expanded, setExpanded }}>
            <div className={clsx(styles.SideMenu, {
                [styles.collapsed]: !expanded,
            })}>
                <FlexBox width="full" justify="center">
                    <LogoComponent />
                </FlexBox>
                {children}
            </div >
        </SideMenuContext.Provider>
    );
}

const StaticContent = ({ children }: PropsWithChildren) => {
    const { expanded } = useSideMenu();

    if (!expanded) return null;

    return (
        <div className={styles.TopContent}>
            <FlexBox py="lg" col gap="lg">
                {children}
            </FlexBox>
        </div>
    );
}

const ScrollableContent = ({ children }: PropsWithChildren) => {
    const { expanded } = useSideMenu();

    if (!expanded) return null;

    return (
        <div className={styles.BottomContent}>
            {children}
        </div>
    );
}

const ExpandToggle = () => {
    const { expanded, setExpanded } = useSideMenu();

    const IconComponent = expanded ? ChevronLeft : ChevronRight;

    return (
        <div
            className={styles.ExpandToggle}
            aria-label="toggle-sidebar-size"
            onClick={() => setExpanded(!expanded)}
        >
            <IconComponent />
        </div>
    );
}

SideMenu.displayName = "SideMenu";
SideMenu.StaticContent = StaticContent;
SideMenu.ScrollableContent = ScrollableContent;
SideMenu.ExpandToggle = ExpandToggle;
