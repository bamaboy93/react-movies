import styled from "@emotion/styled";

export const MovieScreen = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 90px 70px 70px 90px;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.backdrop})`};
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  z-index: 1;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: linear-gradient(90deg, rgba(#000, 0.8) 20%, transparent 80%);
    z-index: -1;
    transition: 0.2s;
  }
  &:after {
    background: rgba(#000, 0.7);
    opacity: 0;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  transition: 0.3s;
`;

export const Title = styled.h1`
  max-width: 500px;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.1em;
  transition: 0.3s;
  text-shadow: $title-text-shadow;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Year = styled.p`
  font-family: ${(props) => props.theme.fonts.numbers};
  margin-right: 20px;
`;

export const Genre = styled.p`
  margin-right: 20px;
  font-weight: 700;
`;

export const Runtime = styled.p`
  color: ${(props) => props.theme.colors.addText};
  font-family: ${(props) => props.theme.fonts.numbers};
  font-size: 20px;
  font-weight: 400;
  line-height: 1em;
  border: 1px solid ${(props) => props.theme.colors.addText};
  padding: 5px;
  border-radius: 5px;
  margin-right: 20px;
`;

export const Rating = styled.p`
  display: flex;
  font-family: ${(props) => props.theme.fonts.numbers};
  font-weight: 700;
  font-size: 24px;
`;
export const RatingFull = styled.span`
  font-weight: 400;
  font-size: 16px;
  align-items: flex-start;
  margin-left: 5px;
`;

export const FadeBlock = styled.div`
  position: relative;
  margin-bottom: 30px;
  transition: 0.3s;
`;

export const NavigationWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const NavigationItem = styled.button`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4em;

  cursor: pointer;
  &:not(:last-child) {
    margin-right: 45px;
  }
`;
