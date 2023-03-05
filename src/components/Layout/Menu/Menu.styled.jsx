import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ButtonLogout = styled.button`
  width: 100%;
  padding: ${(props) => props.theme.space[3]}px;
  margin-top: ${(props) => props.theme.space[6]}px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  line-height: ${(props) => props.theme.lineHeights.heading};
`;

export const Link = styled(NavLink)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  line-height: ${(props) => props.theme.lineHeights.heading};
  color: ${(props) => props.theme.colors.white};
`;
