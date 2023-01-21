import styled from "@emotion/styled";
import getColor from "../../services/getColor";

export const PageWrapper = styled.div`
  padding-bottom: 50px;
`;

export const MovieWrapper = styled.div`
  display: flex;

  margin-bottom: 30px;
`;

export const PosterWrapper = styled.div`
  position: relative;
  margin-right: 20px;
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
  font-weight: 700;
  font-size: 22px;
  color: ${(props) => getColor(props.vote)};
`;

export const InfoWrapper = styled.div``;

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Year = styled.p`
  margin-bottom: 12px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.colors.red};
`;

export const Subtitle = styled.h3`
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 18px;
`;

export const Genres = styled.ul`
  margin-bottom: 16px;
`;

export const Genre = styled.li`
  display: inline-block;
  color: ${(props) => props.theme.colors.red};
  :not(:last-child)::after {
  content: ",";
  margin-right: 5px;
`;

export const Runtime = styled.p`
  display: inline-block;
  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fonts.numbers};
  font-size: 18px;
  line-height: 1em;
  border: 1px solid ${(props) => props.theme.colors.red};
  padding: 5px;
  border-radius: 5px;
  margin-right: 20px;
`;

export const Overview = styled.p`
  margin-bottom: 30px;
  text-align: left;
  font-size: 18px;
  line-height: 1.2;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;
