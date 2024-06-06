'use client';
import { startCase } from 'lodash-es';
import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import styles from './interactive-map.module.css';
import { ICounty } from '@/api/county/county.interfaces';
import { useSearchParams } from 'next/navigation'
import { mapColors } from "@/utils/mapColors";
import { mapFieldToEnum } from "@/mappers/field.mapper";
import { MapFields } from '@/enums/map-fields.enums';

const loader = new Loader({
    apiKey: "AIzaSyAxRMopOY_mVRQHK1TA8BxzMZEnWZHvnlc",
    version: "weekly",
    libraries: ["maps"]
});

const mapOptions = {
    center: {
        lat: 39.4000,
        lng: -105.0500
    },
    region: 'CO',
    zoom: 7,
    mapId: 'dee98a8120ceef95',
};

const setFeatures = (features: google.maps.Data.Feature[], index: number, county: ICounty) => {
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

interface InteractiveMapProps {
    counties: Array<ICounty>;
}

export const InteractiveMap = ({ counties }: InteractiveMapProps) => {
    const mapRef = useRef<google.maps.Map>();
    const containerRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();
    const mapField = searchParams.get('field') as MapFields ?? MapFields.PANEL_HEIGHT;
    const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // load map
        loader.importLibrary('maps').then(async () => {
            mapRef.current = new google.maps.Map(document.getElementById("map") as HTMLDivElement, mapOptions);

            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

            const countyMarkers = counties.map((county, i) => {
                mapRef.current?.data.loadGeoJson(
                    county.fileName,
                    undefined,
                    features => setFeatures(
                        features,
                        i,
                        county,
                    )
                );

                const lat = county.coordinates.latitude;
                const lng = county.coordinates.longitude;
                const position = new google.maps.LatLng(lat, lng);

                const content = document.createElement('div');
                content.className = 'price-tag';
                content.textContent = startCase(county.name);
                content.style.padding = '5px';
                content.style.backgroundColor='black';
                content.style.borderRadius = '5px';
                content.style.fontSize = '12px';
                content.style.color = 'white';
                content.style.opacity = '0.4';

                const countyMarker = new AdvancedMarkerElement({
                    map: mapRef.current,
                    collisionBehavior: google.maps.CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY,
                    position,
                    content,
                });

                return {
                    name: county.name,
                    element: countyMarker,
                }
            });

            mapRef.current?.data.addListener("mouseover", (event: google.maps.Data.MouseEvent) => {
                mapRef.current?.data.revertStyle();
                mapRef.current?.data.overrideStyle(event.feature, { strokeWeight: 4 });

                for (const marker of countyMarkers) {
                    if (event.feature.getProperty('name') === marker.name) {
                        const content = marker.element.content as HTMLElement;
                        content.style.opacity = '1';
                    }
                }
            });

            mapRef.current?.data.addListener("mouseout", (event: google.maps.Data.MouseEvent) => {
                mapRef.current?.data.revertStyle();

                for (const marker of countyMarkers) {
                    const content = marker.element.content as HTMLElement;
                    content.style.opacity = '0.4';
                }
            });

            updateMapColors();
        });

        // resize map
        const handleResize = () => {
            const width = containerRef.current?.offsetWidth as number;
            const height = containerRef.current?.offsetHeight as number;
            setMapSize({ width, height });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [containerRef.current]);

    useEffect(() => {
        updateMapColors();
    }, [mapField])

    const updateMapColors = () => {
        const values = Object.values(mapFieldToEnum(mapField));
        mapRef.current?.data.setStyle((feature) => {
            const propValue = feature.getProperty(mapField);
            const colorIndex = values.indexOf(propValue);

            return {
                fillColor: mapColors[colorIndex],
                strokeWeight: 2
            }
        });
    }

    return (
        <div className={styles.InteractiveMap} ref={containerRef}>
            <div
                id="map"
                className={styles.Map}
                style={{
                    width: `${mapSize.width}px`,
                    height: `${mapSize.height}px`
                }}
            />
        </div>
    )
}