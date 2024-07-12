import {
  VStack,
  Text,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedURL from "./util/ImageURL";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

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
            <Text fontSize="lg" key={genre.id}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
