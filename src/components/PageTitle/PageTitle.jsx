import { Typography } from "@mui/material";
import PropTypes from "prop-types";

import { TitleWrapper } from "./PageTitle.styled";

export default function PageTitle({ title }) {
  return (
    <TitleWrapper>
      <Typography variant="h2" fontWeight={"bold"}>
        {title}
      </Typography>
    </TitleWrapper>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
