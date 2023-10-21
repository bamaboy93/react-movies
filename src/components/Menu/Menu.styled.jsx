import { styled, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledMenu = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const DrawerContent = styled(Box)(({ theme }) => ({
  width: 280,
  height: 1,

  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: "right",
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(1.5),
  color: theme.palette.common.white,
}));

export const Link = styled(NavLink)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "1",

  color: theme.palette.common.white,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "18px",
  marginTop: theme.spacing(6),
  padding: "6px 32px",
}));
