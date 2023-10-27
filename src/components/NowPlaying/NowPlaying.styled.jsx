import { styled, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import getColor from "../../services/getColor";

export const Section = styled("section")(({ theme }) => ({
  padding: theme.spacing(10, 0),

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const MovieBox = styled(Box)(({ theme, backdrop }) => ({
  position: "relative",
  width: "100%",
  height: "600px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
  backgroundSize: "cover",
  backgroundPosition: "center",

  "&:before": {
    content: "''",

    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,

    background: "rgba(0, 0, 0, 0.2)",
  },

  [theme.breakpoints.up("lg")]: {
    height: "900px",
    backgroundAttachment: "fixed",
  },
}));

export const MovieWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 111,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    justifyContent: "start",
    paddingLeft: theme.spacing(8),
  },
}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  maxWidth: "400px",
  marginBottom: theme.spacing(8),
  fontWeight: "bold",
  fontSize: 32,
  textShadow: theme.userShadows.text,

  [theme.breakpoints.up("lg")]: {
    maxWidth: "600px",
    fontSize: 42,
  },
}));

export const MovieInfo = styled(Box)(({ theme }) => ({
  maxWidth: "400px",

  [theme.breakpoints.up("lg")]: {
    maxWidth: "650px",
  },
}));

export const Options = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));

export const Option = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),

  fontFamily: theme.typography.numsFont,
  fontWeight: "bold",
  fontSize: 18,
  textShadow: theme.userShadows.text,

  [theme.breakpoints.up("lg")]: {
    fontSize: 22,
  },
}));

export const Rating = styled(Typography)(({ theme, vote }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: "bold",
  fontSize: 18,
  textShadow: theme.userShadows.text,

  color: getColor(vote),

  [theme.breakpoints.up("lg")]: {
    fontSize: 22,
  },
}));

export const Overview = styled(Typography)(({ theme }) => ({
  textShadow: theme.userShadows.text,
}));

export const LinkWatch = styled(NavLink)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  maxWidth: "400px",
  marginTop: theme.spacing(8),
  padding: theme.spacing(1, 2),
  fontWeight: "bold",
  textTransform: "uppercase",
  backgroundColor: theme.palette.secondary.main,

  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover": {
    letterSpacing: "1.5px",
    borderLeft: `3px solid ${theme.palette.secondary.main}`,
    background:
      "transparent linear-gradient(270deg, rgba(11, 1, 2, 0) 0%, rgba(255, 55, 65, 0.3) 100%)",
    color: theme.palette.secondary.main,
  },

  svg: {
    width: "20px",
    height: "20px",
    marginRight: theme.spacing(1),
  },
}));

export const PosterWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
