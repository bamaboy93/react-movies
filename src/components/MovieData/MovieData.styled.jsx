import styled from "@emotion/styled";
import getColor from "../../services/getColor";

export const MoviesList = styled.ul`
  margin-top: ${(props) => props.theme.space[6]}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const MoviesListItem = styled.li`
  position: relative;
  cursor: pointer;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: all 250ms ease-in;
  img {
    object-fit: cover;
    object-position: top;
    height: 100%;
    width: 100%;
  }

  &:hover {
    transform: translateY(-8px);
  }
  &:hover .movieCard,
  &:focus .movieCard {
    opacity: 0;
  }
  &:hover .overlay,
  &:focus .overlay {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 33;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 250ms ease-in;
  &::before {
    position: absolute;
    left: 0;
    display: inline-block;
    content: " ";
    width: 4px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.red};
  }
`;

export const OverlayTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 24px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const OverlayVote = styled.div`
  position: absolute;
  z-index: 33;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  right: 10px;
  top: 10px;

  background-color: rgba(49, 50, 60, 0.412);
`;

export const Rating = styled.p`
  font-family: ${(props) => props.theme.fonts.numbers};
  font-size: 18px;
  color: ${(props) => getColor(props.vote)};
`;

export const MovieCard = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  bottom: 0;
  padding: 5px;

  background-color: rgba(49, 50, 60, 0.647);
  cursor: pointer;
  transition: opacity 250ms ease-in;
`;

export const MovieTitle = styled.p`
  color: ${(props) => props.theme.colors.mainText};
  text-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;
