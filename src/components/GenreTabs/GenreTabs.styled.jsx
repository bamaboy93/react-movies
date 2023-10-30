import { styled, Accordion, Typography, Paper, Box } from "@mui/material";

export const TabsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",

  "& .MuiTabs-root": {
    backgroundColor: theme.palette.custom.bgColor,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    borderRadius: "4px",
    boxShadow: theme.userShadows.card,
  },

  "& .MuiTabPanel-root": {
    padding: 0,
  },

  "& .MuiSvgIcon-root": {
    fill: theme.palette.primary.main,
  },

  "& .MuiButtonBase-root": {
    color: theme.palette.secondary.main,
    fontSize: 14,
    fontWeight: 700,
  },

  "& .MuiButtonBase-root.Mui-selected": {
    color: theme.palette.primary.main,
    background:
      "transparent linear-gradient(270deg, rgba(11, 1, 2, 0) 0%, rgba(255, 55, 65, 0.3) 100%)",
    borderRadius: "4px",
    boxShadow: theme.userShadows.card,
  },
}));
