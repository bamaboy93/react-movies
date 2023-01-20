import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

import Container from "../../components/Container";
import noImageFound from "../../styles/images/noimage.jpg";
import { ActorName, DropdownTitle, Item } from "./CastMobile.styled";

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
                  <Item>
                    {profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                        alt="actor"
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
          {/* {cast && (
            <CastList>
              {cast.slice(0, 10).map(({ id, name, profile_path }) => (
                <CastListItem key={id}>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                      alt="actor"
                    />
                  ) : (
                    <img src={`${noImageFound}`} alt={name} />
                  )}

                  <CastInfo>{name && <CastName>{name}</CastName>}</CastInfo>
                </CastListItem>
              ))}
            </CastList>
          )} */}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
