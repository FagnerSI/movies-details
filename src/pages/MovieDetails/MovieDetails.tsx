import { useState } from "react";
import Button from "~/components/Button";
import Spinner from "~/components/Spinner";
import styles from "./styles.module.scss";
import { MovieDetailsProps } from "./types";
import Header from "~/components/Header";
import DetailsMovie from "~/components/DetailsMove";
import { mountLinkImage } from "~/utils/mountLinkImage";
import EmptyResult from "~/components/EmptyResult";

const IMAGE_LINK_DEFAULT = "https://via.placeholder.com/300x200";

export default function Search({
  loadingMovie,
  details: movie,
}: MovieDetailsProps) {
  const [listFavorites, setListFavorites] = useState<number[]>([]);

  const isFavorite = () => listFavorites.find((item) => item === movie?.id);

  const handleFavorite = () => {
    if (isFavorite()) {
      setListFavorites((prevList) => {
        return prevList.filter((id) => id !== movie?.id);
      });
      return;
    }

    if (movie) {
      setListFavorites((prevList) => {
        return [...prevList, movie.id];
      });
    }
  };

  const handleBack = () => {
    window.dispatchEvent(new CustomEvent("movieSelected", { detail: null }));
  };

  if (loadingMovie) {
    return <Spinner.Screen />;
  }
  const imagePath = movie?.backdrop_path || movie?.poster_path;
  const imageLink = imagePath ? mountLinkImage(imagePath) : IMAGE_LINK_DEFAULT;

  return (
    <div className={styles.container}>
      <Header onBack={handleBack} />

      {loadingMovie ? (
        <Spinner.Screen />
      ) : !movie ? (
        <div className={styles.content}>
          <EmptyResult
            title="Detalhes de filme"
            description="Aqui você pode ver mais sobre um filme que buscou.
            Para isso, vá apagina de busca e encontre um filme que deseje saber mais"
          />
        </div>
      ) : (
        <>
          <div className={styles.imageContainer}>
            <img src={imageLink} className={styles.image} alt={movie?.title} />
            <Button
              className={styles.buttonFavorite}
              title={isFavorite() ? "★" : "Favoritar"}
              variant={isFavorite() ? "secondary" : "primary"}
              onClick={handleFavorite}
            />
          </div>
          <div className={styles.content}>
            <DetailsMovie {...movie} />
          </div>
        </>
      )}
    </div>
  );
}
