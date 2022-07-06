import s from "./UpButton.module.scss";
import { FiChevronsUp } from "react-icons/fi";

export default function UpButton() {
  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={goUp} type="button" className={s.button}>
      <FiChevronsUp />
    </button>
  );
}
