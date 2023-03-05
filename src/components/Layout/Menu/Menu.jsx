import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  IconButton,
} from "@mui/material";
import {
  MenuRounded,
  KeyboardDoubleArrowLeftRounded,
} from "@mui/icons-material";
import { ButtonLogout, Link } from "./Menu.styled";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", text: "Home" },
    { href: "/popular", text: "Popular" },
    { href: "/top_rated", text: "Top Rated" },
    { href: "/upcoming", text: "Upcoming" },
    { href: "/favourites", text: "Favourites" },
  ];

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton sx={{ color: "common.white", p: 0 }} onClick={toggleMenu}>
        <MenuRounded fontSize="large" />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor={"left"}
        open={open}
        onClose={toggleMenu}
      >
        <Box sx={{ p: 4, width: 280, height: 1 }}>
          <Box sx={{ textAlign: "right" }}>
            <IconButton
              sx={{ color: "common.white", p: 0 }}
              onClick={toggleMenu}
            >
              <KeyboardDoubleArrowLeftRounded fontSize="large" />
            </IconButton>
          </Box>
          <List>
            {navItems.map(({ href, text }) => (
              <ListItemButton key={text}>
                <ListItem
                  component={Link}
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                  to={href}
                >
                  {text}
                </ListItem>
              </ListItemButton>
            ))}
          </List>
          <ButtonLogout>Log Out</ButtonLogout>
        </Box>
      </Drawer>
    </>
  );
}
