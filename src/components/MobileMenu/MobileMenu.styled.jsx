import styled from "@emotion/styled";

export const ButtonOpen = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.red};

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 48px;
    height: 48px;
    margin-left: 10px;
    background-color: rgba(41, 41, 41, 0.76);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.mainText};
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
    fill: red;
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
  background-color: white;
  text-align: center;
  transition: 250ms ease;
`;

export const MobileMenuList = styled.ul``;

export const MobileMenuItem = styled.li``;

export const MobileMenuLink = styled.a`
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: grey;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: red;
    text-decoration: underline;
  }
`;
