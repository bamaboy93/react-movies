import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)(({ direction }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
  backgroundColor: "#191919",

  position: "fixed",
  top: direction === "down" ? "-60px" : "0",
  left: "0",
  zIndex: "99",
  transition: "top 0.4s ease-out",
}));

export const NavBar = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
