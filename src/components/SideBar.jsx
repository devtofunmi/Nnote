import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import AddNote from "./AddNote";

const SideBar = () => {
  return (
    <Flex
      flexDirection={"column"}
      bg={"#181819"}
      w={"100%"}
      minH={"100vh"}
      px={4}
      pt={"30px"}
    >
      <Text fontSize={"30px"}>Nnote</Text>
      {/* <AddNote /> */}
      <Link to={"/dashboard"} mt={"20px"}>
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
