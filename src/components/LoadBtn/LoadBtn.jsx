import s from "./LoadBtn.module.scss";

export default function LoadBtn({ onClick }) {
  return (
    <button onClick={onClick} className={s.button} type="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Load More
    </button>
  );
}
