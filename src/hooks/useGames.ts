import { GameQuery } from "../components/Home";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery | null) => useData<Game>(
  "/games",
  {
    params:
    {
      genres: gameQuery?.genre?.id,
      platforms: gameQuery?.platform?.id,
      ordering: gameQuery?.sortOrder,
      search: gameQuery?.searchText
    }
  },
  [gameQuery]
);

export default useGames;
