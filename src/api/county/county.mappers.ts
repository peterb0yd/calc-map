import { Record, FieldSet } from "airtable";
import { ICounty } from "./county.interfaces";
import { AcresMW, CodeCharacterization, CSGDeployedSolar, DecisionFactor, DecommissioningBond, Definitions, DeployedSolar, Fencing, NonCSGDeployedSolar, PanelHeights, Permit1041Output, SolarOnAgLand, VegetationManagement, VisualImpacts } from "@/enums/map-fields.enums";

export const tableRecordToCounty = (record: Record<FieldSet>): ICounty => {
    const fields = record.fields;
    let coordinates = { latitude: 0, longitude: 0 };
    try {
        coordinates = JSON.parse(fields.coordinates as string);
    } catch (error) {
        console.error('Error parsing coordinates', error);
    }
    return {
        name: fields.Name as string,
        fileName: fields.fileName as string,
        coordinates,
        panelHeight: fields.panelHeight as PanelHeights,
        codeCharacterization: fields.codeCharacterization as CodeCharacterization,
        definitions: fields.definitions as Definitions,
        fencing: fields.fencing as Fencing,
        acresMW: fields.acresMW as AcresMW,
        solarOnAgLand: fields.solarOnAgLand as SolarOnAgLand,
        permit1041Output: fields.permit1041Output as Permit1041Output,
        vegetationManagement: fields.vegetationManagement as VegetationManagement,
        visualImpacts: fields.visualImpacts as VisualImpacts,
        decommissioningBond: fields.decommissioningBond as DecommissioningBond,
        nonCSGDeployedSolar: fields.nonCSGDeployedSolar as NonCSGDeployedSolar,
        csgDeployedSolar: fields.csgDeployedSolar as CSGDeployedSolar,
        decisionFactor: fields.decisionFactor as DecisionFactor,
        deployedSolar: fields.deployedSolar as DeployedSolar,
    }
}