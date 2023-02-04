import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  line-height: ${(props) => props.theme.lineHeights.heading};
  color: ${(props) => props.theme.colors.black};
`;
