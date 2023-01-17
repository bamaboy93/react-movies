import { NavLink } from "react-router-dom";
import Container from "../Container";
import SwiperCarousel from "../Swiper/Swiper";
import { Nav, Title, SectionWrapper } from "./Section.styled";

export default function Section({ movies, title }) {
  return (
    <SectionWrapper>
      <Container>
        <Nav>
          <Title>{title}</Title>
          <NavLink to="/popular">View All</NavLink>
        </Nav>

        <SwiperCarousel movies={movies} />
      </Container>
    </SectionWrapper>
  );
}
