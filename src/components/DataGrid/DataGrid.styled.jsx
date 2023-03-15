import styled from "@emotion/styled";

export const MoviesList = styled.ul`
  margin-top: ${(props) => props.theme.space[6]}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
