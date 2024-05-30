import GameMenu from "./GameMenu";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <GameMenu />
      <div>Home</div>
      <Button colorScheme="blue">Submit</Button>
    </>
  );
};

export default Home;
