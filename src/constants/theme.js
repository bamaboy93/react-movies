export const theme = {
  fonts: {
    main: '"Nunito", sans-serif',
    numbers: '"Kdam Thmor Pro", sans-serif',
    logo: '"Kalam", cursive',
  },
  colors: {
    background: "#e7eaf2",
    header: "#14141480",
    footer: "#191919",
    button: "#484a4d",
    modal: "rgba(0, 0, 0, 0.25)",

    text: "#d1d0cf",
    peach: "#ffcab0",
    lightviolet: "#9896f1",
    lightgrey: "rgb(169, 169, 169)",
    white: "#ffffff",
    black: "#000000",
    red: "#e50914",
    hover: "#ff1717",
  },
  animation: {
    cubic: "cubic-bezier(0.4, 0, 0.2, 1)",
    main: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    color: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  space: [0, 8, 12, 16, 20, 32, 40, 48, 52, 60, 144],

  fontSizes: {
    xxs: "12px",
    xs: "14px",
    s: "16px",
    ms: "20px",
    m: "24px",
    ml: "32px",
    l: "42px",
    lxl: "56px",
    xl: "64px",
    xxl: "72px",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: "none",
    normal: "1px solid",
  },
  radii: {
    none: "0",
    normal: "4px",
    round: "50%",
  },
};

// ${props => props.theme.colors.primary}
