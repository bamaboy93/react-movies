import { styled, Box, Typography } from "@mui/material";

import getColor from "../../../services/getColor";

export const Options = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  marginBottom: theme.spacing(5),
  padding: theme.spacing(1.5),
  borderRadius: "4px",
  boxShadow: theme.userShadows.card,

  backgroundColor: "rgba(49, 50, 60, 0.55)",
}));

export const Year = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: "bold",
  fontSize: 24,
  marginRight: theme.spacing(3),
  color: theme.palette.common.white,
}));

export const Genre = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 22,
  marginRight: theme.spacing(3),
  color: theme.palette.accent.peach,
}));

export const Runtime = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: "bold",
  fontSize: 20,
  marginRight: theme.spacing(3),
  color: theme.palette.accent.lightviolet,

  border: `2px solid ${theme.palette.accent.lightviolet}`,
  padding: theme.spacing(0.5),
  borderRadius: "5px",
}));

export const RatingBox = styled(Box)(({ theme, vote }) => ({
  display: "flex",
}));

export const Rating = styled(Typography)(({ theme, vote }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: "bold",
  fontSize: 24,

  color: getColor(vote),
}));

export const RatingFull = styled(Typography)(({ theme, vote }) => ({
  alignItems: "flex-start",
  marginLeft: theme.spacing(1),
  fontWeight: "bold",
  fontSize: 16,

  color: theme.palette.common.white,
}));
