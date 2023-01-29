import styled from "@emotion/styled";

export const Button = styled.button`
  width: 48px;
  height: 48px;
  margin-left: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: rgba(41, 41, 41, 0.76);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  transition: filter 500ms ${(props) => props.theme.animation.cubic};

  &:hover {
    filter: brightness(1.3);
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.hover};
  }

  svg {
    transition: color 500ms ${(props) => props.theme.animation.cubic};
  }
`;
