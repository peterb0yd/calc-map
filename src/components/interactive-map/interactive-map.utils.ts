import { ICounty } from "@/api/county/county.interfaces";

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
        feature.setProperty('panelHeight', county.panelHeight);
        feature.setProperty('codeCharacterization', county.codeCharacterization);
        feature.setProperty('definitions', county.definitions);
        feature.setProperty('fencing', county.fencing);
        feature.setProperty('acresMW', county.acresMW);
        feature.setProperty('solarOnAgLand', county.solarOnAgLand);
        feature.setProperty('permit1041Output', county.permit1041Output);
        feature.setProperty('vegetationManagement', county.vegetationManagement);
        feature.setProperty('visualImpacts', county.visualImpacts);
        feature.setProperty('decommissioningBond', county.decommissioningBond);
        feature.setProperty('nonCSGDeployedSolar', county.nonCSGDeployedSolar);
        feature.setProperty('csgDeployedSolar', county.csgDeployedSolar);
        feature.setProperty('decisionFactor', county.decisionFactor);
        feature.setProperty('deployedSolar', county.deployedSolar);
    });
}