import styled from "@emotion/styled";

export const Button = styled.button`
  position: absolute;
  z-index: 44;
  top: 50%;
  right: 25%;
  transform: translate(-50%, -50%);
  border: none;
  outline: transparent;
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;

    svg {
      scale: 1.4;
    }
  }

  svg {
    width: 150px;
    height: 150px;
    fill: currentColor;
    transition: scale 250ms ease;
  }
`;
