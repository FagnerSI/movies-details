import styled from "styled-components";
import breakpoints from "~/styles/breakpoints";
import { IStyled } from "~/types/styles";

export const Container = styled.div<IStyled>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  weight: 100vw;
  height: 82px;
  background-color: ${({ theme }) => theme.primaryColor};

   @media (max-width: ${breakpoints.mobile}) {
      justify-content: space-between;
      padding: 0 16px;
   }
 `;

export const Image = styled.img`
  height: 28px;
  
  @media (max-width: ${breakpoints.mobile}) {
     height: 16px;
  }
`;