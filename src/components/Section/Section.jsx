import PropTypes from "prop-types";
import Container from "../Container";
import { Nav, Title, SectionWrapper, Link } from "./Section.styled";

export default function Section({ title, linkTo, children }) {
  return (
    <SectionWrapper>
      <Container>
        <Nav>
          <Title>{title}</Title>
          <Link to={linkTo}>View All</Link>
        </Nav>
        {children}
      </Container>
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};
