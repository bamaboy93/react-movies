import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import getColor from "../../services/getColor";

export const MainWrapper = styled.div`
  position: relative;
  min-height: 100svh;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.backdrop})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const LogoWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.space[4]}px;
  padding: 10px 10px 10px 15px;
  width: 260px;
  border-left: 5px solid ${(props) => props.theme.colors.red};
  background: transparent
    linear-gradient(270deg, rgba(11, 1, 2, 0) 0%, rgba(255, 55, 65, 0.3) 100%);
  @media (min-width: 768px) {
    margin-bottom: ${(props) => props.theme.space[5]}px;
  }
`;

export const LogoLink = styled.a`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  line-height: ${(props) => props.theme.lineHeights.heading};
  color: ${(props) => props.theme.colors.red};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.m};
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
  margin-bottom: 50px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.l};
  line-height: ${(props) => props.theme.lineHeights.heading};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);

  @media (min-width: 768px) {
    max-width: 450px;
    font-size: ${(props) => props.theme.fontSizes.lxl};
  }
  @media (min-width: 1280px) {
    max-width: 650px;
    font-size: ${(props) => props.theme.fontSizes.xxl};
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
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin-right: ${(props) => props.theme.space[4]}px;

  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;

export const Rating = styled.p`
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin-right: ${(props) => props.theme.space[4]}px;
  color: ${(props) => getColor(props.vote)};
  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;

export const Overview = styled.p`
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const OverviewBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),

  "& .MuiAccordion-root": {
    backgroundColor: "rgba(49, 50, 60, 0.55)",
    color: theme.palette.common.white,
  },
  "& .MuiAccordionSummary-root": {
    paddingLeft: theme.spacing(1),
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.secondary.main,
  },
}));

export const Block = styled.div``;

export const Subtitle = styled.h2`
  margin-right: ${(props) => props.theme.space[3]}px;
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes.ms};
`;

export const CastList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CastListItem = styled.li`
  display: inline-block;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  &:not(:last-child)::after {
    content: ",";
    margin-right: ${(props) => props.theme.space[1]}px;
  }
`;

export const CastError = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
`;

export const LinkWrapper = styled.div``;

export const WatchLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.theme.space[9]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 0;
    font-size: ${(props) => props.theme.fontSizes.ms};
  }

  svg {
    width: 80px;
    height: 80px;
    margin-right: ${(props) => props.theme.space[6]}px;
    opacity: 0.5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 60px;
      height: 60px;
      margin-right: ${(props) => props.theme.space[4]}px;
    }
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.hover}
    opacity: 1;
    scale: 1.5;
  }
`;

export const MobileWatchLink = styled(Link)`
  display: flex;
  align-items: center;

  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  text-transform: uppercase;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    display: none;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-right: ${(props) => props.theme.space[1]}px;
    fill: ${(props) => props.theme.colors.hover};

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg {
    scale: 1.2;
  }
`;
