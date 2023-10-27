import { styled, Breadcrumbs, Link, Typography } from "@mui/material";

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const BackLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  fontSize: 16,
  color: theme.palette.common.white,
}));

export const LinkText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 18,
  color: theme.palette.common.white,
}));
