import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { signInWithGoogle, logout } from "../../../services/firebase";
import {
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";

import {
  AccountCircle,
  Google,
  Logout,
  Notifications,
  FavoriteBorder,
} from "@mui/icons-material";

export default function UserMenu({ children, user }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logOut = () => {
    setAnchorEl(null);
    logout();
  };

  return (
    <>
      <Box>
        {children}
        <IconButton
          size="large"
          aria-label="show 2 new notifications"
          color="inherit"
        >
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        {user ? (
          <IconButton
            id="icon-button"
            size="large"
            aria-label="user menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleUserMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        ) : (
          <IconButton
            size="large"
            aria-label="account of current user"
            onClick={signInWithGoogle}
            color="inherit"
          >
            <Google />
          </IconButton>
        )}

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "icon-button",
          }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <MenuItem
            component={NavLink}
            to="/favourites"
            // onClick={() => setAnchorEl(null)}
          >
            <ListItemIcon>
              <FavoriteBorder fontSize="small" />
            </ListItemIcon>
            Favourites
          </MenuItem>

          <MenuItem onClick={logOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}
