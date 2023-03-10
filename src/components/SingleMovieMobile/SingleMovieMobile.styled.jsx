import styled from "@emotion/styled";
import getColor from "../../services/getColor";

export const PageWrapper = styled.div`
  padding-bottom: ${(props) => props.theme.space[8]}px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.space[5]}px;
`;

export const NavigationWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: ${(props) => props.theme.space[5]}px;
  display: flex;
  justify-content: center;
`;

export const PosterWrapper = styled.div`
  position: relative;
  margin-right: ${(props) => props.theme.space[4]}px;
`;

export const Poster = styled.img`
  min-width: 180px;
  border-radius: 4px;
  object-fit: contain;
`;

export const Rating = styled.p`
  position: absolute;
  right: 15px;
  top: 10px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => getColor(props.vote)};
`;

export const InfoWrapper = styled.div``;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[5]}px;
  text-align: left;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  line-height: ${(props) => props.theme.lineHeights.heading};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Year = styled.p`
  margin-top: ${(props) => props.theme.space[6]}px;
  margin-bottom: ${(props) => props.theme.space[2]}px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => props.theme.colors.red};
`;

export const Subtitle = styled.h3`
  margin-bottom: 5px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
`;

export const Genres = styled.ul`
  margin-bottom: ${(props) => props.theme.space[3]}px;
`;

export const Genre = styled.li`
  display: inline-block;
  color: ${(props) => props.theme.colors.red};
 
  :not(:last-child)::after {
  content: ",";
  margin-right: ${(props) => props.theme.space[1]}px;
`;

export const Runtime = styled.p`
  display: inline-block;
  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fonts.numbers};

  border: 1px solid ${(props) => props.theme.colors.red};
  padding: ${(props) => props.theme.space[1]}px;
  border-radius: 5px;
  margin-right: ${(props) => props.theme.space[4]}px;
`;

export const Overview = styled.p`
  margin-bottom: ${(props) => props.theme.space[5]}px;
  text-align: left;

  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;
