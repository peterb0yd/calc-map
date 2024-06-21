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
import { useRef } from "react";

interface SideMenuProps {
    counties: Array<ICounty>;
}

export const SideMenu = ({ counties }: SideMenuProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const mapField =
        (searchParams.get("field") as MapFields) ?? MapFields.PANEL_HEIGHT;
    const countyName = searchParams.get("county") as ICounty["name"];
    const county = counties.find((c) => c.name === countyName);
    const mapInfoRef = useRef<HTMLDivElement>(null);
    const mapInfoHeight = mapInfoRef.current?.clientHeight ?? 0;
    const countyInfoHeight = `calc(68vh - ${mapInfoHeight ?? 0}px)`;

    const setMapOption = (value: string) => {
        const newParams = new URLSearchParams();
        newParams.set("field", value ?? mapField);
        if (countyName) {
            newParams.set("county", countyName);
        } else {
            newParams.delete("county");
        }
        router.push(`/?${newParams.toString()}`);
    };

    return (
        <div className={styles.SideMenu}>

            <div className={styles.logo}>
                <Image
                    src="/images/calc-logo-horizontal.png"
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <FlexBox name="Menu" col gap="lg">
                <FlexBox py="lg" col gap="lg" ref={mapInfoRef}>
                    <Select
                        value={mapField}
                        name="MapSelect"
                        label={"Select Map"}
                        options={mapOptions}
                        onSelect={setMapOption}
                    />

                    <MapLegend mapField={mapField} />
                </FlexBox>

                {county && (
                    <>
                        <Divider />
                        <ScrollArea maxHeight={countyInfoHeight}>
                            <FlexBox col gap="md">
                                <h2>{startCase(county.name)} County</h2>
                                <div className={styles.countyData}>
                                    <p>
                                        <strong>Definitions:</strong> {county.definitions ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Code Characterization:</strong>{" "}
                                        {county.codeCharacterization ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Acres or Elec:</strong> {county.acresOrElec ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Panel Height:</strong> {county.panelHeight ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Deployed Solar:</strong>{" "}
                                        {county.deployedSolar ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Solar on Ag:</strong> {county.solarOnAg ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>1041 Permit:</strong> {county.permit1041 ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Fencing:</strong> {county.fencing ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Vegetation Management:</strong>{" "}
                                        {county.vegetationManagement ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Visual Impacts:</strong>{" "}
                                        {county.visualImpacts ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Decommissioning Plan:</strong>{" "}
                                        {county.decommissioningPlan ?? "n/a"}
                                    </p>
                                    <p>
                                        <strong>Decommissioning Bond:</strong>{" "}
                                        {county.decommissioningBond ?? "n/a"}
                                    </p>
                                </div>
                            </FlexBox>
                        </ScrollArea>
                    </>
                )}
            </FlexBox>
        </div>
    );
};
