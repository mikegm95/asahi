import TabsCollection from "../molecules/TabsCollection";
import TabPanel from "../molecules/TabPanel";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  CardContent,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import { getDeals, getStores } from "../../utils/services/toppage.service";
import { getDateTodayYMD, getCustomScrollbar } from "../../utils/helper";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: 2,
  marginRight: 4,
}));

const ELEMENTS = [
  {
    label: "Deals",
  },
  {
    label: "Giveaways",
  },
];

const CHEAP_SHARK_API = import.meta.env.VITE_CHEAP_SHARK_API;

function Landing() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [gameDeals, setGameDeals] = useState([]);
  const [stores, setStores] = useState([]);
  const [currentSortOrder, setCurrentSortOrder] = useState("asc");
  const [currentSortColumn, setCurrentSortColumn] = useState("title");
  const navigate = useNavigate();

  const handleChangeSelectedTab = (event, newEvent) => {
    setSelectedTab(newEvent);
  };

  useEffect(() => {
    handleGetDeals();
  }, []);

  useEffect(() => {
    switch (currentSortColumn) {
      case "title":
        if (currentSortOrder == "asc") {
          gameDeals.sort((a, b) => a.title.localeCompare(b.title));
        } else {
          gameDeals.sort((a, b) => b.title.localeCompare(a.title));
        }
        break;
      case "savings":
        gameDeals.sort((a, b) => a.savings - b.savings);
        break;
      case "price":
        gameDeals.sort((a, b) => a.salePrice - b.salePrice);
        break;
    }
  }, [currentSortColumn, currentSortOrder]);

  const handleGetDeals = () => {
    if (
      localStorage.getItem("deals") === null ||
      localStorage.getItem("fetchDate") != getDateTodayYMD()
    ) {
      setGameDeals(JSON.parse(handleFetchData()));
    } else {
      setGameDeals(JSON.parse(localStorage.getItem("deals")));
    }

    if (localStorage.getItem("stores") === null) {
      setStores(JSON.parse(handleFetchStores()));
    } else {
      setStores(JSON.parse(localStorage.getItem("stores")));
    }
  };

  const handleFetchData = async () => {
    const data = await getDeals(`${CHEAP_SHARK_API}/deals`);
    return data;
  };

  const handleFetchStores = async () => {
    const data = await getStores(`${CHEAP_SHARK_API}/stores`);
    return data;
  };

  const handleChangeCurrentSortColumn = (e) => {
    const value = e.target.innerText.toLowerCase();
    setCurrentSortColumn(value);
  };

  const handleChangeCurrentSortOrder = (e) => {
    const value = e.target.innerText.toLowerCase();
    setCurrentSortOrder(value);
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
            sx={{ backgroundColor: "primary.dark", borderRadius: 5 }}
          >
            <TabPanel value={selectedTab} index={0}>
              <Grid container spacing={2}>
                <Grid item container spacing={2} display={"none"}>
                  <Grid item xs={12} sm={8}>
                    <StyledChip
                      label="Title"
                      component={Button}
                      onClick={handleChangeCurrentSortColumn}
                      sx={{
                        backgroundColor:
                          currentSortColumn == "title"
                            ? "#FF0000 !important"
                            : "#FFFFFF !important",
                      }}
                    />
                    <StyledChip
                      label="Savings"
                      component={Button}
                      onClick={handleChangeCurrentSortColumn}
                      sx={{
                        backgroundColor:
                          currentSortColumn == "savings"
                            ? "#FF0000 !important"
                            : "#FFFFFF !important",
                      }}
                    />
                    <StyledChip
                      label="Price"
                      component={Button}
                      onClick={handleChangeCurrentSortColumn}
                      sx={{
                        backgroundColor:
                          currentSortColumn == "price"
                            ? "#FF0000 !important"
                            : "#FFFFFF !important",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <StyledChip
                      label="Asc"
                      component={Button}
                      onClick={handleChangeCurrentSortOrder}
                      sx={{
                        backgroundColor:
                          currentSortOrder == "asc"
                            ? "#FF0000 !important"
                            : "#FFFFFF !important",
                      }}
                    />
                    <StyledChip
                      label="Desc"
                      component={Button}
                      onClick={handleChangeCurrentSortOrder}
                      sx={{
                        backgroundColor:
                          currentSortOrder == "desc"
                            ? "#FF0000 !important"
                            : "#FFFFFF !important",
                      }}
                    />
                  </Grid>
                </Grid>
                {gameDeals?.map((deal, index) => {
                  let storeInfo = stores.find(
                    (store) =>
                      parseInt(store?.storeID) == parseInt(deal?.storeID)
                  );

                  let lastChange = new Date(deal?.lastChange * 1000);
                  lastChange = `${lastChange.getFullYear()}-${String(
                    lastChange.getMonth() + 1
                  ).padStart(2, "0")}-${String(lastChange.getDate()).padStart(
                    2,
                    "0"
                  )}`;

                  return (
                    <Grid item xs={12} sm={3} key={index}>
                      <Card
                        sx={{ height: 300 }}
                        onClick={() =>
                          navigate(`/game/details/${deal?.dealID}`)
                        }
                      >
                        <CardActionArea>
                          <CardMedia
                            height={140}
                            component="img"
                            src={deal.thumb}
                          />
                          <CardContent
                            sx={{
                              height: 150,
                              ...getCustomScrollbar,
                            }}
                          >
                            <Stack direction="column">
                              <Typography variant="bold16">
                                {deal.title}
                              </Typography>
                              <Typography variant="bold16">
                                Sale Price:{" "}
                                <span style={{ color: "#4caf50" }}>
                                  {`$${deal.salePrice}`}
                                </span>
                              </Typography>
                              <Typography gutterBottom variant="bold16">
                                Regular Price:{" "}
                                <span
                                  style={{
                                    textDecoration: "line-through",
                                    color: "#ff0000",
                                  }}
                                >
                                  {`$${deal.normalPrice}`}
                                </span>
                                <Chip
                                  label={`${parseFloat(deal.savings).toFixed(
                                    0
                                  )}% OFF`}
                                  sx={{
                                    position: "absolute",
                                    right: 2,
                                    top: 4,
                                  }}
                                  color="success"
                                />
                              </Typography>
                              <img
                                src={`https://www.cheapshark.com/${storeInfo?.images?.icon}`}
                                width={20}
                                height={20}
                                style={{
                                  position: "absolute",
                                  left: 2,
                                  top: 4,
                                }}
                              />
                            </Stack>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              Stores
            </TabPanel>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Landing;
