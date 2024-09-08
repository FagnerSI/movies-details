import SpinnerStyled, { ContainerSpinner } from "./Spinner.styles";

const Spinner = () => {
  return <SpinnerStyled />;
};

Spinner.Screen = () => (
  <ContainerSpinner>
    <SpinnerStyled />
  </ContainerSpinner>
);

export default Spinner;
