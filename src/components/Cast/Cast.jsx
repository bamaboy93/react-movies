import Container from "../../components/Container";
import noImageFound from "../../styles/images/noimage.jpg";
import { CastInfo, CastList, CastListItem, CastName } from "./Cast.styled";

export default function Cast({ cast }) {
  return (
    <Container>
      {cast && (
        <CastList>
          {cast.slice(0, 10).map(({ id, name, profile_path }) => (
            <CastListItem key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt="actor"
                />
              ) : (
                <img src={`${noImageFound}`} alt={name} />
              )}

              <CastInfo>{name && <CastName>{name}</CastName>}</CastInfo>
            </CastListItem>
          ))}
        </CastList>
      )}
    </Container>
  );
}
