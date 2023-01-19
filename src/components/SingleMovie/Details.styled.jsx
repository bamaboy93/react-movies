import styled from "@emotion/styled";

export const DetailsWrapper = styled.div`
  max-width: 500px;
`;

export const Overview = styled.p`
  max-width: 530px;
  font-size: 18px;
  line-height: 1.5em;
  margin-bottom: 20px;
`;

export const Cast = styled.div`
  max-width: 500px;
`;

export const Subtitle = styled.h3`
  margin-top: 0;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.mainText}; ;
`;

export const CastList = styled.ul``;

export const CastListItem = styled.li`
  color: ${(props) => props.theme.colors.red};
  display: inline-block;
  :not(:last-child)::after {
    content: ",";
    margin-right: 5px;
  }
`;
