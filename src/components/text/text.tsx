import clsx from 'clsx';
import styles from './text.module.css';

interface TextProps {
    size: 'sm' | 'md' | 'lg' | 'display-sm' | 'display-md' | 'display-lg';
    color: 'base' | 'muted' | 'primary';
    children: string;
}

const getTag = (size: TextProps['size']) => {
    switch (size) {
        case 'sm':
            return 'p';
        case 'md':
            return 'h3';
        case 'lg':
            return 'h2';
        case 'display-sm':
            return 'h1';
        case 'display-md':
            return 'h1';
        case 'display-lg':
            return 'h1';
    }
}

export const Text = ({ children, color, size }: TextProps) => {
    const TextTag = getTag(size);
    return (
        <TextTag className={clsx(
            styles.Text, {
            [styles.baseColor]: color === 'base',
            [styles.mutedColor]: color === 'muted',
            [styles.primaryColor]: color === 'primary',
        })}>
            {children}
        </TextTag>
    );
}