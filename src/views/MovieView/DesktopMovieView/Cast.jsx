import Container from "../../../components/Container";
import noImageFound from "../../../styles/images/noimage.jpg";
import s from "./DesktopMovieView.module.scss";

export default function Cast({ cast }) {
  return (
    <Container>
      <ul className={s.castList}>
        {cast.slice(0, 10).map(({ id, name, character, profile_path }) => (
          <li className={s.castItem} key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt="actor"
              />
            ) : (
              <img className={s.img} src={`${noImageFound}`} alt={name} />
            )}

            <div className={s.castItemInfo}>
              {name && <p className={s.castItemName}>{name}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
