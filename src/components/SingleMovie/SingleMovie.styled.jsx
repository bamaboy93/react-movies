import styled from "@emotion/styled";

export const MovieScreen = styled.div`
  position: relative;
  min-height: 100vh;

  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.backdrop})`};
  background-repeat: no-repeat !important;
  background-size: cover !important;

  z-index: 1;

  @media (min-width: 1280px) {
    background-position: center !important;
  }
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`;

export const MovieWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  margin-bottom: ${(props) => props.theme.space[7]}px;
  max-width: 750px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeights.heading};

  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: ${(props) => props.theme.fontSizes.l};
  }
`;
