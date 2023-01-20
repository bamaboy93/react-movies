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
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
`;

export const ActorName = styled.p`
  padding: 10px;
  font-weight: 700;
  font-size: 12px;
`;
