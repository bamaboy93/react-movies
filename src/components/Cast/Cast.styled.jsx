import { styled, Accordion, Typography, Paper } from "@mui/material";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginTop: theme.spacing(8),
  backgroundColor: theme.palette.custom.bgColor,
  color: theme.palette.secondary.main,
  borderRadius: "4px",
  boxShadow: theme.userShadows.card,

  "& .MuiAccordionSummary-root": {
    paddingLeft: theme.spacing(3),
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(2),
  },
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.colors.white,
  boxShadow: theme.userShadows.card,
}));

export const AccordionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 20,
}));

export const ActorName = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  fontWeight: 700,
  fontSize: 16,
}));
