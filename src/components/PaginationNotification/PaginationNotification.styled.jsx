import { Box, styled } from "@mui/material";

export const NotificationWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  display: "flex",
  justifyContent: "center",
}));
