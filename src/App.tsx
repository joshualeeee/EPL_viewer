import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import StandingGrid from "./components/StandingGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" textAlign="left">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" textAlign="left">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" textAlign="left">
        <StandingGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
