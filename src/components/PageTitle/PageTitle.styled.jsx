import { Box, styled } from "@mui/material";

export const TitleWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(6),
  paddingTop: theme.spacing(2),

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
