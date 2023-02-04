import styled from "@emotion/styled";

export const TitleWrapper = styled.div`
  margin-top: ${(props) => props.theme.space[6]}px;
  @media (min-width: 1280px) {
    margin-top: ${(props) => props.theme.space[10]}px;
  }
`;

export const Title = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  line-height: ${(props) => props.theme.lineHeights.heading};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);

  @media (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSizes.ml};
  }
`;
