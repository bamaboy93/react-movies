import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 40px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LinkTo = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.colors.red};
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const MovieListItem = styled.li`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: all 500ms ease-in;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-left: 4px solid ${(props) => props.theme.colors.hoverColor};
    transition: opacity 300ms ease-in;
  }

  &:hover,
  &:focus {
    transform: scale3d(1.05, 1.05, 1) translate3d(0, 0, 0) perspective(31.25em);
    transform-origin: 50% 50%;
  }
  &:hover:before,
  &:focus:before {
    opacity: 1;
  }
`;

export const MovieTitle = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-weight: 700;
  font-size: 14px;
`;
