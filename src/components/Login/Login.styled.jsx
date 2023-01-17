import styled from "@emotion/styled";

export const Button = styled.button`
  width: 42px;
  height: 42px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.buttonBg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.mainText};
  transition: filter 250ms ${(props) => props.theme.transition.cubic};

  &:hover {
    filter: brightness(1.3);
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.hoverColor};
  }

  svg {
    width: 21px;
    height: 21px;
    transition: ${(props) => props.theme.transition.color};
  }
`;
