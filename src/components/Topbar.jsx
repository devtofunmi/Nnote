import { Avatar, Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import AddNewNote from "./AddNewNote";

const Topbar = () => {
  return (
    <Flex justify={"space-between"} px={3} py={2} bg={"#181819"}>
      <Input
        w={"50%"}
        bg={"#202225"}
        placeholder={"Search..."}
        _placeholder={{
          color: "#afb1b3",
        }}
      />
      <Box>
        <AddNewNote />
      </Box>
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
