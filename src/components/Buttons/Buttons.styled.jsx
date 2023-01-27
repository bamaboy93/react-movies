import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  }
`;

export const ButtonTrailer = styled.button`
  width: max-content;
  max-width: 100%;
  font-size: 18px;
  font-weight: 700;
  padding: 9px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #c63636;
  border-radius: 5%;
  display: flex;
  align-items: center;
  transition: filter 250ms;
  color: ${(props) => props.theme.colors.white};
  margin-right: 15px;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const ButtonFav = styled.button`
  width: 38px;
  height: 38px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #484a4d;
  border-radius: 5%;
  display: flex;
  align-items: center;

  transition: filter 300ms;
  color: ${(props) => props.theme.colors.red};

  &:hover {
    filter: brightness(1.2);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
