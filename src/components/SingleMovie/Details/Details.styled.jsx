import { styled, Box, Typography } from "@mui/material";

import getColor from "../../../services/getColor";

export const DetailsButton = styled("button")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",

  marginTop: theme.spacing(6),
  padding: theme.spacing(1.1, 2),
  border: "none",
  outline: "none",
  borderRadius: "4px",
  boxShadow: theme.userShadows.card,

  color: theme.palette.common.white,
  backgroundColor: theme.palette.secondary.main,

  fontWeight: 700,
  fontSize: 14,
  textTransform: "uppercase",
  letterSpacing: "1px",

  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover": {
    letterSpacing: "2px",
    borderLeft: `2px solid ${theme.palette.secondary.light}`,
    backgroundColor: "transparent",
    color: theme.palette.secondary.light,
  },

  svg: {
    width: "20px",
    height: "20px",
    marginRight: theme.spacing(1),
  },
}));

export const DrawerWrapper = styled(Box)(({ theme }) => ({
  width: 750,
  height: "100%",
  padding: theme.spacing(7),
}));

export const MovieWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(10),
}));

export const PosterWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  marginRight: theme.spacing(8),
}));

export const Poster = styled("img")(({ theme }) => ({
  width: "400px",
  borderRadius: "4px",
  objectFit: "contain",
  boxShadow: theme.userShadows.card,
}));

export const Rating = styled(Typography)(({ theme, vote }) => ({
  position: "absolute",
  right: "15px",
  top: "10px",

  fontFamily: theme.typography.numsFont,
  fontWeight: 700,
  fontSize: 22,
  color: getColor(vote),
}));

export const InfoWrapper = styled(Box)(({ theme }) => ({}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 700,
  fontSize: 24,
  color: theme.palette.common.white,
  textShadow: theme.userShadows.text,
}));

export const ReleaseYear = styled(Typography)(({ theme, vote }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: 700,
  fontSize: 22,
  color: theme.palette.secondary.main,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  fontWeight: 700,
  fontSize: 18,
  color: theme.palette.common.white,
}));

export const GenreItem = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  fontWeight: 700,
  fontSize: 20,
  color: theme.palette.secondary.main,

  ":not(:last-child)::after": {
    content: "','",
  },
}));

export const Runtime = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  fontFamily: theme.typography.numsFont,
  fontWeight: 700,
  fontSize: 22,
  color: theme.palette.secondary.main,

  border: `2px solid ${theme.palette.secondary.main}`,
  padding: theme.spacing(1),
  borderRadius: "4px",
}));

export const CastList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}));

export const CastListItem = styled("li")(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.secondary.main,

  [theme.breakpoints.up("lg")]: {
    fontSize: 20,
  },

  "&:not(:last-child)::after": {
    content: "','",
    marginRight: theme.spacing(1),
  },
}));

export const CastError = styled(Typography)(({ theme }) => ({}));

export const Overview = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 20,
  color: theme.palette.common.white,
  textShadow: theme.userShadows.text,
}));
