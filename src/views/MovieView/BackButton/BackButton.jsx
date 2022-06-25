import { useNavigate } from "react-router-dom";
import s from "./BackButton.module.scss";

export default function BackButton() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} type="button" className={s.button}>
      &#171;
    </button>
  );
}
