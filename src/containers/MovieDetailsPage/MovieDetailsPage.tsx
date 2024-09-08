import { useState, useEffect } from "react";
import { getMovieDetails } from "~/services/Movies";
import MovieDetails from "~/pages/MovieDetails";

export default function SearchPage() {
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [details, setDetails] = useState(undefined);

  const getMovie = async () => {
    setLoadingMovie(true);

    try {
      const result = await getMovieDetails("");
      setDetails(result);
    } catch (error) {
      // Tratar ERROR
    } finally {
      setLoadingMovie(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <MovieDetails loadingMovie={loadingMovie} details={details} />;
}
