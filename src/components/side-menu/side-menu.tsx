"use client";

import Image from 'next/image';
import styles from './side-menu.module.css';
import { Text } from '../text/text';
import { Select } from '../select/select';
import { mapOptions } from '@/utils/mapOptions';
import { useRouter, useSearchParams } from 'next/navigation'
import { FlexBox } from '../flex-box/flex-box';
import { MapLegend } from '../map-legend/map-legend';
import { MapFields } from '@/enums/map-fields.enums';
import { ICounty } from '@/api/county/county.interfaces';
import { startCase } from 'lodash-es';

interface SideMenuProps {
    counties: Array<ICounty>;
}

export const SideMenu = ({ counties }: SideMenuProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const mapField = searchParams.get('field') as MapFields ?? MapFields.PANEL_HEIGHT;
    const countyName = searchParams.get('county') as ICounty['name'];
    const county = counties.find((c) => c.name === countyName);

    const setMapOption = (value: string) => {
        const newParams = new URLSearchParams();
        newParams.set('field', value ?? mapField);
        if (countyName) {
            newParams.set('county', countyName);
        } else {
            newParams.delete('county');
        }
        router.push(`/?${newParams.toString()}`);
    }

    return (
        <div className={styles.SideMenu}>
            <div className={styles.logo}>
                <Image src="/images/calc-logo.webp" alt="logo" fill />
            </div>
            <FlexBox name="Menu" py="lg" col gap="lg">
                <Select
                    value={mapField}
                    name='MapSelect'
                    label={'Select Map'}
                    options={mapOptions}
                    onSelect={setMapOption}
                />
                <MapLegend
                    mapField={mapField}
                />
                {county && (
                    <FlexBox col gap="md">
                        <h2>{startCase(county.name)} County</h2>
                        <div className={styles.countyData}>
                            <p><strong>Panel Height:</strong> {county.panelHeight ?? 'n/a'}</p>
                            <p><strong>Code Characterization:</strong> {county.codeCharacterization ?? 'n/a'}</p>
                            <p><strong>Definitions:</strong> {county.definitions ?? 'n/a'}</p>
                            <p><strong>Fencing:</strong> {county.fencing ?? 'n/a'}</p>
                            <p><strong>Acres MW:</strong> {county.acresMW ?? 'n/a'}</p>
                            <p><strong>Solar On Ag Land:</strong> {county.solarOnAgLand ?? 'n/a'}</p>
                            <p><strong>Permit 1041 Output:</strong> {county.permit1041Output ?? 'n/a'}</p>
                            <p><strong>Vegetation Management:</strong> {county.vegetationManagement ?? 'n/a'}</p>
                            <p><strong>Visual Impacts:</strong> {county.visualImpacts ?? 'n/a'}</p>
                            <p><strong>Decommissioning Bond:</strong> {county.decommissioningBond ?? 'n/a'}</p>
                            <p><strong>Non CSG Deployed Solar:</strong> {county.nonCSGDeployedSolar ?? 'n/a'}</p>
                            <p><strong>CSG Deployed Solar:</strong> {county.csgDeployedSolar ?? 'n/a'}</p>
                            <p><strong>Decision Factor:</strong> {county.decisionFactor ?? 'n/a'}</p>
                            <p><strong>Deployed Solar:</strong> {county.deployedSolar ?? 'n/a'}</p>
                        </div>
                    </FlexBox>
                )}
            </FlexBox>
        </div>
    );
}