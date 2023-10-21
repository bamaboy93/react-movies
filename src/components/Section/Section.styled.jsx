import { Box, Typography, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

export const StyledSection = styled("section")(({ theme }) => ({
  paddingTop: theme.spacing(6),
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 20,
  textShadow: theme.userShadows.text,

  [theme.breakpoints.up("lg")]: {
    fontSize: 24,
  },
}));

export const Link = styled(NavLink)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 16,
  color: theme.palette.secondary.main,

  [theme.breakpoints.up("lg")]: {
    fontSize: 20,
  },
}));
