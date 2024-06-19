import { MapFields } from "@/enums/map-fields.enums";

export const mapOptions: {
    label: string;
    value: MapFields;
}[] = [
    {
        label: 'Definitions',
        value: MapFields.DEFINITIONS,
    },
    {
        label: 'Code Characterization',
        value: MapFields.CODE_CHARACTERIZATION,
    },
    {
        label: 'Acres or Elec',
        value: MapFields.ACRES_OR_ELEC,
    },
    {
        label: 'Panel Height',
        value: MapFields.PANEL_HEIGHT,
    },
    {
        label: 'Deployed Solar',
        value: MapFields.DEPLOYED_SOLAR,
    },
    {
        label: 'Solar on Ag',
        value: MapFields.SOLAR_ON_AG,
    },
    {
        label: '1041 Permit',
        value: MapFields.PERMIT_1041,
    },
    {
        label: 'Fencing',
        value: MapFields.FENCING,
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
        label: 'Decommissioning Plan',
        value: MapFields.DECOMMISSIONING_PLAN,
    },
    {
        label: 'Decommissioning Bond',
        value: MapFields.DECOMMISSIONING_BOND,
    },
]
