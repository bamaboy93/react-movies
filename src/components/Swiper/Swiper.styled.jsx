import styled from "@emotion/styled/macro";
import getColor from "../../services/getColor";

export const Overlay = styled.div`
  position: absolute;
  z-index: 33;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 500ms ease-in;
  :before {
    position: absolute;
    left: 0;
    display: inline-block;
    content: " ";
    width: 4px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.red};
  }
`;

export const MovieTitleOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  min-height: 60px;
  bottom: 0;
  opacity: 1;
  background-color: rgba(49, 50, 60, 0.647);
  cursor: pointer;

  transition: opacity 500ms ease-in;
`;

export const Slide = styled.div`
  position: relative;

  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: all 500ms ease-in;

  &:hover,
  &:focus {
    transform: scale3d(1.05, 1.05, 1) translate3d(0, 0, 0) perspective(31.25em);
    transform-origin: 50% 50%;
  }

  &:hover ${MovieTitleOverlay}, &:focus ${MovieTitleOverlay} {
    opacity: 0;
  }
  &:hover ${Overlay}, &:focus ${Overlay} {
    opacity: 1;
  }
`;

export const OverlayVote = styled.p`
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => getColor(props.vote)};
`;

export const Image = styled.img`
  width: 100%;
`;

export const OverlayTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const MovieTitle = styled.p`
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;
