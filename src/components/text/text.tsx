import styles from './text.module.css';

interface TextProps {
    size: 'sm' | 'md' | 'lg' | 'display-sm' | 'display-md' | 'display-lg';
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

export const Text = ({ children, size }: TextProps) => {
    const TextTag = getTag(size);
    return (
        <TextTag className={styles.Text}>
            {children}
        </TextTag>
    );
}