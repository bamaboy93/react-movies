import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import getColor from "../../services/getColor";

export const Section = styled.section`
  padding: 80px 0;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  padding-top: ${(props) => props.theme.space[7]}px;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.backdrop})`};
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 600px;
  }

  @media screen and (min-width: 1280px) {
    height: 750px;
    background-attachment: fixed;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.black};
    opacity: 0.3;
  }
`;

export const MovieWrapper = styled.div`
  position: relative;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-left: ${(props) => props.theme.space[9]}px;
    justify-content: start;
  }
`;

export const InfoWrapper = styled.div``;

export const MovieTitle = styled.h2`
  display: inline-block;
  max-width: 320px;
  margin-bottom: ${(props) => props.theme.space[7]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ml};
  line-height: ${(props) => props.theme.lineHeights.heading};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  @media screen and (min-width: 768px) {
    margin-bottom: ${(props) => props.theme.space[9]}px;
    max-width: 400px;
    font-size: ${(props) => props.theme.fontSizes.l};
  }

  @media screen and (min-width: 1280px) {
    max-width: 650px;
    font-size: ${(props) => props.theme.fontSizes.lxl};
  }
`;

export const MovieInfo = styled.div`
  max-width: 320px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 650px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[5]}px;
`;

export const Option = styled.p`
  margin-right: ${(props) => props.theme.space[4]}px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;

export const Rating = styled.p`
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  color: ${(props) => getColor(props.vote)};

  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;

export const Overview = styled.p`
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const LinkWatch = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: ${(props) => props.theme.space[7]}px;
  padding: 10px 15px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xs};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.red};
  transition: ${(props) => props.theme.animation.main};

  &:hover {
    letter-spacing: 2px;
    border-left: 3px solid ${(props) => props.theme.colors.hover};
    background-color: transparent;
    color: ${(props) => props.theme.colors.hover};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: ${(props) => props.theme.space[1]}px;
    fill: currentColor;
  }
`;

export const PosterWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;
