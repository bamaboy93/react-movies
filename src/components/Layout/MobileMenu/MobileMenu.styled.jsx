import styled from "@emotion/styled";

export const ButtonOpen = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.red};

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 48px;
    height: 48px;
    margin-left: ${(props) => props.theme.space[1]}px;
    background-color: rgba(41, 41, 41, 0.76);
    border-radius: ${(props) => props.theme.radii.round};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  margin: 0;
  border: none;
  background-color: transparent;

  svg {
    fill: ${(props) => props.theme.colors.red};
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 80vh;
  padding: 80px;
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
  transition: 250ms ease;
`;

export const MobileMenuList = styled.ul``;

export const MobileMenuItem = styled.li`
  :not(last-child) {
    margin-bottom: ${(props) => props.theme.space[3]}px;
  }
`;

export const MobileMenuLink = styled.a`
  padding: ${(props) => props.theme.space[2]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
`;
