import { createQueryParams } from '~/utils/createQueryParams';
import { api } from '../Api';

const API_KEY = process.env.REACT_APP_API_KEY || '';
const queryMovie = createQueryParams({ language: 'pt-BR',  api_key: API_KEY, });
const ACCOUNT_ID  = process.env.REACT_APP_ACCOUNT_ID;
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;


export const getMovieDetails = (movieId: number) => {
  return api?.get(`/movie/${movieId}`, queryMovie)
}

export const postFavoriteMovie = (movieId: number, favorite: boolean) => {
  return api?.post(`/account/${ACCOUNT_ID}/favorite`, 
   {
    media_type: 'movie', movie_id: movieId, favorite
   }, 
   {
      Authorization: 'Bearer ' + AUTH_TOKEN,
   })
}


