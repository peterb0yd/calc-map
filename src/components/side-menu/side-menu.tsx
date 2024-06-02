"use client";

import Image from 'next/image';
import styles from './side-menu.module.css';
import { Text } from '../text/text';
import { Select } from '../select/select';
import { mapOptions } from '@/utils/mapOptions';
import { useRouter } from 'next/navigation'

interface SideMenuProps {
    mapOption: string;
}

export const SideMenu = ({ mapOption }: SideMenuProps) => {
    const router = useRouter();

    const setMapOption = (value: string) => {
        router.push(`/?map=${value}`);
    }

    return (
        <div className={styles.SideMenu}>
            <div className={styles.logo}>
                <Image src="/images/calc-logo.webp" alt="logo" fill />
            </div>
            <Select
                value={mapOption}
                name='MapSelect'
                label={'Select Map'}
                options={mapOptions}
                onSelect={setMapOption}
            />
        </div>
    );
}