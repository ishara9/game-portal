import { HStack, Icon } from "@chakra-ui/react";

import { IconType } from "react-icons";

import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa"; //font awesome

import { BsGlobe } from "react-icons/bs"; //bootstrap
import { MdPhoneIphone } from "react-icons/md"; //material design
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/usePlatform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //defininig a index signature
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  //chakra default margin values are abour 4px multipliers
  return (
    <HStack margin={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500">
          {platform.name}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
