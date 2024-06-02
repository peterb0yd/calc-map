import { AcresMW, CodeCharacterization, CSGDeployedSolar, DecisionFactor, DecommissioningBond, Definitions, NonCSGDeployedSolar, PanelHeights, Permit1041Output, SolarOnAgLand, VegetationManagement, VisualImpacts, Fencing, DeployedSolar } from "@/interfaces/map-fields.interfaces";

export interface ICounty {
    name: string;
    fileName: string;
    panelHeight?: PanelHeights | null;
    codeCharacterization?: CodeCharacterization | null;
    definitions?: Definitions | null;
    fencing?: Fencing | null;
    acresMW?: AcresMW | null;
    solarOnAgLand?: SolarOnAgLand | null;
    permit1041Output?: Permit1041Output | null;
    vegetationManagement?: VegetationManagement | null;
    visualImpacts?: VisualImpacts | null;
    decommissioningBond?: DecommissioningBond | null;
    nonCSGDeployedSolar?: NonCSGDeployedSolar | null;
    csgDeployedSolar?: CSGDeployedSolar | null;
    decisionFactor?: DecisionFactor | null;
    deployedSolar?: DeployedSolar | null;
}