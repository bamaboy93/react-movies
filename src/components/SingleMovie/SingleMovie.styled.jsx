import styled from "@emotion/styled";
import getColor from "../../services/getColor";

export const MovieScreen = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 90px 70px 70px 90px;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.backdrop})`};
  background-repeat: no-repeat !important;
  background-size: cover !important;

  z-index: 1;
  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 60px 50px;
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
    transition: 0.2s;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  max-width: 500px;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.1em;

  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Year = styled.p`
  font-family: ${(props) => props.theme.fonts.numbers};
  margin-right: 20px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Genre = styled.p`
  margin-right: 20px;
  font-weight: 700;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Runtime = styled.p`
  color: ${(props) => props.theme.colors.addText};
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: 400;
  font-size: 20px;
  line-height: 1em;
  border: 1px solid ${(props) => props.theme.colors.addText};
  padding: 5px;
  border-radius: 5px;
  margin-right: 20px;
`;

export const Rating = styled.p`
  display: flex;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => getColor(props.vote)};
`;
export const RatingFull = styled.span`
  font-weight: 400;
  font-size: 16px;
  align-items: flex-start;
  margin-left: 5px;
  color: ${(props) => props.theme.colors.white};
`;

export const FadeBlock = styled.div`
  position: relative;
  margin-bottom: 30px;
  transition: 0.3s;
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
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4em;

  cursor: pointer;
  &:not(:last-child) {
    margin-right: 45px;
  }
`;
