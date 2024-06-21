import { forwardRef } from 'react';
import styles from './flex-box.module.css';
import clsx from 'clsx';

interface FlexBoxProps {
    name?: string;
    width?: 'full' | 'auto';
    grow?: boolean;
    align?: 'center' | 'start' | 'end';
    justify?: 'center' | 'start' | 'end';
    gap?: 'sm' | 'md' | 'lg';
    py?: 'sm' | 'md' | 'lg' | 'xl';
    col?: boolean;
}

export const FlexBox = forwardRef(({ name, width, align, justify, gap, grow, col, py, children }: React.PropsWithChildren<FlexBoxProps>, ref: React.Ref<HTMLDivElement>) => {
    return (
        <div
            ref={ref}
            className={clsx(
                name,
                styles.FlexBox,
                {
                    [styles['width-full']]: width === 'full',
                    [styles['width-auto']]: width === 'auto',
                    [styles['grow']]: grow,
                    [styles['col']]: col,
                    [styles['align-center']]: align === 'center',
                    [styles['align-start']]: align === 'start',
                    [styles['align-end']]: align === 'end',
                    [styles['justify-center']]: justify === 'center',
                    [styles['justify-start']]: justify === 'start',
                    [styles['justify-end']]: justify === 'end',
                    [styles['gap-sm']]: gap === 'sm',
                    [styles['gap-md']]: gap === 'md',
                    [styles['gap-lg']]: gap === 'lg',
                    [styles['py-sm']]: py === 'sm',
                    [styles['py-md']]: py === 'md',
                    [styles['py-lg']]: py === 'lg',
                    [styles['py-xl']]: py === 'xl',
                })
            }
        >
            {children}
        </div>
    );
});