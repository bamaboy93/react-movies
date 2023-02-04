import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { FaCaretDown } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase";

import Container from "../../Container";
import Login from "../Login";
import User from "../User";
import SearchForm from "../SearchForm";
import Menu from "../Menu";
import uImage from "../../../styles/images/pages/upcoming.png";
import hImage from "../../../styles/images/pages/home.png";
import pImage from "../../../styles/images/pages/popular.png";
import tImage from "../../../styles/images/pages/toprated.png";
import {
  Dropdown,
  DropdownList,
  DropdownListItem,
  DropdownListLink,
  DropdownWrapper,
  HeaderLine,
  HomeLink,
  Logo,
  LinkTo,
  LoginBlock,
  Nav,
  NavList,
  NavListItem,
  ActiveButtons,
} from "./Header.styled";
import { LinearProgress } from "@mui/material";

export default function Header({ onSubmit }) {
  const [user, loading] = useAuthState(auth);

  const navItems = [
    { href: "/", text: "Home", image: hImage },
    { href: "popular", text: "Popular", image: pImage },
    { href: "top_rated", text: "Top Rated", image: tImage },
    { href: "upcoming", text: "Upcoming", image: uImage },
  ];

  const isMobile = useMediaQuery({
    query: "(max-width: 1279px)",
  });

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <HeaderLine>
      <Container>
        <Nav>
          <Logo to="/">MB</Logo>
          <NavList>
            <NavListItem>
              <DropdownWrapper>
                <HomeLink>
                  Home
                  <FaCaretDown />
                </HomeLink>
                <Dropdown>
                  <DropdownList>
                    {navItems.map((item) => (
                      <DropdownListItem key={item.text} img={item.image}>
                        <DropdownListLink to={item.href} />
                        {item.text}
                      </DropdownListItem>
                    ))}
                  </DropdownList>
                </Dropdown>
              </DropdownWrapper>
            </NavListItem>
            <NavListItem>
              <LinkTo to="/">
                Features
                <FaCaretDown />
              </LinkTo>
            </NavListItem>
            <NavListItem>
              <LinkTo to="/">
                Blog
                <FaCaretDown />
              </LinkTo>
            </NavListItem>
          </NavList>
          <ActiveButtons>
            <SearchForm onSubmit={onSubmit} />
            {isMobile ? (
              <Menu />
            ) : (
              <LoginBlock>{user ? <User /> : <Login />}</LoginBlock>
            )}
          </ActiveButtons>
        </Nav>
      </Container>
    </HeaderLine>
  );
}

Header.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
