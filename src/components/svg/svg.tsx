import clsx from "clsx"
import { PropsWithChildren } from "react"
import styles from "./svg.module.css"

export interface SVGProps extends PropsWithChildren {
    color?: 'base' | 'muted' | 'primary';
    size?: 'sm' | 'md' | 'lg';
}

export const SVG = ({ children, color = "base", size = "sm" }: SVGProps) => {
    return (
        <svg
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={clsx({
                [styles.colorBase]: color === 'base',
                [styles.colorMuted]: color === 'muted',
                [styles.colorPrimary]: color === 'primary',
                [styles.sizeSm]: size === 'sm',
                [styles.sizeMd]: size === 'md',
                [styles.sizeLg]: size === 'lg',
            })}
        >
            {children}
        </svg>
    )
}