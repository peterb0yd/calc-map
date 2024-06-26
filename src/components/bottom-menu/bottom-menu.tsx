import { PropsWithChildren } from "react";
import styles from "./bottom-menu.module.css";

export const BottomMenu = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.BottomMenu}>
            {children}
        </div>
    );
}