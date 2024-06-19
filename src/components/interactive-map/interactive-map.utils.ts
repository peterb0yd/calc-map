import { ICounty } from "@/api/county/county.interfaces";
import { MapFields } from "@/enums/map-fields.enums";

export interface ICountyMarker {
	name: string;
	element: google.maps.marker.AdvancedMarkerElement;
}

export const setCountyMouseEnter = (map: google.maps.Map, countyMarkers: ICountyMarker[]) => {
	map.data.addListener('mouseover', (event: google.maps.Data.MouseEvent) => {
		map.data.revertStyle();
		map.data.overrideStyle(event.feature, { strokeWeight: 4 });

		for (const marker of countyMarkers) {
			if (event.feature.getProperty('name') === marker.name) {
				const content = marker.element.content as HTMLElement;
				content.style.opacity = '1';
			}
		}
	});
};

export const setCountyMouseLeave = (map: google.maps.Map, countyMarkers: ICountyMarker[]) => {
	map.data.addListener('mouseout', (event: google.maps.Data.MouseEvent) => {
		map.data.revertStyle();

		for (const marker of countyMarkers) {
			const content = marker.element.content as HTMLElement;
			content.style.opacity = '0.4';
            content.style.transform = 'scale(1)';
		}
	});
};

export const setCountyClick= (map: google.maps.Map, countyMarkers:ICountyMarker[], cb: (val: string) => void) => {
	map.data.addListener('click', (event: google.maps.Data.MouseEvent) => {
		const feature = event.feature;
		const name = feature.getProperty('name');
        
        for (const marker of countyMarkers) {
			if (event.feature.getProperty('name') === marker.name) {
				const content = marker.element.content as HTMLElement;
				content.style.opacity = '1';
                content.style.transform = 'scale(1.2)';
			}
		}

        cb(name as string);
	});
};

export const setCountyFeatures = (features: google.maps.Data.Feature[], index: number, county: ICounty) => {
    features.map((feature) => {
        feature.setProperty('name', county.name);
        feature.setProperty('index', index);
		feature.setProperty(MapFields.DEFINITIONS, county.definitions);
		feature.setProperty(MapFields.CODE_CHARACTERIZATION, county.codeCharacterization);
		feature.setProperty(MapFields.ACRES_OR_ELEC, county.acresOrElec);
		feature.setProperty(MapFields.PANEL_HEIGHT, county.panelHeight);
		feature.setProperty(MapFields.DEPLOYED_SOLAR, county.deployedSolar);
		feature.setProperty(MapFields.SOLAR_ON_AG, county.solarOnAg);
		feature.setProperty(MapFields.PERMIT_1041, county.permit1041);
		feature.setProperty(MapFields.FENCING, county.fencing);
		feature.setProperty(MapFields.VEGETATION_MANAGEMENT, county.vegetationManagement);
		feature.setProperty(MapFields.VISUAL_IMPACTS, county.visualImpacts);
		feature.setProperty(MapFields.DECOMMISSIONING_PLAN, county.decommissioningPlan);
		feature.setProperty(MapFields.DECOMMISSIONING_BOND, county.decommissioningBond);
    });
}