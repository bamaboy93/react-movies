import Container from "../Container";
import { Title, TitleWrapper } from "./PageTitle.styled";

export default function PageTitle({ title }) {
  return (
    <TitleWrapper>
      <Container>
        <Title>{title}</Title>
      </Container>
    </TitleWrapper>
  );
}
