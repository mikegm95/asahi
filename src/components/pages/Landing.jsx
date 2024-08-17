import { Container } from "@mui/material";
import TabsCollection from "../molecules/TabsCollection";

const ELEMENTS = [
  {
    label: "Test1",
  },
  {
    label: "Test2",
  },
  {
    label: "Test3",
  },
];

function Landing() {
  return (
    <Container maxWidth="xl">
      <h1>This is the landing page!</h1>
      <TabsCollection tabElements={ELEMENTS} />
    </Container>
  );
}

export default Landing;
