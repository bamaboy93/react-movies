import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SectionWrapper = styled.section`
  padding-top: ${(props) => props.theme.space[9]}px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.space[4]}px;
`;

export const Title = styled.h2`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  line-height: ${(props) => props.theme.lineHeights.heading};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);

  @media (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;

export const Link = styled(NavLink)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.red};
  @media (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSizes.ms};
  }
`;
