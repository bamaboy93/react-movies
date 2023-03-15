import PropTypes from "prop-types";

import { Title, TitleWrapper } from "./PageTitle.styled";

export default function PageTitle({ title }) {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
