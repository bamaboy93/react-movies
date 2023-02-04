import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Toolbar,
  IconButton,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { logout } from "../../../services/firebase";
import userIcon from "../../../styles/images/user.png";

export default function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Toolbar disableGutters sx={{ ml: 1 }}>
      <Box>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="User" src={userIcon} />
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
            <NavLink to="/favourites" onClick={handleCloseUserMenu}>
              Favourites
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Button onClick={logout}>Logout</Button>
          </MenuItem>
        </Menu>
      </Box>
    </Toolbar>
  );
}
