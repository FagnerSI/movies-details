import { useState, useEffect } from "react";
import { getMovieDetails } from "~/services/Movies";
import MovieDetails from "~/pages/MovieDetails";

export default function SearchPage({ movieId }: { movieId?: number }) {
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [detailsMovie, setDetailsDetails] = useState(undefined);

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

  return <MovieDetails loadingMovie={loadingMovie} details={detailsMovie} />;
}
