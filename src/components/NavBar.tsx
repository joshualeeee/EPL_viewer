import { HStack, Image } from "@chakra-ui/react";
import prem_logo from "../assets/prem_logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={prem_logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
