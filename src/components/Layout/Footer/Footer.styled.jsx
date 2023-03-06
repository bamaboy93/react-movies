import styled from "@emotion/styled";

export const FooterLine = styled.footer`
  margin-top: ${(props) => props.theme.space[5]}px;
  padding: 40px 0;
  background-color: ${(props) => props.theme.colors.footer};
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const FooterWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const FooterWrapperCol = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: column;
  }
`;

export const FooterLinksWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`;

export const FooterLinksList = styled.ul`
  margin-bottom: ${(props) => props.theme.space[5]}px;
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterLinksItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[4]}px;

    @media screen and (min-width: 768px) {
      margin-bottom: ${(props) => props.theme.space[1]}px;
    }
  }
`;

export const FooterLinksLink = styled.a`
  font-size: ${(props) => props.theme.fontSizes.ms};
  transition: ${(props) => props.theme.animation.color};

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const FooterInfo = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
`;

export const FooterSocials = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: ${(props) => props.theme.space[4]}px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: ${(props) => props.theme.space[10]}px;
  }
`;

export const FooterSubtitle = styled.h3`
  margin-bottom: ${(props) => props.theme.space[5]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
`;

export const FooterSocialsList = styled.ul`
  display: flex;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: ${(props) => props.theme.space[6]}px;
  }
`;

export const FooterSocialsItem = styled.li`
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[4]}px;
  }
`;

export const FooterSocialsLink = styled.a`
  width: 42px;
  height: 42px;
  background-color: rgba(41, 41, 41, 0.76);
  color: ${(props) => props.theme.colors.text};
  border: 2px solid transparent;
  border-radius: ${(props) => props.theme.radii.round};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 250ms;

  svg {
    fill: currentColor;
    transition: ${(props) => props.theme.animation.color};
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.hover};
    box-shadow: 0 0 10px #ff4040;
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const FooterStore = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: ${(props) => props.theme.space[4]}px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: ${(props) => props.theme.space[10]}px;
  }
`;

export const FooterStoreList = styled.ul`
  display: flex;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const FooterStoreItem = styled.li`
  :not(:last-child) {
    margin-right: ${(props) => props.theme.space[1]}px;
  }
`;
