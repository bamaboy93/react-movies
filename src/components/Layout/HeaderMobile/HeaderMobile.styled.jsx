import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)(({ visible }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
  backgroundColor: "#191919",

  position: "fixed",
  top: visible ? "0" : "-60px",
  left: "0",
  zIndex: "99",
  transition: "top 0.4s ease-out",
}));

export const NavBar = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
