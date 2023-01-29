import { useMediaQuery } from "react-responsive";
import { FaCaretDown } from "react-icons/fa";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../../services/firebase";

import Container from "../../Container";
import Login from "../Login";
import SearchForm from "../SearchForm";
import MobileMenu from "../MobileMenu";
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
                    <DropdownListItem>
                      <DropdownListLink to="/movies" />
                      Home
                    </DropdownListItem>
                    <DropdownListItem>
                      <DropdownListLink to="/popular" />
                      Popular
                    </DropdownListItem>
                    <DropdownListItem>
                      <DropdownListLink to="/top_rated" />
                      Top Rated
                    </DropdownListItem>
                    <DropdownListItem>
                      <DropdownListLink to="/upcoming" />
                      Upcoming
                    </DropdownListItem>
                    <DropdownListItem>
                      <DropdownListLink to="/favourites" />
                      Favourites
                    </DropdownListItem>
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
            {isMobile ? <MobileMenu /> : <LoginBlock>{<Login />}</LoginBlock>}
          </ActiveButtons>
        </Nav>
      </Container>
    </HeaderLine>
  );
}
