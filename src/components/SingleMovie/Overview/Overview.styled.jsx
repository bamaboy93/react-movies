import { styled, Box, Typography } from "@mui/material";

export const ButtonsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(4),
}));

export const ShortDesc = styled(Typography)(({ theme }) => ({}));
