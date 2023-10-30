import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { TabsWrapper } from "./GenreTabs.styled";

export default function GenreTabs({ children, value, onChange, genres }) {
  return (
    <TabsWrapper>
      <TabContext value={String(value)}>
        <TabList
          variant="scrollable"
          onChange={onChange}
          aria-label="Genre Tabs"
        >
          {genres.map(({ name, id }) => (
            <Tab key={id} label={name} value={String(id)} />
          ))}
        </TabList>

        {genres &&
          genres.map(({ id }) => (
            <TabPanel key={id} value={String(id)}>
              {children}
            </TabPanel>
          ))}
      </TabContext>
    </TabsWrapper>
  );
}
