import { PropsWithChildren } from "react";
import styles from "./scroll-area.module.css";
import clsx from "clsx";

interface ScrollAreaProps extends PropsWithChildren<{}> {
    maxHeight: string;
}

export const ScrollArea = ({ children, maxHeight }: ScrollAreaProps) => {
    return (
        <div className={styles.ScrollArea} style={{ maxHeight }}>
            <div className={styles.scrollContent}>
                {children}
            </div>
        </div>
    )
};