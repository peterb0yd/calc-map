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
import { PropsWithChildren, useEffect, useRef, useState } from "react";

export const SideMenu = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.SideMenu}>
            {children}
        </div >
    );
}

const TopContent = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.TopContent}>
            {children}
        </div>
    );
}

const BottomContent = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.BottomContent}>
            {children}
        </div>
    );
}

SideMenu.displayName = "SideMenu";
SideMenu.TopContent = TopContent;
SideMenu.BottomContent = BottomContent;
