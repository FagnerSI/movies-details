import { ButtonStyled } from "~/components/Button/Button.styled";
import { ButtonProps } from "./types";

export default function Button({
  variant = "primary",
  title,
  className,
  disabled,
  mode = "default",
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled
      mode={mode}
      disabled={disabled}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {title}
    </ButtonStyled>
  );
}
