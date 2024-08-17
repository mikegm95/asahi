import { forwardRef } from "react";
import { Grid, Tab, Tabs } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsCollection = forwardRef(function TabsCollection(props, ref) {
  const { tabElements } = props;

  return (
    <Grid container>
      <Tabs>
        {tabElements.map((item, index) => (
          <Tab label={item?.label} {...a11yProps(index)} key={index} />
        ))}
      </Tabs>
    </Grid>
  );
});

export default TabsCollection;
