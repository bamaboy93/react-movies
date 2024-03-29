import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Container, LinearProgress } from "@mui/material";

import { auth } from "../../services/firebase";

import UserMenu from "./UserMenu";
import SearchDrawer from "../SearchDrawer";
import Menu from "../Menu";

import {
  AppBarLine,
  StyledToolbar,
  Logo,
  StyledStack,
  PageLink,
} from "./Header.styled";

export default function Header() {
  const [user, loading] = useAuthState(auth);

  const navPages = [
    { href: "/", name: "Home" },
    { href: "popular", name: "Popular" },
    { href: "top_rated", name: "Top Rated" },
    { href: "upcoming", name: "Upcoming" },
  ];

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <>
      <AppBarLine position="static">
        <Container maxWidth="lg">
          <StyledToolbar disableGutters>
            <Logo to="/">MB</Logo>

            <Menu />

            <StyledStack component="nav" direction="row" spacing={4}>
              {navPages.map(({ href, name }) => (
                <PageLink key={href} to={href}>
                  {name}
                </PageLink>
              ))}
            </StyledStack>

            <UserMenu user={user}>
              <SearchDrawer />
            </UserMenu>
          </StyledToolbar>
        </Container>
      </AppBarLine>
    </>
  );
}
//  <LoginBlock>{user ? <User /> : <Login />}</LoginBlock>
