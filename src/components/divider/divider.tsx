import { Text } from '../text/text';
import styles from './divider.module.css';
import clsx from "clsx";

interface DividerProps {
    margin?: 'sm' | 'md' | 'lg'
    color?: 'highlight' | 'muted' | 'primary';
    betweenText?: string;
}

export const Divider = ({ margin = 'sm', color = 'highlight', betweenText }: DividerProps) => {

    const getExtraStyles = () => {
        return {
            [styles.highlight]: color === 'highlight',
            [styles.muted]: color === 'muted',
            [styles.primary]: color === 'primary',
            [styles.smMargin]: margin === 'sm',
            [styles.lgMargin]: margin === 'lg',
            [styles.mdMargin]: margin === 'md',
        }
    }

    if (betweenText) {
        return (
            <div
                className={clsx(styles.Divider, getExtraStyles())}
                data-color='transparent'
            >
                <div className={styles.line} data-color={color} />
                <Text size="sm" color='muted'>{betweenText}</Text>
                <div className={styles.line} data-color={color} />
            </div>
        );
    }

    return (
        <div
            className={clsx(styles.Divider, styles.line, getExtraStyles())}
            data-margin={margin}
            data-color={color}
        />
    );
};