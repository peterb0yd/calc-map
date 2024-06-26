import { ICounty } from "@/api/county/county.interfaces"
import { startCase } from "lodash-es";
import { Divider } from "../divider/divider";
import { FlexBox } from "../flex-box/flex-box";
import styles from "./county-info.module.css";
import { PropsWithChildren, createContext, useContext } from "react";

const CountyContext = createContext<{ county: ICounty | undefined }>({ county: undefined });

const useCounty = () => useContext(CountyContext)!.county;

interface CountyProps extends PropsWithChildren {
    county: ICounty | undefined;
}

export const CountyInfo = ({ children, county }: CountyProps) => {
    return (
        <CountyContext.Provider value={{ county }}>
            <FlexBox col gap="md" width="full">
                {children}
            </FlexBox >
        </CountyContext.Provider>
    );
}

const CountyFields = () => {
    const county = useCounty();

    if (!county) return null;

    return (
        <FlexBox col gap="sm" width="full">
            <FieldRow label="Definitions" value={county.definitions} />
            <FieldRow label="Code Characterization" value={county.codeCharacterization} />
            <FieldRow label="Acres or Elec" value={county.acresOrElec} />
            <FieldRow label="Panel Height" value={county.panelHeight} />
            <FieldRow label="Deployed Solar" value={county.deployedSolar} />
            <FieldRow label="Solar on Ag" value={county.solarOnAg} />
            <FieldRow label="1041 Permit" value={county.permit1041} />
            <FieldRow label="Fencing" value={county.fencing} />
            <FieldRow label="Vegetation Management" value={county.vegetationManagement} />
            <FieldRow label="Visual Impacts" value={county.visualImpacts} />
            <FieldRow label="Decommissioning Plan" value={county.decommissioningPlan} />
            <FieldRow label="Decommissioning Bond" value={county.decommissioningBond} />
        </FlexBox>
    )
};

const FieldRow = ({ label, value }: { label: string, value: string }) => {
    return (
        <p className={styles.FieldRow}>
            <strong>{label}:</strong> {value}
        </p>
    );
}

const StickyHeader = () => {
    const county = useCounty();

    if (!county) return null;

    return (
        <div className={styles.countyHeader}>
            <Divider />
            <h2>{startCase(county.name)} County</h2>
        </div>
    );
}

CountyFields.displayName = "CountyFields";
StickyHeader.displayName = "StickyHeader";
CountyInfo.displayName = "CountyInfo";
CountyInfo.Fields = CountyFields;
CountyInfo.StickyHeader = StickyHeader;