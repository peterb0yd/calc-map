import { MapFields } from "@/enums/map-fields.enums";
import { FlexBox } from "../flex-box/flex-box";
import { mapFieldToEnum } from "@/mappers/field.mapper";
import styles from './map-legend.module.css';
import { mapColors } from "@/utils/mapColors";

interface MapLegendProps {
    mapField: MapFields;
}

export const MapLegend = ({ mapField }: MapLegendProps) => {
    const fieldEnum = mapFieldToEnum(mapField);
    const keyNames = Object.values(fieldEnum);

    return (
        <FlexBox col gap="md">
            {keyNames.map((name, index) => (
                <FlexBox gap="sm" align="center" key={name}>
                    <div
                        className={styles.keyColor}
                        style={{ backgroundColor: mapColors[index] }}
                    />
                    <p className={styles.keyName}>{name}</p>
                </FlexBox>
            ))}
        </FlexBox>
    );
}