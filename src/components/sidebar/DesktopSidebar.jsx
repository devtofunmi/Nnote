import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const DesktopSidebar = () => {
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

      <Link to={"/dashboard/main"} mt={"20px"}>
        <Text my={2}>Note</Text>
      </Link>
      <Link to={"/task"} mt={"20px"}>
        <Text my={2}>Task</Text>
      </Link>
      <Link to={"/dashboard/favorite"}>
        <Text my={2}>Favourite</Text>
      </Link>
    </Flex>
  );
};

export default DesktopSidebar;
