import { Container, ListItemText } from "@mui/material";

import {
  FacebookRounded,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import {
  FooterInfo,
  FooterLine,
  FooterLinksItem,
  FooterLinksList,
  FooterLinksWrapper,
  FooterSocials,
  FooterSocialsLink,
  FooterSubtitle,
  FooterWrapper,
  FooterSocialsWrapper,
  FooterStores,
  FooterSotoresLink,
  FooterStack,
} from "./Footer.styled";

export default function Footer() {
  const footerLinks = [
    { href: "/", name: "Terms of Use" },
    { href: "/", name: "Privacy-Policy" },
    { href: "/", name: "Blog" },
    { href: "/", name: "FAQ" },
    { href: "/", name: "Watch List" },
  ];

  const socialLinks = [
    { id: 1, href: "/", icon: <FacebookRounded fontSize="small" /> },
    { id: 2, href: "/", icon: <Instagram fontSize="small" /> },
    { id: 3, href: "/", icon: <Twitter fontSize="small" /> },
    { id: 4, href: "/", icon: <YouTube fontSize="small" /> },
  ];

  const storesLinks = [
    {
      href: "https://play.google.com/",
      src: require("../../styles/images/google-play.png"),
      alt: "google play shortcut",
    },
    {
      href: "https://www.apple.com/app-store/",
      src: require("../../styles/images/app-store.png"),
      alt: "app store shortcut",
    },
  ];

  return (
    <FooterLine>
      <Container>
        <FooterWrapper>
          <FooterLinksWrapper>
            <FooterLinksList>
              {footerLinks.map(({ href, name }) => (
                <FooterLinksItem component="a" key={name} href={href}>
                  <ListItemText primary={name} />
                </FooterLinksItem>
              ))}
            </FooterLinksList>
            <FooterInfo>
              © 2023 MovieBase. All Rights Reserved. All videos and shows on
              this platform are trademarks of, and all related images and
              content are the property of TMBD.
            </FooterInfo>
          </FooterLinksWrapper>
          <FooterSocialsWrapper>
            <FooterSocials>
              <FooterSubtitle variant="h3">Follow Us:</FooterSubtitle>
              <FooterStack direction="row" spacing={2}>
                {socialLinks.map(({ id, href, icon }) => (
                  <FooterSocialsLink key={id} href={href}>
                    {icon}
                  </FooterSocialsLink>
                ))}
              </FooterStack>
            </FooterSocials>
            <FooterStores>
              <FooterSubtitle variant="h3">App</FooterSubtitle>
              <FooterStack direction="row" spacing={2} sx={{ pt: 0.5 }}>
                {storesLinks.map(({ href, src, alt }) => (
                  <FooterSotoresLink key={alt} href={href}>
                    <img src={src} alt={alt} />
                  </FooterSotoresLink>
                ))}
              </FooterStack>
            </FooterStores>
          </FooterSocialsWrapper>
        </FooterWrapper>
      </Container>
    </FooterLine>
  );
}
