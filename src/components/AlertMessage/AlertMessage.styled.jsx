import { Box, styled } from "@mui/material";

export const AlertWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  width: 1,
  height: "50vh",
  "& .MuiAlert-root": {
    alignItems: "center",
  },
  [theme.breakpoints.up("lg")]: {
    width: 350,
  },
}));
