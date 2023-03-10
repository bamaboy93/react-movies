import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#191919",
    },
    secondary: {
      main: "#e50914",
    },
    neutral: {
      main: "#d1d0cf",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 14,
    },
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(49, 50, 60, 0.65)",
        },
      },
    },
  },
});
