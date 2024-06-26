import { PropsWithChildren } from "react";
import styles from "./scroll-area.module.css";
import clsx from "clsx";

interface ScrollAreaProps extends PropsWithChildren<{}> {
    maxHeight: string;
    p?: 'sm' | 'md' | 'lg';
    pb?: 'sm' | 'md' | 'lg';
}

export const ScrollArea = ({ children, maxHeight, p, pb }: ScrollAreaProps) => {
    console.log({ maxHeight });
    return (
        <div
            className={styles.ScrollArea}
            style={{ maxHeight }}
        >
            <div className={clsx(styles.scrollContent, {
                [styles.padSm]: p === 'sm',
                [styles.padMd]: p === 'md',
                [styles.padLg]: p === 'lg',
                [styles.padBSm]: pb === 'sm',
                [styles.padBMd]: pb === 'md',
                [styles.padBLg]: pb === 'lg',
            })}>
                {children}
            </div>
        </div>
    )
};