import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";

export default function Navigation({ title }) {
  const navigate = useNavigate();

  return (
    <Breadcrumbs sx={{ color: "white" }} aria-label="breadcrumb">
      <Link
        underline="hover"
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          fontSize: 16,
        }}
        color="white"
        onClick={() => navigate(-1)}
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Back
      </Link>

      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: 16,
          fontWeight: "bold",
        }}
        color="white"
      >
        <MovieIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        {title}
      </Typography>
    </Breadcrumbs>
  );
}
