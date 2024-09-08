import styled from 'styled-components';
import { DetailMovieStyledProps } from './types';

const VOTE_PADDING = 20;

export const Container = styled.div<DetailMovieStyledProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 10px;

`;

export const HeaderContent = styled.div<DetailMovieStyledProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  gap: 16px
`;


export const HeaderText = styled.div<DetailMovieStyledProps>`
  display: flex;
  flex-direction: column;
`;


export const Title = styled.h1<DetailMovieStyledProps>`
  font-size: 32px;
  font-weight: ${({ theme })=> theme.fontExtraBold};
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 16px;
`;

export const Genres = styled.div<DetailMovieStyledProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Genre = styled.span<DetailMovieStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 18px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: ${({ theme })=> theme.secondaryColor};
  border-radius: ${({ theme })=> theme.defaultRadius}
`;

export const Vote = styled.div<DetailMovieStyledProps>`
  font-size: 28px;
  font-weight: ${({ theme })=> theme.fontExtraBold};
  color: ${({ theme })=> theme.primaryColor};
  background-color: ${({ theme })=> theme.secondaryColor};
  padding: ${VOTE_PADDING}px;
  border-radius: ${VOTE_PADDING * 2}px;
`;


export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const OverviewTitle = styled.h3`
  font-size: 24px;
  color: ${({ theme })=> theme.primaryFontColor};
  font-weight: ${({ theme })=> theme.fontSemibold};
  line-height: 1.5em;
  margin-bottom: 16px;
`;

export const Overview = styled.p`
  font-size: 18px;
  color: ${({ theme })=> theme.primaryFontColor};
  font-weight: ${({ theme })=> theme.fontLight};
  line-height: 1.5em;
`;

export const Footer = styled.div`
  display: flex;  
  font-size: 12px;
  text-align: right;
  padding: 16px 0;
  gap: 5em;
`;

export const FooterInfo = styled.span` 
  font-size: 12px;
  color: ${({ theme })=> theme.primaryFontColor};
`;

export const FooterInfoBold = styled.span`
  font-size: 12px;
  color: ${({ theme })=> theme.primaryFontColor};
  font-style: italic;
  font-weight: ${({ theme })=> theme.fontBold};
`;