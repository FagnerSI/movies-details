import Button from "~/components/Button";
import Spinner from "~/components/Spinner";
import styles from "./styles.module.scss";
import { MovieDetailsProps } from "./types";
import Header from "~/components/Header";
import DetailsMovie from "~/components/DetailsMove";
import { mountLinkImage } from "~/utils/mountLinkImage";
import EmptyResult from "~/components/EmptyResult";

const IMAGE_LINK_DEFAULT = "https://via.placeholder.com/300x200";

export default function Search({ loadingMovie, details }: MovieDetailsProps) {
  if (loadingMovie) {
    return <Spinner.Screen />;
  }
  const imagePath = details?.backdrop_path || details?.poster_path;
  const imageLink = imagePath ? mountLinkImage(imagePath) : IMAGE_LINK_DEFAULT;

  return (
    <div className={styles.container}>
      <Header />

      {loadingMovie ? (
        <Spinner.Screen />
      ) : !details ? (
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
            <img
              src={imageLink}
              className={styles.image}
              alt={details?.title}
            />
          </div>
          <div className={styles.content}>
            <DetailsMovie {...details} />
            <Button
              className={styles.buttonFavorite}
              title={"Ir Para Favoritos"}
              variant="secondary"
              onClick={() => {
                alert("Teste");
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
