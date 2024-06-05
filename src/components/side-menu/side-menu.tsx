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

export const SideMenu = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const mapField = searchParams.get('field') as MapFields ?? MapFields.PANEL_HEIGHT;

    const setMapOption = (value: string) => {
        router.push(`/?field=${value}`);
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
            </FlexBox>
        </div>
    );
}