import styled from "@emotion/styled";

export const CastList = styled.ul`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
`;

export const CastListItem = styled.li`
  position: relative;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; ;
`;

export const CastInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(49, 50, 60, 0.647);
`;

export const CastName = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
