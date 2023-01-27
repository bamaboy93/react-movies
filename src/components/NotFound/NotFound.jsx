import Container from "../Container/Container";
import { ErrorWrapper, Link } from "./NotFound.styled";

export default function NotFound() {
  return (
    <Container>
      <ErrorWrapper>
        <Link />
      </ErrorWrapper>
    </Container>
  );
}
