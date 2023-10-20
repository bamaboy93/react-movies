import { alpha, styled, InputBase, IconButton } from "@mui/material";

export const Search = styled("form")(({ theme }) => ({
  position: "relative",

  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),

  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "350px",
  color: theme.palette.common.white,
  fontSize: 20,

  [theme.breakpoints.up("md")]: {
    width: "600px",
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: theme.spacing(4),

    cursor: "pointer",

    "&:focus": {
      cursor: "text",
    },
  },
}));

export const SearchButton = styled(IconButton)(({ theme }) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  right: 0,
  borderRadius: "4px",
  color: theme.palette.common.white,

  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));
