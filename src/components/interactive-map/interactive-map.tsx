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
        lat: 39.4000,
        lng: -105.0500
    },
    region: 'CO',
    zoom: 7
};

const setFeatures = (features: google.maps.Data.Feature[], index: number, countyName: string) => {
    features.map((feature) => {
        feature.setProperty('name', countyName);
        feature.setProperty('index', index);
    });
}

export default function InteractiveMap() {
    const mapRef = useRef<google.maps.Map>();
    const containerRef = useRef<HTMLDivElement>(null);
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
                const isColorful = feature.getProperty('isColorful');
                return {
                    fillColor: isColorful ? 'green' : 'blue',
                    strokeWeight: 2
                }
            });

            mapRef.current?.data.addListener("click", (event: google.maps.Data.MouseEvent) => {
                const isColorful = event.feature.getProperty("isColorful");
                event.feature.setProperty("isColorful", !isColorful);
            });

            mapRef.current?.data.addListener("mouseover", (event: google.maps.Data.MouseEvent) => {
                mapRef.current?.data.revertStyle();
                mapRef.current?.data.overrideStyle(event.feature, { strokeWeight: 4 });
            });

            mapRef.current?.data.addListener("mouseout", (event: google.maps.Data.MouseEvent) => {
                mapRef.current?.data.revertStyle();
            });

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
    }, [containerRef.current])

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