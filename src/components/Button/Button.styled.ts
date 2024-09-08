import styled from 'styled-components';
import { ButtonProps, ButtonStyledProps } from './types';
import { IStyled } from '~/types/styles';
import breakpoints from '~/styles/breakpoints';


const getButtonBackgroundColor = ({ theme, variant, mode = 'default' }: ButtonStyledProps) => {
    if(mode === 'default'){
      return variant === 'secondary' ? theme.secondaryColor : theme.primaryColor
    } else {
      return 'transparent';
    }
}

const getButtonBorder = ({ theme, variant, mode }: ButtonStyledProps) => {
    if(mode === 'outline'){
      return `solid 1px ${variant === 'secondary' ?  theme.secondaryColor : theme.primaryColor}`;
    } else {
      return 'none';
    }
}

const getButtonFontColor = ({ theme, variant, mode }: ButtonStyledProps) => {
  const modes: Record<string, string> = {
    outline: variant === 'primary' ?  theme.primaryColor : theme.secondaryColor,
    flat: variant === 'primary' ?  theme.primaryColor : theme.secondaryColor,
    default: variant === 'primary' ?  theme.secondaryColor : theme.primaryColor ,
  }
  
  const modeKey = mode || 'default';

  return modes[modeKey];
}

export const ButtonStyled = styled.button<Partial<ButtonProps> & IStyled>`
  background: ${getButtonBackgroundColor};
  color: ${getButtonFontColor};
  font-weight: ${({ theme }: ButtonStyledProps) => theme.fontBold};
  border: ${getButtonBorder};
  font-size: 1em;
  padding: 0.8em 1.5em;
  border-radius: ${({ theme }: ButtonStyledProps) => theme.defaultRadius};
  cursor: pointer;
  height: 48px;
  min-width: 120px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-weight: ${({ theme }: ButtonStyledProps) => theme.fontBold};
    font-size: 0.8em;
    padding: 0.6em 1.2em;
    box-sizing: border-box;
    height: 38px;
  }
 
  };
`;
