import styled from "@emotion/styled";
import getColor from "../../../services/getColor";

export const Options = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[5]}px;
  background-color: rgba(49, 50, 60, 0.55);
  padding: 12px;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

export const Year = styled.p`
  margin-right: ${(props) => props.theme.space[4]}px;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.white};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Genre = styled.p`
  margin-right: ${(props) => props.theme.space[4]}px;
  ont-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => props.theme.colors.peach};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Runtime = styled.p`
  color: ${(props) => props.theme.colors.addText};
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.ms};
  color: ${(props) => props.theme.colors.lightviolet};
  border: 2px solid ${(props) => props.theme.colors.lightviolet};
  padding: 4px;
  border-radius: 5px;
  margin-right: ${(props) => props.theme.space[4]}px;
`;

export const Rating = styled.p`
  display: flex;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => getColor(props.vote)};
`;
export const RatingFull = styled.span`
  font-size: ${(props) => props.theme.fontSizes.s};
  align-items: flex-start;
  margin-left: ${(props) => props.theme.space[1]}px;
  color: ${(props) => props.theme.colors.white};
`;
