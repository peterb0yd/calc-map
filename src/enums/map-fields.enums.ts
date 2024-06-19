export enum Definitions {
	SOLAR_SPECIFIC_DEFINITIONS = 'Solar Specific Definitions',
	NO_RELEVANT_DEFINITIONS = 'No Relevant Definitions',
	PUBLIC_UTILITY_DEFINITIONS = 'Public Utility Definitions',
	SOLAR_AND_AGRIVOLTAIC_DEFINITIONS = 'Solar and Agrivoltaic Definitions',
	REVISION_OR_MORAOTRIUM = 'Revision or moratorium',
}

export enum CodeCharacterization {
	DETAILED_SOLAR_REGULATIONS = 'Detailed solar regulations',
	NO_SOLAR_REGULATIONS = 'No Solar Regulations',
	SOME_SOLAR_REGULATIONS = 'Some Solar Regulations',
	CODE_IS_UNDER_DEVELOPMENT = 'Code is under development/revision/ moratorium',
}

export enum AcresOrElec {
	NO_INFORMATON_AVAILABLE = 'No Information Available',
	INSTALLED_SOLAR_CAPACITY_MW = 'Installed Solar Capacity (MW)',
	ELECTRICITY_END_USE = 'Electricity End-Use',
	LAND_AREA_ACRES_AND_INSTALLED_SOLAR_CAPACITY_MW = 'Land Area (acres) and Installed Solar Capacity (MW)',
	LAND_AREA_ACRES = 'Land Area (acres)',
	REVISION_OR_MORAOTRIUM = 'Revision or moratorium',
	INSTALLED_SOLAR_CAPACITY_MW_AND_ELECTRICITY_END_USE = 'Installed Solar Capacity (MW) and Electricity End-Use',
	LAND_AREA_ACRES_AND_INSTALLED_SOLAR_CAPACITY_MW_AND_ELECTRICITY_END_USE = 'Land Area (acres) and Installed Solar Capacity (MW) and Electricity End-Use',
	LAND_AREA_ACRES_AND_ELECTRICITY_END_USE = 'Land Area (acres) and Electricity End-Use',
}

export enum PanelHeight {
	MAXIMUM_OF_10_FT = 'Maximum of 10ft',
	MAXIMUM_OF_15_25_FT = 'Maximum of 15-25ft',
	MAXIMUM_OF_25_35_FT = 'Maximum of 25-35ft',
	REVISION_OR_MORAOTRIUM = 'Revision or moratorium',
	DETERMINED_ON_A_CASE_BY_CASE_BASIS = 'Determined on a case-by-case basis',
	NO_RESTRICTION_SPECIFIC_TO_SOLAR = 'No restriction specific to solar',
}

export enum DeployedSolar {
	ZERO_MW = '0 MW',
	LESS_THAN_50_MW = '< 50 MW',
	FIFTY_TO_HUNDRED_MW = '50 MW - 100 MW',
	HUNDRED_TO_HUNDRED_FIFTY_MW = '100 MW - 150 MW',
	GREATER_THAN_150_MW = '> 150 MW',

}

export enum SolarOnAg {
	ALLOWED_WITH_APPROPRIATE_PERMIT = 'Allowed with appropriate permit',
	POLICIES_PROTECTING_AGRICULTURAL_LAND = 'Policies protecting agricultural land',
	MORATORIUM = 'Moratorium',
	INFORMATION_NOT_AVAILABLE = 'Information Not Available',
	NOT_ALLOWED_ON_AG_LAND = 'Not allowed on ag land',
}

export enum Permit1041 {
	MAJOR_FACILITIES_OF_PUBLIC_UTILITIES = 'Major Facilities of Public Utilities',
	ACRES_MW_AND_IRRIGATED_LAND_CLAUSE = 'Acres, MW, and irrigated land clause',
	MW = 'MW',
	NO_RELEVANT_1041_REQUIREMENTS = 'No Relevant 1041 Requirements',
	IRRIGATED_LAND = 'Irrigated Land',
	CODE_UNDER_MORATORIUM = 'Code Under Moratorium',
	MW_AND_ACRES = 'MW and acres',
	MW_AND_IRRIGATED_LAND_CLAUSE = 'MW and irrigated land clause',
	ACREAGE = 'Acreage',
}

export enum Fencing {
	INFORMATION_NOT_AVAILABLE = 'Information not Available/No policy specific to solar',
	FENCING_POLICY_THAT_MAY_APPLY_TO_SOLAR = 'Fencing Policy that may apply to Solar',
	FENCE_REQUIRED = 'Fence Required',
	REVISION_OR_MORAOTRIUM = 'Revision or moratorium',
}

export enum VegetationManagement {
	INFORMATION_NOT_AVAILABLE = 'Information not Available/No policy specific to Vegetation Management',
	SOLAR_SPECIFIC_VEGETATION_MANAGEMENT_REQUIRED = 'Solar Specific Vegetation Management Required',
	VEGETATION_MANAGEMENT_POLICY_THAT_MAY_APPLY_TO_SOLAR = 'Vegetation Management Policy that may apply to Solar',
	MORATORIUM = 'Moratorium',
}

export enum VisualImpacts {
	INFORMATION_NOT_AVAILABLE = 'Information not available/No policy specific to solar',
	SOLAR_SPECIFIC_VISUAL_IMPACT_POLICIES = 'Solar Specific Visual Impact Policies',
	VISUAL_IMPACT_POLICIES_THAT_MAY_APPLY_TO_SOLAR = 'Visual Impact Policies that may apply to solar',
	REVISION_OR_MORAOTRIUM = 'Revision or moratorium',
}

export enum DecommissioningPlan {
	SOLAR_SPECIFIC_DECOMMISSIONING_REQUIRED = 'Solar Specific Decommissioning Required',
	INFORMATION_NOT_AVAILABLE = 'Information not Available/No policy specific to solar',
	DECOMMISSIONING_REGULATIONS_THAT_MAY_APPLY_TO_SOLAR = 'Decommisisioning Regulations that may apply to Solar',
	MORATORIUM = 'Moratorium',
}

export enum DecommissioningBond {
	NO_BOND_REQUIREMENT = 'No bond requiement/Information not available',
	DETERMINED_DURING_APPLICATION_PROCESS = 'Determined during application process',	
	BOND_REQUIRED = 'Bond required',
	REVISION_OR_MORAOTRIUM = 'Revision or moratorium',
}

// export enum NonCSGDeployedSolar {
// 	ZERO_MW = '0 MW',
// 	LESS_THAN_50_MW = '< 50 MW',
// 	FIFTY_TO_HUNDRED_MW = '50 MW - 100 MW',
// 	HUNDRED_TO_HUNDRED_FIFTY_MW = '100 MW - 150 MW',
// 	GREATER_THAN_150_MW = '> 150 MW',
// }

// export enum CSGDeployedSolar {
// 	ZERO_MW = '0 MW',
// 	LESS_THAN_5_MW = '< 5 MW',
// 	FIVE_TO_TEN_MW = '5 MW - 10 MW',
// 	GREATER_THAN_10_MW = '> 10 MW',
// }

// export enum DecisionFactor {
// 	LAND_AREA_ACRES = 'Land Area (acres)',
// 	INSTALLED_SOLAR_CAPACITY_MW = 'Installed Solar Capacity (MW)',
// 	ELECTRICITY_END_USE = 'Electricity End-Use',
// 	NO_CATEGORIZATION = 'No Categorization',
// }

export enum MapFields {
	DEFINITIONS = 'Definitions',
	CODE_CHARACTERIZATION = 'Code Characterization',
	ACRES_OR_ELEC = 'Acres or Elec',
	PANEL_HEIGHT = 'Panel Height',
	DEPLOYED_SOLAR = 'Deployed Solar',
	SOLAR_ON_AG = 'Solar on Ag',
	PERMIT_1041 = '1041 Permit',
	FENCING = 'Fencing',
	VEGETATION_MANAGEMENT = 'Vegetation Management',
	VISUAL_IMPACTS = 'Visual Impacts',
	DECOMMISSIONING_PLAN = 'Decommissioning Plan',
	DECOMMISSIONING_BOND = 'Decommissioning Bond',
}

