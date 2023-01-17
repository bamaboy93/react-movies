import styled from "@emotion/styled/macro";

export const HeaderLine = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme.colors.headerBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const NavListItem = styled.li`
  :not(:last-child) {
    margin-right: 56px;
  }
`;

export const HomeLink = styled.p`
  display: flex;
  align-items: center;
  padding: 24px 0;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.main};
  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.hoverColor};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const LinkTo = styled.a`
  display: flex;
  align-items: center;
  padding: 24px 0;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.main};
  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.hoverColor};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  width: 600px;
  background-color: #0f0f0ff0;

  z-index: 777;
  top: 100%;
  left: 100%;
  transform: translate(-35%, 15px);
  visibility: hidden;
  opacity: 0;
  transition: all 350ms ease-in;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (min-width: 1280px) {
    width: 1100px;
    top: 100%;
    left: 50%;
    transform: translate(-35%, 15px);
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  height: 100%;
  &:hover ${Dropdown}, &:focus ${Dropdown} {
    opacity: 1;
    visibility: visible;
    transform: translate(-35%, 0);
  }
`;

export const DropdownList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 40px 0;
`;

export const DropdownListItem = styled.li`
  width: 100px;
  height: 160px;
  background-color: grey;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.main};

  @media screen and (min-width: 1280px) {
    width: 180px;
    height: 240px;
  }

  &:hover {
    transform: translateY(-1rem);
  }
`;

export const LoginBlock = styled.div`
  display: flex;
  align-items: center;
`;
