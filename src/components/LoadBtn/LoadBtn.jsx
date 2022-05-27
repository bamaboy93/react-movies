import s from "./LoadBtn.module.scss";

export default function LoadBtn() {
  return (
    <button className={s.btn} type="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Load More
    </button>
  );
}
