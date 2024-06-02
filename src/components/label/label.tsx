import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './label.module.css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, PropsWithChildren {
    text: string;
    name?: string;
    uppercase?: boolean;
    noEvents?: boolean;
}

export const Label = ({ text, uppercase = true, name, noEvents, ...props }: LabelProps) => {
    return (
        <label
            className={clsx(styles.Label, name, {
                [styles.uppercase]: uppercase,
                [styles.noEvents]: noEvents,
            })
            }
            htmlFor={name}
            {...props}
        >
            {text}
        </label>
    );
}