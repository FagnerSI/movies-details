import  theme  from '~/styles/theme';

export type TTheme =  Record<keyof typeof theme , string>;

export interface IStyled  {
    theme: TTheme;
};