import {
  EmptyContainer,
  EmptyDescription,
  EmptyTitle,
} from "./EmptyResult.styled";
import { EmptyResultProps } from "./types";

export default function EmptyResult({ title, description }: EmptyResultProps) {
  return (
    <EmptyContainer>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptyDescription>{description}</EmptyDescription>
    </EmptyContainer>
  );
}
