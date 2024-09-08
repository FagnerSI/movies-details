import { createQueryParams } from '~/utils/createQueryParams';
import { api } from '../Api';

 const queryMovie = createQueryParams({ language: 'pt-BR' });

export const getMovieDetails = (movieId: string) => {
  return api?.get(`/movie/${movieId}`, queryMovie)
}



