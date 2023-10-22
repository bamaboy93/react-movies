import { styled, Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  padding: theme.spacing(0.7, 2),
  marginRight: theme.spacing(3),
}));
