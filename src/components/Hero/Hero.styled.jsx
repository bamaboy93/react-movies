import { styled, Box, Link, Typography, Item, Accordion } from "@mui/material";
import { NavLink } from "react-router-dom";
import getColor from "../../services/getColor";

export const HeroSection = styled("section")(({ theme, backdrop }) => ({
  position: "relative",
  minHeight: "100svh",
  backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  //   "&:before": {
  //     content: "''",
  //     display: "block",
  //     width: "100%",
  //     height: "100%",
  //     position: "absolute",
  //     left: 0,
  //     top: 0,
  //     zIndex: -1,
  //     background: "rgba(0, 0, 0, 0.2)",
  //   },
}));

export const ContentBox = styled(Box)(({ theme }) => ({}));

export const LinkWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1.2, 1.2, 1.2, 2),
  width: "260px",
  borderLeft: `5px solid ${theme.palette.secondary.main}`,
  background:
    "transparent linear-gradient(270deg, rgba(11, 1, 2, 0) 0%, rgba(255, 55, 65, 0.3) 100%)",

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(4),
  },
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 16,
  color: theme.palette.secondary.main,

  [theme.breakpoints.up("md")]: {
    fontSize: 24,
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const MovieInfoWrapper = styled(Box)(({ theme }) => ({}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  maxWidth: "320px",
  marginBottom: theme.spacing(4),
  fontWeight: "bold",
  fontSize: 42,
  lineHeight: 1.125,
  textShadow: theme.userShadows.text,

  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(6),
    maxWidth: "450px",
    fontSize: 56,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "650px",
    fontSize: 72,
  },
}));

export const MovieInfo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "650px",
  },
}));

export const MovieInfoOptions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));

export const ReleaseDate = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: "bold",
  fontSize: 16,
  marginRight: theme.spacing(3),

  [theme.breakpoints.up("lg")]: {
    fontSize: 24,
  },
}));

export const Rating = styled(Typography)(({ theme, vote }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: "bold",
  fontSize: 16,
  marginRight: theme.spacing(3),

  color: getColor(vote),

  [theme.breakpoints.up("lg")]: {
    fontSize: 24,
  },
}));

export const ImdbButton = styled(Link)(({ theme }) => ({
  width: "40px",
  height: "40px",
  color: theme.palette.secondary.main,
}));

export const OverviewAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(4),

  backgroundColor: "rgba(49, 50, 60, 0.55)",
  color: theme.palette.common.white,

  "& .MuiAccordionSummary-root": {
    paddingLeft: theme.spacing(1),
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.secondary.main,
  },
}));

export const Overview = styled(Typography)(({ theme }) => ({}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(1),
  fontWeight: "bold",
  fontSize: 18,
  color: theme.palette.secondary.main,
}));

export const CastList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}));

export const CastListItem = styled("li")(({ theme }) => ({
  fontWeight: "bold",

  [theme.breakpoints.up("lg")]: {
    fontSize: 20,
  },

  "&:not(:last-child)::after": {
    content: "','",
    marginRight: theme.spacing(1),
  },
}));

export const CastError = styled(Typography)(({ theme }) => ({}));

export const ButtonWatch = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(7),
  fontWeight: "bold",
  fontSize: 24,
  letterSpacing: "3px",
  textTransform: "uppercase",

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },

  svg: {
    width: "80px",
    height: "80px",
    marginRight: theme.spacing(4),
    opacity: 0.5,

    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeIn,
    }),
  },

  "&:hover svg": {
    opacity: 1,
    transform: "scale(1.5)",
  },
}));

export const ButtonWatchMobile = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0.6, 2),
  marginLeft: theme.spacing(3),
  fontWeight: "bold",
  textTransform: "uppercase",
  backgroundColor: "rgba(49, 50, 60, 0.55)",
  borderRadius: theme.spacing(0.7),

  [theme.breakpoints.up("lg")]: {
    display: "none",
  },

  svg: {
    width: "30px",
    height: "30px",
    marginRight: theme.spacing(1),

    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeIn,
    }),
  },

  "&:hover svg": {
    transform: "scale(1.2)",
  },
}));
