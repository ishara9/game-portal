import GameMenu from "./GameMenu";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import ColorModeSwitch from "./ColorModeSwitch";
import Form from "./form/Form";

const Home = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            {/* <GridItem area="aside" bg="gold"> */}
            Aside
          </GridItem>
        </Show>
        <GridItem area="main">
          {/* <GridItem area="main" bg="dodgerblue"> */}

          <GameGrid />
        </GridItem>
      </Grid>
      <GameMenu />
      <div>Home</div>
      {/* <Form /> */}
      {/* <Button colorScheme="blue">Submit</Button> */}
    </>
  );
};

export default Home;
