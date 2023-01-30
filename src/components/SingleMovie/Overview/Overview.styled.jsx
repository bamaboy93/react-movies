import styled from "@emotion/styled";

export const OverviewWrapper = styled.div``;

export const ShortDesc = styled.p`
  font-size: ${(props) => props.theme.fontSizes.s};
  line-height: ${(props) => props.theme.lineHeights.heading};
  margin-bottom: ${(props) => props.theme.space[5]}px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;
