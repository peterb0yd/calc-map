import {
	CodeCharacterization,
	DecommissioningBond,
	Definitions,
	VegetationManagement,
	VisualImpacts,
	Fencing,
	DeployedSolar,
	DecommissioningPlan,
	AcresOrElec,
	PanelHeight,
	SolarOnAg,
	Permit1041,
} from '@/enums/map-fields.enums';

export interface ICounty {
	name: string;
	fileName: string;
	coordinates: { latitude: number; longitude: number };
	definitions: Definitions;
	codeCharacterization: CodeCharacterization;
	acresOrElec: AcresOrElec;
	panelHeight: PanelHeight;
	deployedSolar: DeployedSolar;
	solarOnAg: SolarOnAg;
	permit1041: Permit1041;
	fencing: Fencing;
	vegetationManagement: VegetationManagement;
	visualImpacts: VisualImpacts;
	decommissioningPlan: DecommissioningPlan;
	decommissioningBond: DecommissioningBond;
}
