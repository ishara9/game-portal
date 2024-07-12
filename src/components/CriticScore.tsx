import { Badge, Text } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 45 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      <Text>{score}</Text>
    </Badge>
  );
};

export default CriticScore;
