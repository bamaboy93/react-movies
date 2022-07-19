import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

import Container from "../Container";
import Login from "../Login";
import UserInfo from "../UserInfo";
import SearchLink from "../SearchLink/SearchLink";

import { LinearProgress } from "@mui/material";
import s from "./Layout.module.scss";

export default function Header() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <header className={s.header}>
      <Container>
        <div className={s.navbar}>
          <a href="/react-movies/">
            <p className={s.logo}>MovieDB</p>
          </a>

          <div className={s.loginBlock}>
            <SearchLink />
            {user ? <UserInfo /> : <Login />}
          </div>
        </div>
      </Container>
    </header>
  );
}
