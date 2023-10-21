import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[5]}px;
  }
`;

export const ButtonTrailer = styled.button`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 5%;
  display: flex;
  align-items: center;
  transition: filter 250ms;
  color: ${(props) => props.theme.colors.white};
  margin-right: ${(props) => props.theme.space[3]}px;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const ButtonFav = styled.button`
  height: 38px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: rgba(49, 50, 60, 0.55);
  border-radius: 5%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.red};
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.2);
  }
`;