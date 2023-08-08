import React from "react";
import { standing } from "../hooks/useStandings";
import { Card, CardBody, Heading } from "@chakra-ui/react";

interface Props {
  standing: standing;
}

const StandingCard = ({ standing }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading>{standing.Team}</Heading>
      </CardBody>
    </Card>
  );
};

export default StandingCard;
