import { Box, Alert } from "@mui/material";
import Container from "../../components/Container";

export default function AlertMessage() {
  return (
    <Container>
      <Box
        sx={{
          width: { xs: 1, lg: 350 },
          height: "50vh",
          mt: 5,
          "& .MuiAlert-root": {
            alignItems: "center",
          },
        }}
      >
        <Alert variant="filled" severity="info" color="error">
          <strong>Your favourites list is empty!</strong>
        </Alert>
      </Box>
    </Container>
  );
}
