import { useNavigate } from "react-router-dom";

import s from "./DesktopMovieView.module.scss";

export default function BackLink() {
  const navigate = useNavigate();

  return (
    <button className={s.link} type="button" onClick={() => navigate(-1)}>
      <svg
        className={s.arrow}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g
          stroke="#2175FF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          <circle
            className={s.circle}
            cx="16"
            cy="16"
            r="15.12"
            fill="none"
          ></circle>
          <path
            className={s.iconArrow}
            d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
          ></path>
        </g>
      </svg>
    </button>
  );
}
