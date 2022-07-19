import s from "./DMV.module.scss";

export default function Navigation({ onChange }) {
  const nav = ["Overview", "Details"];

  return (
    <div className={s.nav}>
      {nav.map((tabName) => (
        <div
          key={tabName}
          onClick={() => onChange(tabName)}
          className={s.navItem}
        >
          {tabName}
        </div>
      ))}
    </div>
  );
}
