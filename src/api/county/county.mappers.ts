import { Record, FieldSet } from "airtable";
import { ICounty } from "./county.interfaces";
import {
  AcresOrElec,
  CodeCharacterization,
  DecommissioningBond,
  DecommissioningPlan,
  Definitions,
  DeployedSolar,
  Fencing,
  MapFields,
  PanelHeight,
  Permit1041,
  SolarOnAg,
  VegetationManagement,
  VisualImpacts,
} from "@/enums/map-fields.enums";

export const tableRecordToCounty = (record: Record<FieldSet>): ICounty => {
  const fields = record.fields;
  let coordinates = { latitude: 0, longitude: 0 };
  try {
    coordinates = JSON.parse(fields.coordinates as string);
  } catch (error) {
    console.error("Error parsing coordinates", error);
  }
  if (!fields || Object.keys(fields).length === 0) {
    console.error("No fields found in record", record);
    return {} as ICounty;
  } 
  return {
    name: fields.Name as string,
    fileName: fields.fileName as string,
    coordinates,
    definitions: fields[MapFields.DEFINITIONS] as Definitions,
    codeCharacterization: fields[MapFields.CODE_CHARACTERIZATION] as CodeCharacterization,
    acresOrElec: fields[MapFields.ACRES_OR_ELEC] as AcresOrElec,
    panelHeight: fields[MapFields.PANEL_HEIGHT] as PanelHeight,
    deployedSolar: fields[MapFields.DEPLOYED_SOLAR] as DeployedSolar,
    solarOnAg: fields[MapFields.SOLAR_ON_AG] as SolarOnAg,
    permit1041: fields[MapFields.PERMIT_1041] as Permit1041,
    fencing: fields[MapFields.FENCING] as Fencing,
    vegetationManagement: fields[MapFields.VEGETATION_MANAGEMENT] as VegetationManagement,
    visualImpacts: fields[MapFields.VISUAL_IMPACTS] as VisualImpacts,
    decommissioningPlan: fields[MapFields.DECOMMISSIONING_PLAN] as DecommissioningPlan,
    decommissioningBond: fields[MapFields.DECOMMISSIONING_BOND] as DecommissioningBond,
  };
};
