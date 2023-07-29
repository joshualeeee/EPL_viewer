import { HStack, Image, Text } from "@chakra-ui/react";
import prem_logo from "../assets/prem_logo.webp";
import React from "react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={prem_logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
