"use client";

import { mapOptions } from "@/utils/mapOptions";
import { useRouter, useSearchParams } from "next/navigation";
import { MapFields } from "@/enums/map-fields.enums";
import { ICounty } from "@/api/county/county.interfaces";
import { Logo } from "@/components/logo/logo";
import { SideMenu } from "@/components/side-menu/side-menu";
import { CountyInfo } from "@/components/county-info/county-info";
import { Select } from "@/components/select/select";
import { FlexBox } from "@/components/flex-box/flex-box";
import { MapLegend } from "@/components/map-legend/map-legend";

interface SideMenuProps {
    counties: Array<ICounty>;
}

export const Menu = ({ counties }: SideMenuProps) => {
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
        <SideMenu>

            <SideMenu.TopContent>
                <Logo />

                <FlexBox py="lg" col gap="lg">
                    <Select
                        value={mapField}
                        name="MapSelect"
                        label={"Select Map"}
                        options={mapOptions}
                        onSelect={setMapOption}
                    />

                    <MapLegend mapField={mapField} />
                </FlexBox>
            </SideMenu.TopContent>

            <SideMenu.BottomContent>
                <CountyInfo county={county}>
                    <CountyInfo.StickyHeader />
                    <CountyInfo.Fields />
                </CountyInfo>
            </SideMenu.BottomContent>

        </SideMenu>
    );
}