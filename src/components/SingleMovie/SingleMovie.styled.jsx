import styled from "@emotion/styled";
import getColor from "../../services/getColor";

export const MovieScreen = styled.div`
  position: relative;
  min-height: 100vh;
  padding: ${(props) => props.theme.space[7]}px;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.backdrop})`};
  background-repeat: no-repeat !important;
  background-size: cover !important;

  z-index: 1;
  @media (min-width: 768px) and (max-width: 1279px) {
    padding: ${(props) => props.theme.space[5]}px;
  }
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
  max-width: 500px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.lxl};
  line-height: ${(props) => props.theme.lineHeights.heading};

  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: ${(props) => props.theme.fontSizes.l};
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Year = styled.p`
  margin-right: ${(props) => props.theme.space[4]}px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => props.theme.colors.red};
`;

export const Genre = styled.p`
  margin-right: ${(props) => props.theme.space[4]}px;
  ont-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => props.theme.colors.peach};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Runtime = styled.p`
  color: ${(props) => props.theme.colors.addText};
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => props.theme.colors.lightviolet};
  border: 2px solid ${(props) => props.theme.colors.lightviolet};
  padding: ${(props) => props.theme.space[1]}px;
  border-radius: 5px;
  margin-right: ${(props) => props.theme.space[4]}px;
`;

export const Rating = styled.p`
  display: flex;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => getColor(props.vote)};
`;
export const RatingFull = styled.span`
  font-size: ${(props) => props.theme.fontSizes.s};
  align-items: flex-start;
  margin-left: ${(props) => props.theme.space[1]}px;
  color: ${(props) => props.theme.colors.white};
`;

export const FadeBlock = styled.div`
  position: relative;
  margin-bottom: ${(props) => props.theme.space[5]}px;
`;

export const NavigationWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const NavigationItem = styled.button`
  position: relative;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};

  cursor: pointer;
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[7]}px;
  }
`;
