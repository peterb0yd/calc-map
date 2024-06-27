'use client';
import { startCase } from 'lodash-es';
import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import styles from './interactive-map.module.css';
import { ICounty } from '@/api/county/county.interfaces';
import { useRouter, useSearchParams } from 'next/navigation'
import { mapColors } from "@/utils/mapColors";
import { mapFieldToEnum } from "@/mappers/field.mapper";
import { MapFields } from '@/enums/map-fields.enums';
import { setCountyMouseEnter, setCountyMouseLeave, setCountyClick, setCountyFeatures, markerStyles, } from './interactive-map.utils';
import clsx from 'clsx';

const loader = new Loader({
    apiKey: "AIzaSyAxRMopOY_mVRQHK1TA8BxzMZEnWZHvnlc",
    version: "weekly",
    libraries: ["maps"]
});

const mapOptions: google.maps.MapOptions = {
    center: {
        lat: 39.4000,
        lng: -105.0500
    },
    zoom: 7,
    minZoom: 7,
    mapId: 'dee98a8120ceef95',
};

interface InteractiveMapProps {
    counties: Array<ICounty>;
    sidebarExpanded: boolean;
    setSidebarExpanded: (expanded: boolean) => void;
}

export const InteractiveMap = ({ counties, sidebarExpanded, setSidebarExpanded }: InteractiveMapProps) => {
    const mapRef = useRef<google.maps.Map>();
    const containerRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();
    const router = useRouter();
    const mapField = searchParams.get('field') as MapFields ?? MapFields.PANEL_HEIGHT;
    const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

    useEffect(() => {
        // load map
        loader.importLibrary('maps').then(async () => {
            mapRef.current = new google.maps.Map(document.getElementById("map") as HTMLDivElement, mapOptions);

            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

            const countyMarkers = counties.map((county, i) => {
                mapRef.current?.data.loadGeoJson(
                    county.fileName,
                    undefined,
                    features => setCountyFeatures(
                        features,
                        i,
                        county,
                    )
                );

                const lat = county.coordinates.latitude;
                const lng = county.coordinates.longitude;
                const position = new google.maps.LatLng(lat, lng);

                const content = document.createElement('div');
                content.textContent = startCase(county.name);
                content.style.padding = markerStyles.padding;
                content.style.backgroundColor = markerStyles.backgroundColor;
                content.style.borderRadius = markerStyles.borderRadius;
                content.style.fontSize = markerStyles.fontSize;
                content.style.color = markerStyles.color;
                content.style.opacity = markerStyles.opacity;

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

            setCountyMouseEnter(mapRef.current, countyMarkers);
            setCountyMouseLeave(mapRef.current, countyMarkers);
            setCountyClick(mapRef.current, countyMarkers, handleCountyClick);
            updateMapColors();
        });
    }, [containerRef.current]);


    useEffect(() => {
        const newParams = new URLSearchParams();
        if (selectedCounty) {
            newParams.set('county', selectedCounty);
        } else {
            newParams.delete('county');
        }
        newParams.set('field', mapField);
        router.push(`/?${newParams.toString()}`);
    }, [selectedCounty]);

    useEffect(() => {
        updateMapColors();
    }, [mapField])

    const handleCountyClick = (countyName: string) => {
        setSelectedCounty(countyName);
        setSidebarExpanded(true);
    }

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
        <div className={clsx(styles.InteractiveMap, {
            [styles.expanded]: !sidebarExpanded,
        })} ref={containerRef}>
            <div
                id="map"
                className={styles.Map}
            />
        </div>
    )
}