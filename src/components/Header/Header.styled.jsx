import { styled, AppBar, Stack, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export const AppBarLine = styled(AppBar)(({ theme }) => ({
  height: "65px",
  // top: visible ? "0" : "-65px",
  backgroundColor: theme.palette.primary.main,

  transition: "top 0.4s ease-out",
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",

  "@media all": {
    minHeight: 65,
  },
}));

export const Logo = styled(NavLink)(({ theme }) => ({
  fontFamily: theme.typography.logoFont,
  fontWeight: "bold",
  fontSize: "32px",
  lineHeight: "1",

  color: theme.palette.secondary.main,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignSelf: "center",
  },
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const PageLink = styled(NavLink)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "1",

  color: theme.palette.common.white,

  transition: theme.transitions.create(["color"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover, &:focus": {
    color: theme.palette.secondary.main,
  },
}));
