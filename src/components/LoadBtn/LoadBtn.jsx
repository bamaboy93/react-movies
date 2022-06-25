import s from "./LoadBtn.module.scss";

export default function LoadBtn({ onBtnClick }) {
  return (
    <button onClick={onBtnClick} className={s.button} type="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Load More
    </button>
  );
}
