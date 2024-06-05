import {
	AcresMW,
	CodeCharacterization,
	CSGDeployedSolar,
	DecisionFactor,
	DecommissioningBond,
	Definitions,
	DeployedSolar,
	Fencing,
	MapFields,
	NonCSGDeployedSolar,
	PanelHeights,
	Permit1041Output,
	SolarOnAgLand,
	VegetationManagement,
	VisualImpacts,
} from '@/enums/map-fields.enums';

export const mapFieldToEnum = (mapField: MapFields) => {
	switch (mapField) {
		case MapFields.PANEL_HEIGHT:
			return PanelHeights;
		case MapFields.CODE_CHARACTERIZATION:
			return CodeCharacterization;
		case MapFields.DEFINITIONS:
			return Definitions;
		case MapFields.FENCING:
			return Fencing;
		case MapFields.ACRES_MW:
			return AcresMW;
		case MapFields.SOLAR_ON_AG_LAND:
			return SolarOnAgLand;
		case MapFields.PERMIT_1041_OUTPUT:
			return Permit1041Output;
		case MapFields.VEGETATION_MANAGEMENT:
			return VegetationManagement;
		case MapFields.VISUAL_IMPACTS:
			return VisualImpacts;
		case MapFields.DECOMMISSIONING_BOND:
			return DecommissioningBond;
		case MapFields.NON_CSG_DEPLOYED_SOLAR:
			return NonCSGDeployedSolar;
		case MapFields.CSG_DEPLOYED_SOLAR:
			return CSGDeployedSolar;
		case MapFields.DECISION_FACTOR:
			return DecisionFactor;
		case MapFields.DEPLOYED_SOLAR:
			return DeployedSolar;
	}
};
