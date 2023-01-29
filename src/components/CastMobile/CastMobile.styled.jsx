import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

import { styled as muiStyled } from "@mui/material/styles";

export const Item = muiStyled(Paper)(({ theme }) => ({
  backgroundColor: "#191919",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.colors.white,
}));

export const DropdownTitle = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.black};
`;

export const Image = styled.img``;

export const ActorName = styled.p`
  padding: ${(props) => props.theme.space[1]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xxs};
`;
