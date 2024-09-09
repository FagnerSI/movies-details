import { TBaseMovie } from "~/types/movie";

export type MovieDetailsProps = {
    loadingMovie: boolean,
    details?: TBaseMovie,
    favoriteMovie?: (favorite?: boolean) => void;
}