import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import NavBar from "./NavBar";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";
import PlatformSelector from "./PlatformSelector";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            slectedPlatform={selectedPlatform}
            onPlatformSelect={(platorm) => setSelectedPlatform(platorm)}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
