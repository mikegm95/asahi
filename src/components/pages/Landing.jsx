import TabsCollection from "../molecules/TabsCollection";
import TabPanel from "../molecules/TabPanel";
import { useState } from "react";
import { Card, Container, Grid } from "@mui/material";

const ELEMENTS = [
  {
    label: "Deals",
  },
  {
    label: "Giveaways",
  },
];

function Landing() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeSelectedTab = (event, newEvent) => {
    setSelectedTab(newEvent);
  };

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12}>
          <TabsCollection
            tabElements={ELEMENTS}
            handleChangeTab={handleChangeSelectedTab}
            value={selectedTab}
            sx={{
              width: 705,
              backgroundColor: "primary.dark",
              mt: 5,
              mx: "auto",
            }}
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <Card
            variant="outlined"
            width="100%"
            sx={{ backgroundColor: "primary.dark" }}
          >
            <TabPanel value={selectedTab} index={0}>
              Deals
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              Giveaways
            </TabPanel>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Landing;
