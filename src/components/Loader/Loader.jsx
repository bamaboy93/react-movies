import CircleLoader from "react-spinners/CircleLoader";

import s from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={s.loaderContainer}>
      <CircleLoader color={"#9896f1"} size={100} />
    </div>
  );
}
