import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { FaCaretDown } from "react-icons/fa";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../../services/firebase";

import Container from "../../Container";
import Login from "../Login";
import SearchForm from "../SearchForm";
import Menu from "../Menu";
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

export default function Header({ onSubmit }) {
  // const [user, loading] = useAuthState(auth);

  const navItems = [
    { href: "movies", text: "Home" },
    { href: "popular", text: "Popular" },
    { href: "top_rated", text: "Top Rated" },
    { href: "upcoming", text: "Upcoming" },
    { href: "favourites", text: "Favourites" },
  ];

  const isMobile = useMediaQuery({
    query: "(max-width: 1279px)",
  });

  // if (loading) {
  //   return "Loading";
  // }

  return (
    <HeaderLine>
      <Container>
        <Nav>
          <Logo to="/movies">MB</Logo>
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
                      <DropdownListItem key={item.text}>
                        <DropdownListLink to={item.href} />
                        {item.text}
                      </DropdownListItem>
                    ))}
                  </DropdownList>
                </Dropdown>
              </DropdownWrapper>
            </NavListItem>
            <NavListItem>
              <LinkTo href="/">
                Features
                <FaCaretDown />
              </LinkTo>
            </NavListItem>
            <NavListItem>
              <LinkTo href="/">
                Blog
                <FaCaretDown />
              </LinkTo>
            </NavListItem>
          </NavList>
          <ActiveButtons>
            <SearchForm onSubmit={onSubmit} />
            {isMobile ? <Menu /> : <LoginBlock>{<Login />}</LoginBlock>}
          </ActiveButtons>
        </Nav>
      </Container>
    </HeaderLine>
  );
}

Header.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
