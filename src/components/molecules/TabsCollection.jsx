import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Tab, Tabs } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsCollection = forwardRef(function TabsCollection(props, ref) {
  const { tabElements, value = 0, handleChangeTab, ...others } = props;

  return (
    <Tabs
      value={value}
      onChange={handleChangeTab}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      {...others}
    >
      {tabElements.map((item, index) => (
        <Tab label={item?.label} {...a11yProps(index)} key={index} />
      ))}
    </Tabs>
  );
});

export default TabsCollection;

TabsCollection.propTypes = {
  tabElements: PropTypes.array,
  value: PropTypes.number,
  handleChangeTab: PropTypes.func,
};
