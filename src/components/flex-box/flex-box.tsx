import styles from './flex-box.module.css';
import clsx from 'clsx';

interface FlexBoxProps {
    name: string;
    width?: 'full' | 'auto';
    grow?: boolean;
    col?: boolean;
}

export const FlexBox = ({ name, width, grow, col, children }: React.PropsWithChildren<FlexBoxProps>) => {
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
                })
            }
        >
            {children}
        </div>
    );
}