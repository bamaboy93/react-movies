import { styled, Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(49, 50, 60, 0.55)",
  boxShadow: theme.userShadows.card,
}));
