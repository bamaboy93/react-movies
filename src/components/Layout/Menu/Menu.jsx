import { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { HiMenu } from "react-icons/hi";
import { ButtonOpen, Link } from "./Menu.styled";

export default function Menu() {
  const [state, setState] = useState({
    right: false,
  });

  const anchor = "right";

  const navItems = [
    { href: "movies", text: "Home" },
    { href: "popular", text: "Popular" },
    { href: "top_rated", text: "Top Rated" },
    { href: "upcoming", text: "Upcoming" },
    { href: "favourites", text: "Favourites" },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text}>
            <Link to={item.href}>{item.text}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Fragment>
        <ButtonOpen onClick={toggleDrawer(anchor, true)}>
          <HiMenu size={35} />
        </ButtonOpen>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </Fragment>
    </div>
  );
}
