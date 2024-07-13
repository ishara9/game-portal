import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import { useEffect, useState } from "react";

interface Props {
  slectedPlatform: Platform | null;
  onPlatformSelect(platform: Platform): void;
}
const PlatformSelector = ({ slectedPlatform, onPlatformSelect }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;

  const platformText = slectedPlatform ? slectedPlatform?.name : "Platform";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformText}
      </MenuButton>
      <MenuList>
        {data.map((platform) => {
          return (
            <MenuItem
              onClick={() => onPlatformSelect(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
