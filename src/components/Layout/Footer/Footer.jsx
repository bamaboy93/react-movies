import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from "../../Container";

import {
  FooterInfo,
  FooterLine,
  FooterLinksItem,
  FooterLinksLink,
  FooterLinksList,
  FooterLinksWrapper,
  FooterSocials,
  FooterSocialsItem,
  FooterSocialsLink,
  FooterSocialsList,
  FooterStore,
  FooterStoreItem,
  FooterStoreList,
  FooterSubtitle,
  FooterWrapper,
  FooterWrapperCol,
} from "./Footer.styled";

export default function Footer() {
  return (
    <FooterLine>
      <Container>
        <FooterWrapper>
          <FooterLinksWrapper>
            <FooterLinksList>
              <FooterLinksItem>
                <FooterLinksLink href="/">Terms Of Use</FooterLinksLink>
              </FooterLinksItem>
              <FooterLinksItem>
                <FooterLinksLink href="/">Privacy-Policy</FooterLinksLink>
              </FooterLinksItem>
              <FooterLinksItem>
                <FooterLinksLink href="/">Blog</FooterLinksLink>
              </FooterLinksItem>
              <FooterLinksItem>
                <FooterLinksLink href="/">FAQ</FooterLinksLink>
              </FooterLinksItem>
              <FooterLinksItem>
                <FooterLinksLink href="/">Watch List</FooterLinksLink>
              </FooterLinksItem>
            </FooterLinksList>
            <FooterInfo>
              © 2023 MovieBase. All Rights Reserved. All videos and shows on
              this platform are trademarks of, and all related images and
              content are the property of TMBD.
            </FooterInfo>
          </FooterLinksWrapper>
          <FooterWrapperCol>
            <FooterSocials>
              <FooterSubtitle>Follow Us:</FooterSubtitle>
              <FooterSocialsList>
                <FooterSocialsItem>
                  <FooterSocialsLink
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={20} />
                  </FooterSocialsLink>
                </FooterSocialsItem>
                <FooterSocialsItem>
                  <FooterSocialsLink
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} />
                  </FooterSocialsLink>
                </FooterSocialsItem>
                <FooterSocialsItem>
                  <FooterSocialsLink
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={20} />
                  </FooterSocialsLink>
                </FooterSocialsItem>
                <FooterSocialsItem>
                  <FooterSocialsLink
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={20} />
                  </FooterSocialsLink>
                </FooterSocialsItem>
              </FooterSocialsList>
            </FooterSocials>
            <FooterStore>
              <FooterSubtitle>App</FooterSubtitle>
              <FooterStoreList>
                <FooterStoreItem>
                  <a
                    href="https://play.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../../styles/images/google-play.png")}
                      alt={"google play shortcut"}
                      width={120}
                    />
                  </a>
                </FooterStoreItem>
                <FooterStoreItem>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../../styles/images/app-store.png")}
                      alt={"app store shortcut"}
                      width={120}
                    />
                  </a>
                </FooterStoreItem>
              </FooterStoreList>
            </FooterStore>
          </FooterWrapperCol>
        </FooterWrapper>
      </Container>
    </FooterLine>
  );
}
