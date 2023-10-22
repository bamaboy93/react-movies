import { styled, Typography, Box } from "@mui/material";

export const Item = styled(Box)(({ theme }) => ({
  position: "relative",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",

  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.complex,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:before": {
    content: "''",
    position: "absolute",
    left: 0,
    top: 0,

    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: 0,
    borderLeft: `4px solid ${theme.palette.secondary.main}`,

    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeIn,
    }),
  },

  "&:hover,&:focus": {
    transform:
      "scale3d(1.05, 1.05, 1) translate3d(0, 0, 0) perspective(31.25em)",
    transformOrigin: "50% 50%",
  },
  "&:hover:before,&:focus:before": {
    opacity: 1,
  },
}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "10px",
  left: "10px",
  fontWeight: "bold",
  fontSize: 14,
}));
