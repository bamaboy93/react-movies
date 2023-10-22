import { styled, IconButton } from "@mui/material";

export const Button = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,

  svg: {
    width: "150px",
    height: "150px",

    opacity: 0.5,

    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeIn,
    }),
  },

  "&:hover svg": {
    opacity: 1,
    transform: "scale(1.3)",
  },

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
