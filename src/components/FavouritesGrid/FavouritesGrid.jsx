import { Link, useLocation } from "react-router-dom";
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

export default function FavouritesGrid({ movies }) {
  const url = useLocation();

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        {movies.map(({ id, backdrop_path, title, tagline }) => (
          <Grid key={id} item xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                title={title}
              />
              <CardContent sx={{ height: 140 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Divider />
                <Typography
                  sx={{ mt: 1 }}
                  variant="body2"
                  color="text.secondary"
                >
                  {tagline}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`${url.pathname}/${id}`}
                  size="medium"
                  color="secondary"
                  variant="contained"
                >
                  Watch
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
