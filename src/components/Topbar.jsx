import { Avatar, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useWindowDimensions from "../hooks/useWindowsDimensions";

const Topbar = () => {
  const { width } = useWindowDimensions();

  return (
    <Flex justify={"space-between"} px={3} py={2} bg={"#181819"}>
      <Text>Welcome </Text>
      {/* <Input
        w={["70%", "50%"]}
        bg={"#202225"}
        placeholder={"Search..."}
        _placeholder={{
          color: "#afb1b3",
        }}
        onChange={(e) => {
          searchBar(e.target.value);
        }}
      /> */}

      <Flex
        align={"center"}
        gap={3}
        bg={"#202225"}
        px={3}
        borderRadius={"md"}
        cursor={"pointer"}
        color={"#afb1b3"}
      >
        <Text>Tofunmi</Text>
        <Avatar size={"sm"} />
      </Flex>
    </Flex>
  );
};

export default Topbar;
