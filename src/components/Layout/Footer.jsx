import Container from "../Container";

import { ReactComponent as LogoIcon } from "../../styles/icons/tmdb.svg";
import s from "./Layout.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerWrapper}>
          <p className={s.footerText}>© MovieDB, 2022 based on</p>
          <a href="https://www.themoviedb.org/">
            <LogoIcon width={80} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
