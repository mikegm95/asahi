import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameDeal } from "../../utils/services/deals.service";

const CHEAP_SHARK_API = import.meta.env.VITE_CHEAP_SHARK_API;

function GameDetails() {
  const { dealId } = useParams();
  const [gameDetails, setGameDetails] = useState({});

  useEffect(() => {
    handleFetchData();
  }, [dealId]);

  const handleFetchData = async () => {
    const data = await getGameDeal(
      `${CHEAP_SHARK_API}deals?id=${encodeURIComponent(dealId)}`
    );
    console.log(data);
    setGameDetails(data);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        This is just a test
      </Grid>
    </Grid>
  );
}

export default GameDetails;
