import { MapFields } from "@/enums/map-fields.enums";

export const mapOptions: {
    label: string;
    value: MapFields;
}[] = [
    {
        label: 'Panel Height',
        value: MapFields.PANEL_HEIGHT,
    }, 
    {
        label: 'Code Characterization',
        value: MapFields.CODE_CHARACTERIZATION,
    },
    {
        label: 'Definitions',
        value: MapFields.DEFINITIONS,
    },
    {
        label: 'Fencing',
        value: MapFields.FENCING,
    },
    {
        label: 'Acres MW',
        value: MapFields.ACRES_MW,
    },
    {
        label: 'Solar on Ag Land',
        value: MapFields.SOLAR_ON_AG_LAND,
    },
    {
        label: 'Permit 1041 Output',
        value: MapFields.PERMIT_1041_OUTPUT,
    },
    {
        label: 'Vegetation Management',
        value: MapFields.VEGETATION_MANAGEMENT,
    },
    {
        label: 'Visual Impacts',
        value: MapFields.VISUAL_IMPACTS,
    },
    {
        label: 'Decommissioning Bond',
        value: MapFields.DECOMMISSIONING_BOND,
    },
    {
        label: 'Non CSG Deployed Solar',
        value: MapFields.NON_CSG_DEPLOYED_SOLAR,
    },
    {
        label: 'CSG Deployed Solar',
        value: MapFields.CSG_DEPLOYED_SOLAR,
    },
    {
        label: 'Decision Factor',
        value: MapFields.DECISION_FACTOR,
    },
    {
        label: 'Deployed Solar',
        value: MapFields.DEPLOYED_SOLAR,
    }
]
