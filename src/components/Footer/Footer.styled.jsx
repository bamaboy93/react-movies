import {
  Box,
  List,
  ListItem,
  Typography,
  styled,
  Link,
  Stack,
} from "@mui/material";

export const FooterLine = styled("footer")(({ theme }) => ({
  padding: theme.spacing(5, 0),
  backgroundColor: theme.palette.custom.darkGrey,

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(8),
  },

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const FooterWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  [theme.breakpoints.up("lg")]: { justifyContent: "space-between" },
}));

export const FooterLinksWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(5),
  },

  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
}));

export const FooterLinksList = styled(List)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  display: "flex",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "space-between",
  },
}));

export const FooterLinksItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  width: "fit-content",
  transition: theme.transitions.create(["color"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const FooterInfo = styled(Typography)(({ theme }) => ({
  fontSize: 14,
}));

export const FooterSocialsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const FooterSocials = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(4),
  },

  [theme.breakpoints.up("lg")]: {
    marginRight: theme.spacing(6),
  },
}));

export const FooterStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const FooterSubtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1.6),
  marginBottom: theme.spacing(6),
  fontWeight: "bold",
}));

export const FooterSocialsLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "42px",
  height: "42px",
  backgroundColor: theme.palette.custom.bgColor,
  color: theme.palette.secondary.main,
  border: "2px solid transparent",
  borderRadius: "50%",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",

  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),

  svg: {
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeIn,
    }),
  },

  "&:hover": {
    borderColor: theme.palette.primary.main,
    boxShadow: "0 0 10px #ff4040",
  },

  "&:hover svg": {
    color: theme.palette.primary.main,
  },
}));

export const FooterStores = styled(Box)(({ theme }) => ({}));

export const FooterSotoresLink = styled(Link)(({ theme }) => ({}));
