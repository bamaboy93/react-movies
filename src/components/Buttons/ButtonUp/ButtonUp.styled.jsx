import { styled, Fab } from "@mui/material";

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "30px",
  right: "20px",

  color: theme.palette.secondary.main,
}));
