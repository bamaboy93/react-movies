import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import GoogleIcon from "@mui/icons-material/Google";
import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  MenuItem,
  Menu,
  Button,
  LinearProgress,
} from "@mui/material";
import Container from "../../Container";
import { Link } from "./HeaderMobile.styled";
import { auth, logout } from "../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SearchForm from "../SearchForm/SearchForm";

export default function HeaderMobile({ onSubmit }) {
  const [user, loading] = useAuthState(auth);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  if (loading) {
    return <LinearProgress />;
  }

  const navItems = [
    { href: "movies", text: "Home" },
    { href: "popular", text: "Popular" },
    { href: "top_rated", text: "Top Rated" },
    { href: "upcoming", text: "Upcoming" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {navItems.map(({ text, href }) => (
              <MenuItem key={text} onClick={handleCloseNavMenu} sx={{ p: 1 }}>
                <Link to={href}>{text}</Link>
              </MenuItem>
            ))}
          </Menu>

          <SearchForm onSubmit={onSubmit} />
          <Box sx={{ flexGrow: 1 }} />

          <Box>
            {user ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} color="inherit">
                    <MoreIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Link to="/favourites" onClick={handleCloseUserMenu}>
                      Favourites
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Button onClick={logout}>Logout</Button>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <IconButton color="inherit">
                <GoogleIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
