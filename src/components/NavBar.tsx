import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo4.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import GameMenu from "./GameMenu";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <GameMenu />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
