import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import MovieDetails from "~/containers/MovieDetailsPage";
import { TBaseMovie } from "./types/movie";

function App(props: { movie?: TBaseMovie }) {
  return (
    <ThemeProvider theme={theme}>
      <MovieDetails movieId={props.movie?.id} />;
    </ThemeProvider>
  );
}

export default App;
