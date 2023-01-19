import { NavigationWrapper, NavigationItem } from "./Navigation.styled";

export default function Navigation({ onChange, tab }) {
  const nav = ["Overview", "Details"];

  function color(tabName) {
    if (tabName === tab) {
      return "#bf000a";
    }
  }

  return (
    <NavigationWrapper>
      {nav.map((tabName) => (
        <NavigationItem
          key={tabName}
          onClick={() => onChange(tabName)}
          style={{ color: color(tabName) }}
        >
          {tabName}
        </NavigationItem>
      ))}
    </NavigationWrapper>
  );
}
