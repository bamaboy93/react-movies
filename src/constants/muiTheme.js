import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#e50914",
    },
  },
  colors: {
    white: "#fff",
    grey: "#191919",
    red: "#e50914",
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#191919",
        },
      },
    },
  },
});
