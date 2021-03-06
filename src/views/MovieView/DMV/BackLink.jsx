import s from "./DMV.module.scss";

export default function BackLink() {
  return (
    <a className={s.link} href="/">
      <svg
        className={s.arrow}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <g
          stroke="#2175FF"
          stroke-width="1.5"
          stroke-linejoin="round"
          stroke-miterlimit="10"
        >
          <circle className={s.circle} cx="16" cy="16" r="15.12"></circle>
          <path
            className={s.iconArrow}
            d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
          ></path>
        </g>
      </svg>
    </a>
  );
}
