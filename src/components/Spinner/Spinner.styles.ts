import styled, { keyframes } from "styled-components";
import { IStyled } from "~/types/styles";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div<IStyled>`
  border: 6px solid rgba(0, 0, 0, 0.2);
  border-top: 6px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${spin} 1s linear infinite;
`;

export const ContainerSpinner = styled.div<IStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  weight: 100vw;
  height: 50vh;
  margin: auto;
`;


export default SpinnerStyled;