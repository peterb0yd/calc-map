"use client";

import styles from "./side-menu.module.css";
import { FlexBox } from "../flex-box/flex-box";
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

    const logoJustify = expanded ? "start" : "center";

    return (
        <SideMenuContext.Provider value={{ expanded, setExpanded }}>
            <div className={clsx(styles.SideMenu, {
                [styles.collapsed]: !expanded,
            })}>
                <FlexBox width="full" justify={logoJustify}>
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
        <div className={styles.StaticContent}>
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
        <div className={styles.ScrollableContent}>
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
            data-expanded={expanded}
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
