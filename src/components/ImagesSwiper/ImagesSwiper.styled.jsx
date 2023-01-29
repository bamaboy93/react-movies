import styled from "@emotion/styled";

export const ImageSwiper = styled.div`
  margin-top: ${(props) => props.theme.space[7]}px;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: ${(props) => props.theme.space[7]}px;
  }
`;
