import { SimpleGrid, Text } from "@chakra-ui/react";
import useStandings from "../hooks/useStandings";
import StandingCard from "./StandingCard";

const StandingGrid = () => {
  const { standings, error } = useStandings();

  return (
    <>
      {error ? <Text>error</Text> : ""}
      <SimpleGrid columns={3} spacing={10}>
        {standings.map((standing) => (
          <StandingCard key={standing.Team} standing={standing} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default StandingGrid;
