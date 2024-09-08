import styled from "styled-components";
import { IStyled } from "~/types/styles";

export const Container = styled.div<IStyled>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  weight: 100vw;
  height: 82px;
  background-color: ${({ theme }) => theme.primaryColor};
 `;

export const Image = styled.img`
  height: 28px;
`;