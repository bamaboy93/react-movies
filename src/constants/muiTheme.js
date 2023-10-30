import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    // primary: {
    //   light: "#484a4d",
    //   main: "#191919",
    //   dark: "#14141480",
    // },
    primary: {
      main: "#e50914",
      dark: "#ff1717",
    },
    secondary: {
      main: "#fff",
      dark: "#ededed",
    },
    custom: {
      peach: "#ffcab0",
      lightviolet: "#9896f1",
      bgColor: "rgba(49, 50, 60, 0.55)",
      darkGrey: "#191919",
    },
  },
  typography: {
    logoFont: '"Kalam", cursive',
    numsFont: '"Kdam Thmor Pro", sans-serif',
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 16,
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
  transitions: {
    easing: {
      main: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  userShadows: {
    text: "2px 7px 5px rgba(0, 0, 0, 0.3),0px -4px 10px rgba(255, 255, 255, 0.3)",
    card: "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(49, 50, 60, 0.85)",
        },
      },
    },
  },
});
