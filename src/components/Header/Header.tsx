import { logo } from "~/assets/images";
import { Container, Image } from "./Header.styled";
import styles from "./styles.module.scss";
import Button from "../Button";

const Header = ({ onBack }: { onBack: () => void }) => {
  return (
    <Container>
      <Button
        className={styles.button}
        title="Voltar"
        mode="flat"
        variant="secondary"
        onClick={onBack}
      />
      <Image src={logo} alt="Logo" />
    </Container>
  );
};

export default Header;
