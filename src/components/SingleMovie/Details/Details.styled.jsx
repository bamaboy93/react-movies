import styled from "@emotion/styled";
import getColor from "../../../services/getColor";

export const DetailsButton = styled.button`
  margin-top: ${(props) => props.theme.space[5]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => props.theme.colors.red};
  text-transform: uppercase;
  border: transparent;
  outline: none;
  background-color: transparent;
  transition: ${(props) => props.theme.animation.main};

  &:hover {
    letter-spacing: 2px;
    border-left: 3px solid ${(props) => props.theme.colors.hover};
  }
`;

export const DetailsWrapper = styled.div`
  padding: ${(props) => props.theme.space[9]}px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.space[6]}px;
`;

export const PosterWrapper = styled.div`
  position: relative;
  margin-right: ${(props) => props.theme.space[9]}px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

export const Poster = styled.img`
  width: 400px;
  border-radius: 4px;
  object-fit: contain;
`;

export const Rating = styled.p`
  position: absolute;
  right: 15px;
  top: 10px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => getColor(props.vote)};
`;

export const InfoWrapper = styled.div``;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[4]}px;
  text-align: left;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.white};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Year = styled.p`
  margin-bottom: ${(props) => props.theme.space[2]}px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => props.theme.colors.red};
`;

export const Subtitle = styled.h3`
  margin-bottom: ${(props) => props.theme.space[1]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.white};
`;

export const Genres = styled.ul`
  margin-bottom: ${(props) => props.theme.space[3]}px;
`;

export const Genre = styled.li`
  display: inline-block;
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  :not(:last-child)::after {
  content: ",";
  margin-right: ${(props) => props.theme.space[1]}px;
`;

export const Runtime = styled.p`
  display: inline-block;
  margin-bottom: ${(props) => props.theme.space[3]}px;
  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};

  border: 1px solid ${(props) => props.theme.colors.red};
  padding: 5px;
  border-radius: 5px;
  margin-right: ${(props) => props.theme.space[4]}px;
`;

export const Overview = styled.p`
  width: 550px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.white};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
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
  color: ${(props) => props.theme.colors.red};
  &:not(:last-child)::after {
    content: ",";
    margin-right: ${(props) => props.theme.space[1]}px;
  }
`;

export const CastError = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
`;
