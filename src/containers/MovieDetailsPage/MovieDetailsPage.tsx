import { useState, useEffect } from "react";
import { getMovieDetails, postFavoriteMovie } from "~/services/Movies";
import MovieDetails from "~/pages/MovieDetails";
import { TBaseMovie } from "~/types/movie";

export default function SearchPage({ movieId }: { movieId?: number }) {
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [detailsMovie, setDetailsDetails] = useState<TBaseMovie | undefined>(
    undefined
  );

  const favoriteMovie = async (favorite = true) => {
    if (detailsMovie?.id) {
      try {
        setLoadingMovie(true);

        await postFavoriteMovie(detailsMovie?.id, favorite);
      } catch (error) {
        // Tratar ERROR
      } finally {
        setLoadingMovie(false);
      }
    }
  };

  const getMovie = async () => {
    if (!movieId) return;

    try {
      setLoadingMovie(true);

      const result = await getMovieDetails(movieId);
      setDetailsDetails(result);
    } catch (error) {
      // Tratar ERROR
    } finally {
      setLoadingMovie(false);
    }
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MovieDetails
      loadingMovie={loadingMovie}
      details={detailsMovie}
      favoriteMovie={favoriteMovie}
    />
  );
}
