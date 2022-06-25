import Container from "../../components/Container/Container";
import { ReactComponent as Error404 } from "../../styles/icons/404.svg";

import s from "./NotFoundView.module.scss";

export default function NotFound() {
  return (
    <Container>
      <div className={s.wrapper}>
        <Error404 />
      </div>
    </Container>
  );
}
