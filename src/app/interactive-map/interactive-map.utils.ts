import { ICounty } from '@/api/county/county.interfaces';
import { MapFields } from '@/enums/map-fields.enums';

export const markerStyles = {
	padding: '5px',
	backgroundColor: 'black',
	borderRadius: '5px',
	fontSize: '12px',
	color: 'white',
	opacity: '0.8',
	transform: 'scale(1)',
};

const markerHoverStyles = {
	opacity: '1',
	transform: 'scale(1.2)',
};

const markerSelectedStyles = {
	opacity: '1',
	transform: 'scale(1.5)',
};

export interface ICountyMarker {
	name: string;
	element: google.maps.marker.AdvancedMarkerElement;
}

export const setCountyMouseEnter = (map: google.maps.Map, countyMarkers: ICountyMarker[]) => {
	map.data.addListener('mouseover', (event: google.maps.Data.MouseEvent) => {
		map.data.revertStyle();
		map.data.overrideStyle(event.feature, { strokeWeight: 4 });

		for (const marker of countyMarkers) {
            const isSelected = marker.element.getAttribute('selected') === 'true';
            const isHovered = event.feature.getProperty('name') === marker.name;
            if (isHovered && !isSelected) {
				const content = marker.element.content as HTMLElement;
				content.style.opacity = markerHoverStyles.opacity;
				content.style.transform = markerHoverStyles.transform;
			}
		}
	});
};

export const setCountyMouseLeave = (map: google.maps.Map, countyMarkers: ICountyMarker[]) => {
	map.data.addListener('mouseout', (event: google.maps.Data.MouseEvent) => {
		map.data.revertStyle();

		for (const marker of countyMarkers) {
			const content = marker.element.content as HTMLElement;
			if (marker.element.getAttribute('selected') === 'true') {
				content.style.opacity = markerSelectedStyles.opacity;
				content.style.transform = markerSelectedStyles.transform;
			} else {
				content.style.opacity = markerStyles.opacity;
				content.style.transform = markerStyles.transform;
			}
		}
	});
};

export const setCountyClick = (
	map: google.maps.Map,
	countyMarkers: ICountyMarker[],
	cb: (val: string) => void
) => {
	map.data.addListener('click', (event: google.maps.Data.MouseEvent) => {
		const feature = event.feature;
		const name = feature.getProperty('name');

		for (const marker of countyMarkers) {
            const content = marker.element.content as HTMLElement;
			if (event.feature.getProperty('name') === marker.name) {
                marker.element.setAttribute('selected', 'true');
				content.style.opacity = markerSelectedStyles.opacity;
				content.style.transform = markerSelectedStyles.transform;
			} else {
                marker.element.setAttribute('selected', 'false');
                content.style.opacity = markerStyles.opacity;
				content.style.transform = markerStyles.transform;
            }
		}

		cb(name as string);
	});
};

export const setCountyFeatures = (
	features: google.maps.Data.Feature[],
	index: number,
	county: ICounty
) => {
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
};
