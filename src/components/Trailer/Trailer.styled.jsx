import styled from "@emotion/styled";

export const Video = styled.iframe`
  width: 310px;
  height: 240px;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 760px;
    height: 576px;
  }
  @media (min-width: 1280px) {
    width: 960px;
    height: 540px;
  }
`;
