import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import AddNote from "./AddNote";

const SideBar = () => {
  return (
    <Flex
      flexDirection={"column"}
      bg={"purple.400"}
      w={"100%"}
      minH={"100vh"}
      px={4}
    >
      <Text>Nnote</Text>
      <AddNote />
      <Link to={"/dashboard"}>
        <Text my={2}>Overview</Text>
      </Link>
      <Link to={"/dashboard/favorite"}>
        <Text my={2}>Favourite</Text>
      </Link>
      <Link to={"/"}>
        <Text my={2}>Calender</Text>
      </Link>
    </Flex>
  );
};

export default SideBar;
