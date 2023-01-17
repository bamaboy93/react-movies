import { NavLink, Link, useLocation } from "react-router-dom";

import Container from "../Container";
import noImage from "../../styles/images/no-image.jpg";

import {
  Section,
  Nav,
  Title,
  MovieList,
  MovieListItem,
  MovieTitle,
} from "./Upcoming.styled";

export default function Upcoming({ movies, title }) {
  const url = useLocation();
  return (
    <Section>
      <Container>
        <Nav>
          <Title>{title}</Title>
          <NavLink to="/popular">View All</NavLink>
        </Nav>
        <MovieList>
          {movies.slice(0, 10).map(({ id, backdrop_path, title }) => (
            <MovieListItem key={id}>
              <Link to={`${url.pathname}/${id}`}>
                <img
                  src={
                    backdrop_path
                      ? `https://image.tmdb.org/t/p/original${backdrop_path}`
                      : `${noImage}`
                  }
                  alt="movie backdrop"
                />
              </Link>

              <MovieTitle>{title}</MovieTitle>
            </MovieListItem>
          ))}
        </MovieList>
      </Container>
    </Section>
  );
}
