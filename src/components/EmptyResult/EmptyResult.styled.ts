import styled from 'styled-components';
import { IStyled } from '~/types/styles';

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 580px;
`;

export const EmptyTitle = styled.span<IStyled>`
   font-size: 24px;
   font-weight: ${({ theme })=> theme.fontBold};
   color: ${({ theme })=> theme.lightFontColor};
   margin-bottom: 16px;
`;

export const EmptyDescription = styled.p<IStyled>`
  font-size: 18px;
  font-weight: ${({ theme })=> theme.fontRegular};
  color: ${({ theme })=> theme.lightFontColor};
  line-height: 1.5em;
  text-align: center;
`;
