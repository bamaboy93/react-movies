import Container from "../../components/Container";
import s from "./UserList.module.scss";
export default function UserList() {
  return (
    <Container>
      <div>
        <h2 className={s.title}>Watchlist</h2>
      </div>
      <div>
        <h2 className={s.title}>Favourites</h2>
      </div>
    </Container>
  );
}
