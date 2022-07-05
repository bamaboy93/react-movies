import { useNavigate } from "react-router-dom";
import s from "./BackButton.module.scss";
import { FiChevronsLeft } from "react-icons/fi";

export default function BackButton() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} type="button" className={s.button}>
      <FiChevronsLeft />
    </button>
  );
}
