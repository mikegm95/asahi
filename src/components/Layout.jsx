import Header from "./molecules/Header.jsx";
import { Outlet } from "react-router-dom";
import { Grid, Container } from "@mui/material";

function Layout() {
  return (
    <Container maxWidth="false" sx={{ p: "0 !important", m: "0 !important" }}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
