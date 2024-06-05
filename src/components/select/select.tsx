import clsx from "clsx";
import { FlexBox } from "../flex-box/flex-box";
import { Label } from "../label/label";
import styles from './select.module.css';

type Option = {
    value: string;
    label: string;
}

interface SelectProps {
    value: string;
    name: string;
    label: string;
    size?: 'sm' | 'md' | 'lg';
    options: Option[] | string[];
    autoComplete?: string;
    fullWidth?: boolean;
    grow?: boolean;
    onSelect: (value: string) => void;
}

export const Select = ({ value, name, size = 'md', fullWidth, grow, label, options, autoComplete, onSelect }: SelectProps) => {
    let optionItems: Option[] = [];
    if (typeof options[0] === 'string') {
        optionItems = (options as string[]).map((option) => ({ value: option, label: option }));
    } else {
        optionItems = options as Option[];
    }

    return (
        <FlexBox
            name='Select-Label'
            width={fullWidth ? 'full' : undefined}
            grow={grow}
            gap="sm"
            col
        >
            {label && (
                <Label text={label} name={name} />
            )}
            <select
                name={name}
                className={clsx(styles.Select, styles[size])}
                value={value}
                onChange={(e) => onSelect(e.target.value)}
                autoComplete={autoComplete}
            >
                {optionItems.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </FlexBox>
    );
}