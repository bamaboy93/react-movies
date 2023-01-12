import s from "./DesktopMovieView.module.scss";

export default function Navigation({ onChange, tab }) {
  const nav = ["Overview", "Details"];

  function color(tabName) {
    if (tabName === tab) {
      return "#bf000a";
    }
  }

  return (
    <div className={s.nav}>
      {nav.map((tabName) => (
        <div
          key={tabName}
          onClick={() => onChange(tabName)}
          className={s.navItem}
          style={{ color: color(tabName) }}
        >
          {tabName}
        </div>
      ))}
    </div>
  );
}
