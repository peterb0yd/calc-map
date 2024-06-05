import styles from './flex-box.module.css';
import clsx from 'clsx';

interface FlexBoxProps {
    name?: string;
    width?: 'full' | 'auto';
    grow?: boolean;
    gap?: 'sm' | 'md' | 'lg';
    py?: 'sm' | 'md' | 'lg' | 'xl';
    col?: boolean;
}

export const FlexBox = ({ name, width, gap, grow, col, py, children }: React.PropsWithChildren<FlexBoxProps>) => {
    return (
        <div
            className={clsx(
                name,
                styles.FlexBox,
                {
                    [styles['width-full']]: width === 'full',
                    [styles['width-auto']]: width === 'auto',
                    [styles['grow']]: grow,
                    [styles['col']]: col,
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
}