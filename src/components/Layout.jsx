import Header from "./molecules/Header.jsx";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

function Layout() {
  return (
    <Container maxWidth="false" sx={{ p: "0 !important", m: "0 !important" }}>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
