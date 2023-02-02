import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import Container from "../Container";

export default function FavouritesGrid({ movies }) {
  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          {movies.map(({ id, backdrop, title, tagline }) => (
            <Grid key={id} item xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={backdrop}
                  title={title}
                />
                <CardContent sx={{ height: 140 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tagline}
                  </Typography>
                  <Divider />
                </CardContent>
                <CardActions>
                  <Button size="medium" variant="contained">
                    Watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
