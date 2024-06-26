import styles from './logo.module.css';
import Image from 'next/image';

export const Logo = () => {
    return (
        <div className={styles.Logo}>
            <Image
                src="/images/calc-logo-horizontal.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
            />
        </div>
    );
}

export const LogoIcon = () => {
    return (
        <div className={styles.LogoIcon}>
            <Image
                src="/images/calc-logo-icon.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
            />
        </div>
    );
}