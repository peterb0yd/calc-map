import { Record, FieldSet } from "airtable";
import { ICounty } from "./county.interfaces";

export const tableRecordToCounty = (record: Record<FieldSet>): ICounty => {
    const fields = record.fields;
    return {
        name: fields.Name as string,
        fileName: fields.fileName as string,
        panelHeight: fields.panelHeight as string,
        codeCharacterization: fields.codeCharacterization as string,
        definitions: fields.definitions as string,
        fencing: fields.fencing as string,
        acresMW: fields.acresMW as string,
        solarOnAgLand: fields.solarOnAgLand as string,
        permit1041Output: fields.permit1041Output as string,
        vegetationManagement: fields.vegetationManagement as string,
        visualImpacts: fields.visualImpacts as string,
        decommissioningBond: fields.decommissioningBond as string,
        nonCSGDeployedSolar: fields.nonCSGDeployedSolar as string,
        csgDeployedSolar: fields.csgDeployedSolar as string,
        decisionFactor: fields.decisionFactor as string,
        deployedSolar: fields.deployedSolar as string,
    }
}