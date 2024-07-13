import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item2</MenuItem>
        <MenuItem>Item3</MenuItem>
        <MenuItem>Item4</MenuItem>
        <MenuItem>Item5</MenuItem>
        <MenuItem>Item6</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
