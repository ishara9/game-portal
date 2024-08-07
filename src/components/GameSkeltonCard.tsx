import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameSkeltonCard = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameSkeltonCard;
