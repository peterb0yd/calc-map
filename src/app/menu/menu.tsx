"use client";

import { mapOptions } from "@/utils/mapOptions";
import { useRouter, useSearchParams } from "next/navigation";
import { MapFields } from "@/enums/map-fields.enums";
import { ICounty } from "@/api/county/county.interfaces";
import { SideMenu } from "@/components/side-menu/side-menu";
import { CountyInfo } from "@/components/county-info/county-info";
import { Select } from "@/components/select/select";
import { MapLegend } from "@/components/map-legend/map-legend";

interface SideMenuProps {
    counties: Array<ICounty>;
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
}

export const Menu = ({ counties, expanded, setExpanded }: SideMenuProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const mapField =
        (searchParams.get("field") as MapFields) ?? MapFields.PANEL_HEIGHT;
    const countyName = searchParams.get("county") as ICounty["name"];
    const county = counties.find((c) => c.name === countyName);

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
        <SideMenu expanded={expanded} setExpanded={setExpanded}>
            <SideMenu.ExpandToggle />
            <SideMenu.StaticContent>
                <Select
                    value={mapField}
                    name="MapSelect"
                    label={"Select Map"}
                    options={mapOptions}
                    onSelect={setMapOption}
                />

                <MapLegend mapField={mapField} />
            </SideMenu.StaticContent>

            <SideMenu.ScrollableContent>
                <CountyInfo county={county}>
                    <CountyInfo.StickyHeader />
                    <CountyInfo.Fields />
                </CountyInfo>
            </SideMenu.ScrollableContent>
        </SideMenu>
    );
}