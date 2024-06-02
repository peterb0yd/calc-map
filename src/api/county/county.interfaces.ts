import { FieldSet, Record } from "airtable";

export interface ICounty {
    name: string;
    fileName: string;
    panelHeight?: string;
    codeCharacterization?: string;
    definitions?: string;
    fencing?: string;
    acresMW?: string;
    solarOnAgLand?: string;
    permit1041Output?: string;
    vegetationManagement?: string;
    visualImpacts?: string;
    decommissioningBond?: string;
    nonCSGDeployedSolar?: string;
    csgDeployedSolar?: string;
    decisionFactor?: string;
    deployedSolar?: string;
}