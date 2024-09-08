import { IStyled } from "~/types/styles";

export type ButtonProps = {
    title: string, 
    disabled?: boolean,
    mode?: 'flat' | 'outline' | 'link' | 'default'
    variant?: 'primary' | 'secondary',
    onClick: (event: MouseEvent) => void;
} & React.HTMLAttributes<HTMLButtonElement>;

export interface ButtonStyledProps extends IStyled {
    variant?: ButtonProps['variant'],
    mode?: ButtonProps['mode'],
} 