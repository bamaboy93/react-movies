import { styled, Box, Typography, Stack } from "@mui/material";

import getColor from "../../services/getColor";

export const MediaSection = styled("section")(({ theme, backdrop }) => ({
  position: "relative",
  zIndex: 55,
  padding: theme.spacing(6, 2, 8, 2),

  backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",

  "&:before": {
    content: "''",
    display: "block",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,
    background: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(2px)",
  },
}));

export const NavWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(6),
}));

export const PosterWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
}));

export const Poster = styled("img")(({ theme }) => ({
  borderRadius: "4px",
  boxShadow: theme.userShadows.card,
}));

export const RatingOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "20px",
  top: "20px",
  padding: theme.spacing(1, 2.5),
  borderRadius: "4px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

export const Rating = styled(Typography)(({ theme, vote }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: 700,
  fontSize: 24,
  color: getColor(vote),
}));

export const InfoSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(4, 2),
}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 38,
  color: theme.palette.common.white,
  textShadow: theme.userShadows.text,
}));

export const ButtonsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(4),
}));

export const Options = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  width: "fit-content",
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5),
  borderRadius: "4px",
  boxShadow: theme.userShadows.card,

  backgroundColor: "rgba(49, 50, 60, 0.55)",
}));

export const Year = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: "bold",
  fontSize: 20,

  color: theme.palette.common.white,
}));

export const Genre = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 22,

  color: theme.palette.accent.peach,
}));

export const Runtime = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.numsFont,
  fontWeight: "bold",
  fontSize: 18,

  color: theme.palette.accent.lightviolet,

  border: `2px solid ${theme.palette.accent.lightviolet}`,
  padding: theme.spacing(0.5),
  borderRadius: "5px",
}));

export const Overview = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(6),

  fontSize: 18,
  letterSpacing: "1.5px",
  textAlign: "justify",
}));
