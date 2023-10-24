import { styled, Typography, Box } from "@mui/material";
import getColor from "../../services/getColor";

export const Card = styled(Box)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",

  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.complex,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover,&:focus": {
    transform: "translateY(-8px)",
  },
  "&:hover #CardTitleOverlay,&:focus #CardTitleOverlay,&:hover #CardRatingOverlay,&:focus #CardRatingOverlay":
    {
      opacity: 1,
    },
}));

export const CardTitleOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "60px",
  bottom: 0,
  padding: theme.spacing(1),
  opacity: 0,
  borderBottom: `4px solid ${theme.palette.secondary.main}`,

  backgroundColor: "rgba(49, 50, 60, 0.647)",

  transition: theme.transitions.create(["opacity"], {
    duration: theme.transitions.duration.complex,
    easing: theme.transitions.easing.easeIn,
  }),
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textShadow: "0 3px 7px rgba(0, 0, 0, 0.3)",
}));

export const CardRatingOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  top: "10px",
  right: "10px",
  borderRadius: "4px",

  opacity: 0,

  backgroundColor: "rgba(49, 50, 60, 0.647)",

  transition: theme.transitions.create(["opacity"], {
    duration: theme.transitions.duration.complex,
    easing: theme.transitions.easing.easeIn,
  }),
}));

export const Rating = styled(Typography)(({ theme, vote }) => ({
  fontFamily: theme.typography.numsFont,
  fontSize: 20,
  color: getColor(vote),
}));
