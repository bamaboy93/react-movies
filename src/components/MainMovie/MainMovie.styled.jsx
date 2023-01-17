import styled from "@emotion/styled";
import getColor from "../../services/getColor";

export const MainWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 120px;

  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.backdrop})`};
  background-repeat: no-repeat !important;
  background-size: cover !important;

  z-index: 1;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    background: linear-gradient(90deg, rgba(#000, 0.2) 20%, transparent 80%);
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    padding-top: 150px;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 20px;
  padding: 10px 10px 10px 15px;
  width: 260px;
  border-left: 5px solid ${(props) => props.theme.colors.red};
  background: transparent
    linear-gradient(270deg, rgba(11, 1, 2, 0) 0%, rgba(255, 55, 65, 0.3) 100%);
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const LogoLink = styled.a`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  color: ${(props) => props.theme.colors.red};
  @media screen and (min-width: $tablet) {
    font-size: 24px;
  }
`;

export const MovieWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InfoWrapper = styled.div``;

export const MainTitle = styled.h1`
  display: inline-block;
  max-width: 320px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 72px;
  line-height: 1;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);

  @media (min-width: 768px) {
    max-width: 450px;
    font-size: 56px;
  }
  @media (min-width: 1280px) {
    max-width: 650px;
    font-size: 72px;
  }
`;

export const Info = styled.div`
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

export const OptionsItem = styled.p`
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: 700;
  font-size: 18px;
  margin-right: 20px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Rating = styled.p`
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: 700;
  font-size: 18px;
  margin-right: 20px;
  color: ${(props) => getColor(props.vote)};
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Overview = styled.p`
  margin-bottom: 30px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Block = styled.div`
  max-width: 320px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 650px;
  }
`;

export const Subtitle = styled.h2`
  margin-right: 15px;
  color: ${(props) => props.theme.colors.red};
  font-size: 18px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
  }
`;

export const CastListItem = styled.li`
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  &:not(:last-child)::after {
    content: ",";
    margin-right: 5px;
  }
`;

export const LinkWrapper = styled.div``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin-right: 80px;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: ${(props) => props.transition.main};

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 0;
    font-size: 20px;
  }

  svg {
    width: 80px;
    height: 80px;
    margin-right: 40px;
    fill: currentColor;
    opacity: 0.5;
    transition: ${(props) => props.transition.main};
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.hoverColor}
    opacity: 0.8;
    scale: 1.5;
  }
`;
