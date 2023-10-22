import { styled, Box, Typography } from "@mui/material";

import getColor from "../../services/getColor";

export const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 33,
  width: "100%",
  height: "100%",
  opacity: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  padding: theme.spacing(1),

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  transition: theme.transitions.create(["opacity"], {
    duration: theme.transitions.duration.complex,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:before": {
    content: "''",
    position: "absolute",
    left: 0,

    display: "inline-block",
    width: "4px",
    height: "100%",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const MovieTitleOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "65px",
  padding: theme.spacing(0.6),
  opacity: 1,
  backgroundColor: "rgba(49, 50, 60, 0.647)",

  transition: theme.transitions.create(["opacity"], {
    duration: theme.transitions.duration.complex,
    easing: theme.transitions.easing.easeIn,
  }),
}));

export const Slide = styled(Box)(({ theme }) => ({
  position: "relative",
  textAlign: "center",

  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover,&:focus": {
    transform:
      "scale3d(1.05, 1.05, 1) translate3d(0, 0, 0) perspective(31.25em)",
    transformOrigin: "50% 50%",
  },

  "&:hover #MovieTitleOverlay, &:focus #MovieTitleOverlay": {
    opacity: 0,
  },
  "&:hover #overlay, &:focus #overlay": {
    opacity: 1,
  },
}));

export const OverlayVote = styled(Typography)(({ theme, vote }) => ({
  position: "absolute",
  top: "20px",
  right: "20px",
  fontFamily: theme.typography.numsFont,
  color: getColor(vote),
}));

export const Image = styled("img")(({ theme }) => ({
  width: "100%",
}));

export const OverlayTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",

  textShadow:
    "2px 7px 5px rgba(0, 0, 0, 0.3),0px -4px 10px rgba(255, 255, 255, 0.3)",
}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  textShadow:
    "2px 7px 5px rgba(0, 0, 0, 0.3),0px -4px 10px rgba(255, 255, 255, 0.3)",
}));
