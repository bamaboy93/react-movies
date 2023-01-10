import Container from "../Container";
import sprite from "../../styles/icons/sprite.svg";
import s from "./Layout.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerWrapper}>
          <div className={s.footerLinks}>
            <ul className={s.footerLinksList}>
              <li>
                <a className={s.footerLinksLink} href="/">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a className={s.footerLinksLink} href="/">
                  Privacy-Policy
                </a>
              </li>
              <li>
                <a className={s.footerLinksLink} href="/">
                  Blog
                </a>
              </li>
              <li>
                <a className={s.footerLinksLink} href="/">
                  FAQ
                </a>
              </li>
              <li>
                <a className={s.footerLinksLink} href="/">
                  Watch List
                </a>
              </li>
            </ul>
            <p className={s.rights}>
              © 2023 MovieBase. All Rights Reserved. All videos and shows on
              this platform are trademarks of, and all related images and
              content are the property of TMBD.
            </p>
          </div>
          <div className={s.footerSocials}>
            <h3 className={s.title}>Follow Us:</h3>
            <ul className={s.footerSocialsList}>
              <li className={s.footerSocialsItem}>
                <a
                  className={s.footerSocialsLink}
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={s.icon} width={20} height={20}>
                    <use href={sprite + "#icon-facebook"}></use>
                  </svg>
                </a>
              </li>
              <li className={s.footerSocialsItem}>
                <a
                  className={s.footerSocialsLink}
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={s.icon} width={20} height={20}>
                    <use href={sprite + "#icon-instagram"}></use>
                  </svg>
                </a>
              </li>
              <li className={s.footerSocialsItem}>
                <a
                  className={s.footerSocialsLink}
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={s.icon} width={20} height={20}>
                    <use href={sprite + "#icon-twitter"}></use>
                  </svg>
                </a>
              </li>
              <li className={s.footerSocialsItem}>
                <a
                  className={s.footerSocialsLink}
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={s.icon} width={20} height={20}>
                    <use href={sprite + "#icon-youtube"}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className={s.footerStore}>
            <h3 className={s.title}>App</h3>
            <ul className={s.footerStoreList}>
              <li className={s.footerStoreItem}>
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../styles/images/google-play.png")}
                    alt={"google play shortcut"}
                    width={120}
                  />
                </a>
              </li>
              <li className={s.footerStoreItem}>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../styles/images/app-store.png")}
                    alt={"app store shortcut"}
                    width={120}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
