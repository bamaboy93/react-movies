import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "../../components/Container";
import noImageFound from "../../styles/images/noimage.jpg";
import { ActorName, DropdownTitle, Image, Item } from "./CastMobile.styled";

export default function CastMobile({ cast }) {
  return (
    <Container>
      <Accordion sx={{ backgroundColor: "#f5f4f4" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DropdownTitle>Cast</DropdownTitle>
        </AccordionSummary>
        <AccordionDetails>
          {cast && (
            <Grid container spacing={1}>
              {cast.slice(0, 6).map(({ id, name, profile_path }) => (
                <Grid item xs={4} key={id}>
                  <Item sx={{ height: 1 }}>
                    {profile_path ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                        alt={name}
                      />
                    ) : (
                      <Image src={`${noImageFound}`} alt={name} />
                    )}

                    <ActorName>{name}</ActorName>
                  </Item>
                </Grid>
              ))}
            </Grid>
          )}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

CastMobile.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape),
};
