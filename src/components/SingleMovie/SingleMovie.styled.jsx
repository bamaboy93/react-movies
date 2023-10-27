import { styled, Box, Typography } from "@mui/material";

export const MovieSection = styled("section")(({ theme, backdrop }) => ({
  position: "relative",
  minHeight: "100svh",
  backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  zIndex: 43,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:before": {
    content: "''",
    display: "block",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,
    background: "rgba(0, 0, 0, 0.2)",
  },
}));

export const StyledSection = styled("section")(({ theme }) => ({
  paddingTop: theme.spacing(6),
}));

export const NavWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -10%)",
}));

export const MovieInfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  paddingRight: theme.spacing(18),

  [theme.breakpoints.up("lg")]: {
    paddingRight: theme.spacing(24),
  },
}));

export const MovieInfo = styled(Box)(({ theme }) => ({}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  maxWidth: "750px",
  marginBottom: theme.spacing(6),
  fontWeight: 700,
  fontSize: 64,
  textShadow: theme.userShadows.text,

  [theme.breakpoints.down("lg")]: {
    fontSize: 56,
  },
}));
