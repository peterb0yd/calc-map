import {
  Definitions,
  AcresOrElec,
  CodeCharacterization,
  DecommissioningBond,
  DecommissioningPlan,
  DeployedSolar,
  Fencing,
  PanelHeight,
  Permit1041,
  SolarOnAg,
  VegetationManagement,
  VisualImpacts,
  MapFields,
} from "@/enums/map-fields.enums";

export const mapFieldToEnum = (mapField: MapFields) => {
  switch (mapField) {
    case MapFields.DEFINITIONS:
      return Definitions;
    case MapFields.ACRES_OR_ELEC:
      return AcresOrElec;
    case MapFields.CODE_CHARACTERIZATION:
      return CodeCharacterization;
    case MapFields.DECOMMISSIONING_BOND:
      return DecommissioningBond;
    case MapFields.DECOMMISSIONING_PLAN:
      return DecommissioningPlan;
    case MapFields.DEPLOYED_SOLAR:
      return DeployedSolar;
    case MapFields.FENCING:
      return Fencing;
    case MapFields.PANEL_HEIGHT:
      return PanelHeight;
    case MapFields.PERMIT_1041:
      return Permit1041;
    case MapFields.SOLAR_ON_AG:
      return SolarOnAg;
    case MapFields.VEGETATION_MANAGEMENT:
      return VegetationManagement;
    case MapFields.VISUAL_IMPACTS:
      return VisualImpacts;
  }
};
