import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import { FaCaretDown } from "react-icons/fa";
import Container from "../Container";
import Login from "../Login";
import UserInfo from "../UserInfo";
import {
  Dropdown,
  DropdownList,
  DropdownListItem,
  DropdownWrapper,
  HeaderLine,
  HomeLink,
  LinkTo,
  LoginBlock,
  Nav,
  NavList,
  NavListItem,
} from "./Header.styled";

import s from "./Layout.module.scss";

export default function Header() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return "Loading";
  }

  return (
    <HeaderLine>
      <Container>
        <Nav>
          <NavLink className={s.logo} to="/">
            MB
          </NavLink>

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
                      <NavLink className={s.dropdownLink} to="/">
                        Home
                      </NavLink>
                    </DropdownListItem>
                    <DropdownListItem>
                      <NavLink className={s.dropdownLink} to="/popular">
                        Popular
                      </NavLink>
                    </DropdownListItem>
                    <DropdownListItem>
                      <NavLink className={s.dropdownLink} to="/top_rated">
                        Top Rated
                      </NavLink>
                    </DropdownListItem>
                    <DropdownListItem>
                      <NavLink className={s.dropdownLink} to="/upcoming">
                        Upcoming
                      </NavLink>
                    </DropdownListItem>
                    <DropdownListItem>
                      <NavLink className={s.dropdownLink} to="/favourites">
                        Favourites
                      </NavLink>
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
          <LoginBlock>{user ? <UserInfo /> : <Login />}</LoginBlock>
        </Nav>
      </Container>
    </HeaderLine>
  );
}
