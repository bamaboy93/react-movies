import Container from "../Container";
import SwiperCarousel from "../Swiper/Swiper";
import { Nav, Title, SectionWrapper, Link } from "./Section.styled";

export default function Section({ movies, title }) {
  return (
    <SectionWrapper>
      <Container>
        <Nav>
          <Title>{title}</Title>
          <Link to="/popular">View All</Link>
        </Nav>

        <SwiperCarousel movies={movies} />
      </Container>
    </SectionWrapper>
  );
}
