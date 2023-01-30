import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ButtonOpen = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.red};

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-left: ${(props) => props.theme.space[1]}px;
    background-color: rgba(41, 41, 41, 0.76);
    border-radius: ${(props) => props.theme.radii.round};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Link = styled(NavLink)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  line-height: ${(props) => props.theme.lineHeights.heading};
  color: ${(props) => props.theme.colors.black};
`;
