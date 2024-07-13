import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  useEffect(() => {
    toggleColorMode();
  }, []);
  return (
    <HStack>
      <Switch
        defaultChecked={true}
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text paddingRight={2} whiteSpace="nowrap">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
