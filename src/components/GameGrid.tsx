import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameSkeltonCard from "./GameSkeltonCard";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeltons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameSkeltonCard />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {/* <ul>
        {games?.map((game) => (
          <li key={game.id}> {game.name} </li>
        ))}
      </ul> */}
    </>
  );
};

export default GameGrid;
