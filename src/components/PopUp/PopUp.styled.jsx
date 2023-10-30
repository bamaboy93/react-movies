import { Box, styled } from "@mui/material";

export const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 240,

  [theme.breakpoints.up("sm")]: {
    width: 426,
  },
  [theme.breakpoints.up("md")]: {
    width: 854,
    height: 480,
  },

  [theme.breakpoints.up("xl")]: {
    width: 1280,
    height: 720,
  },
}));
