import { styled, Box, Drawer, Typography } from "@mui/material";

import bgImage from "../../styles/images/movies.jpg";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
  },
}));

export const DrawerContentBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(50),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: "bold",
  color: theme.palette.common.white,
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    fontSize: 22,
  },
}));
