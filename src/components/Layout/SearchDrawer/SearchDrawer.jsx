import { useState } from "react";
import { Container, Drawer, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import SearchForm from "../SearchForm/SearchForm";

import { StyledDrawer, DrawerContentBox, Title } from "./SearchDarwer.styled";

export default function SearchDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="open drawer"
        color="inherit"
        onClick={toggleDrawer()}
      >
        <SearchIcon />
      </IconButton>
      <StyledDrawer anchor={"top"} open={open} onClose={toggleDrawer()}>
        <Container>
          <DrawerContentBox>
            <Title>Millions of films, TV series and people. Explore now.</Title>
            <SearchForm />
          </DrawerContentBox>
        </Container>
      </StyledDrawer>
    </>
  );
}
