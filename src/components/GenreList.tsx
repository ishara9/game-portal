import {
  VStack,
  Text,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedURL from "./util/ImageURL";

interface Props {
  onSelectGenre(genre: Genre): void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  const handleClick = (genre: Genre) => {
    console.log(genre.name);
    onSelectGenre(genre);
  };

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedURL(genre.image_background)}
            />
            <Button
              onClick={() => handleClick(genre)}
              variant="link"
              fontSize="lg"
              key={genre.id}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
