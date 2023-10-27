import PropTypes from "prop-types";
import { AccordionDetails, AccordionSummary, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import noImageFound from "../../styles/images/noimage.jpg";
import {
  AccordionTitle,
  ActorName,
  Item,
  StyledAccordion,
} from "./Cast.styled";

export default function CastMobile({ cast }) {
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="cast-content"
        id="cast-header"
      >
        <AccordionTitle>Cast</AccordionTitle>
      </AccordionSummary>
      <AccordionDetails>
        {cast && (
          <Grid container spacing={1} columns={{ xs: 12, sm: 8 }}>
            {cast.slice(0, 8).map(({ id, name, profile_path }) => (
              <Grid item xs={6} sm={2} key={id}>
                <Item>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                      alt={name}
                    />
                  ) : (
                    <img src={`${noImageFound}`} alt={name} />
                  )}

                  <ActorName>{name}</ActorName>
                </Item>
              </Grid>
            ))}
          </Grid>
        )}
      </AccordionDetails>
    </StyledAccordion>
  );
}

CastMobile.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape),
};
