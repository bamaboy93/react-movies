import { Container } from "@mui/material";
import PropTypes from "prop-types";

import { SectionTitle, StyledSection, Link, StyledBox } from "./Section.styled";

export default function Section({ title, linkTo, children }) {
  return (
    <StyledSection>
      <Container>
        <StyledBox>
          <SectionTitle>{title}</SectionTitle>
          <Link to={linkTo}>View All</Link>
        </StyledBox>
        {children}
      </Container>
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};
