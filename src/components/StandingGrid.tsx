import { Text } from "@chakra-ui/react";
import useStandings from "../hooks/useStandings";

const StandingGrid = () => {
  const { standings, error } = useStandings();

  return (
    <>
      {error ? <Text>error</Text> : ""}
      <ul>
        {standings.map((standing) => (
          <li key={standing.Team}>{standing.Team}</li>
        ))}
      </ul>
    </>
  );
};

export default StandingGrid;
