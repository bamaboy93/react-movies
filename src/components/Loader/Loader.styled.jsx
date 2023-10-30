import { Box, styled } from "@mui/material";

export const MainWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100vw",
  height: "100vh",
}));

export const LoaderWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  top: "50%",
  left: "50%",
  marginLeft: "-50px",
  marginTop: "-50px",
}));
