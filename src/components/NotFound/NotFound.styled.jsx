import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import error from "../../styles/images/error404.png";

export const ErrorWrapper = styled.div`
  width: 275px;
  background-image: url(${error});
  background-repeat: no-repeat !important;
  background-size: cover !important;

  @media (min-width: 768px) {
    width: 550px;
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  padding: 9px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #c63636;
  border-radius: 5%;
  transition: filter 250ms;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    filter: brightness(1.2);
  }
`;
