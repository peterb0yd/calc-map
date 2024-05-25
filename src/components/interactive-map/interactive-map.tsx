'use client';

import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import styles from './interactive-map.module.css';
import { GEOJSON_FILE_NAMES } from './interactive-map.utils'

const loader = new Loader({
    apiKey: "AIzaSyAxRMopOY_mVRQHK1TA8BxzMZEnWZHvnlc",
    version: "weekly",
    libraries: ["maps"]
});

const mapOptions = {
    center: {
        lat: 39.5501,
        lng: -105.7821
    },
    region: 'CO',
    zoom: 9
};

const setFeatures = (features: google.maps.Data.Feature[], index: number, countyName: string) => {
    features.map((feature) => {
        feature.setProperty('name', countyName);
        feature.setProperty('index', index);
    });
}

export default function InteractiveMap() {
    const mapRef = useRef<google.maps.Map>();
    const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // load map
        loader.importLibrary('maps').then(() => {
            mapRef.current = new google.maps.Map(document.getElementById("map") as HTMLDivElement, mapOptions);

            GEOJSON_FILE_NAMES.map((fileName, i) => {
                const countyName = fileName.match(/(\w+)-county/)?.[1];
                mapRef.current?.data.loadGeoJson(
                    fileName,
                    undefined,
                    features => setFeatures(
                        features,
                        i,
                        countyName as string
                    )
                );
            });

            mapRef.current?.data.setStyle((feature) => {
                const index = Number(feature.getProperty('index'));
                return {
                    fillColor: (index % 2 === 0) ? 'red' : 'blue',
                    strokeWeight: 1
                }
            });

        });

        // resize map
        const handleResize = () => {
            setMapSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div
            id="map"
            className={styles.Map}
            style={{
                width: `${mapSize.width}px`,
                height: `${mapSize.height}px`
            }}
        />
    )
}