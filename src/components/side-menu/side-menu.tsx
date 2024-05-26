import Image from 'next/image';
import styles from './side-menu.module.css';

export const SideMenu = () => {
    return (
        <div className={styles.SideMenu}>
            <div className={styles.logo}>
                <Image src="/images/calc-logo.webp" alt="logo" fill />
            </div>
        </div>
    );
}