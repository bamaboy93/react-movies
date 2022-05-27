import Container from "../Container/Container";
import { ReactComponent as Logo } from "../../icons/object.svg";

import s from "./AppBar.module.scss";

export default function AppBar() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.block}>
          <Logo width="60" height="60" fill="#64ffda" />

          <p className={s.logo}>MovieDB</p>
        </div>
      </Container>
    </header>
  );
}
