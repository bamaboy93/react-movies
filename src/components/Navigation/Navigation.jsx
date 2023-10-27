import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

import { StyledBreadcrumbs, BackLink, LinkText } from "./Navigation.styled";

export default function Navigation({ title }) {
  const navigate = useNavigate();

  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      <BackLink underline="hover" onClick={() => navigate(-1)}>
        <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
        Back
      </BackLink>

      <LinkText>{title}</LinkText>
    </StyledBreadcrumbs>
  );
}
