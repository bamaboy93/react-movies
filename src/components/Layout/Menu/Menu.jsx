import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout, signInWithGoogle } from "../../../services/firebase";
import { Drawer, IconButton, LinearProgress, Stack } from "@mui/material";
import {
  MenuRounded,
  KeyboardDoubleArrowLeftRounded,
} from "@mui/icons-material";
import {
  StyledMenu,
  DrawerContent,
  StyledBox,
  Link,
  StyledButton,
} from "./Menu.styled";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LinearProgress />;
  }

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
    <StyledMenu>
      <IconButton color="inherit" onClick={toggleMenu}>
        <MenuRounded />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor={"left"}
        open={open}
        onClose={toggleMenu}
      >
        <DrawerContent>
          <StyledBox>
            <IconButton color="inherit" onClick={toggleMenu}>
              <KeyboardDoubleArrowLeftRounded />
            </IconButton>
          </StyledBox>
          <Stack spacing={5}>
            {navItems.map(({ href, text }) => (
              <Link key={text} to={href}>
                {text}
              </Link>
            ))}
          </Stack>
          {user ? (
            <StyledButton
              variant="contained"
              color="secondary"
              onClick={logout}
            >
              Log Out
            </StyledButton>
          ) : (
            <StyledButton
              variant="contained"
              color="secondary"
              onClick={signInWithGoogle}
            >
              Login
            </StyledButton>
          )}
        </DrawerContent>
      </Drawer>
    </StyledMenu>
  );
}
