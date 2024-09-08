import React from "react";
import {
  Container,
  HeaderContent,
  HeaderText,
  Title,
  Overview,
  Footer,
  Genre,
  Genres,
  OverviewContainer,
  OverviewTitle,
  FooterInfo,
  FooterInfoBold,
  Vote,
} from "./DetailsMove.styled";
import { DetailMovieProps } from "./types";
import { formatterDate } from "~/utils/formatterDate";

const DetailsMovie = ({
  title,
  overview,
  genres = [],
  release_date,
  runtime,
  vote_average,
}: DetailMovieProps) => {
  return (
    <Container>
      <HeaderContent>
        <HeaderText>
          <Title>{title}</Title>
          <Genres>
            {genres?.map((genre) => (
              <Genre>{genre.name || ""}</Genre>
            ))}
          </Genres>
        </HeaderText>
        <Vote>{(vote_average || 0).toFixed(1)} / 10</Vote>
      </HeaderContent>
      <OverviewContainer>
        <OverviewTitle>Sinopse</OverviewTitle>
        <Overview>{overview}</Overview>
      </OverviewContainer>
      <Footer>
        <FooterInfo>
          <FooterInfoBold>Lançamento: </FooterInfoBold>
          {formatterDate(release_date)}
        </FooterInfo>
        <FooterInfo>
          <FooterInfoBold>Duraçao: </FooterInfoBold>
          {runtime}
        </FooterInfo>
      </Footer>
    </Container>
  );
};

export default DetailsMovie;
