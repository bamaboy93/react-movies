import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import getColor from "../../services/getColor";

export const Section = styled.section`
  padding: 80px 0;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  padding-top: 50px;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.backdrop})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (min-width: 768px) {
    height: 500px;
  }

  @media screen and (min-width: 1280px) {
    height: 650px;
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
    opacity: 0.5;
  }
`;

export const MovieWrapper = styled.div`
  position: relative;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const InfoWrapper = styled.div``;

export const MovieTitle = styled.h2`
  display: inline-block;
  max-width: 320px;
  margin-bottom: 60px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  @media screen and (min-width: 768px) {
    max-width: 400px;
    font-size: 42px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 650px;
    font-size: 56px;
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
  margin-bottom: 30px;
`;

export const Option = styled.p`
  margin-right: 20px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: 700;
  font-size: 18px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Rating = styled.p`
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: 700;
  font-size: 18px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  color: ${(props) => getColor(props.vote)};

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Overview = styled.p`
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const LinkWatch = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 30px;
  padding: 10px 15px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.red};
  transition: ${(props) => props.theme.transition.main};

  &:hover {
    letter-spacing: 2px;
    border-left: 3px solid ${(props) => props.theme.colors.hover};
    background-color: transparent;
    color: ${(props) => props.theme.colors.hover};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    fill: currentColor;
  }
`;

export const PosterWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;
