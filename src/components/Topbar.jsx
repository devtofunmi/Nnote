import { Avatar, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const Topbar = () => {
  return (
    <Flex justify={"space-between"} px={3} py={2} bg={"purple.100"}>
      <Input
        w={"50%"}
        bg={"#fff"}
        placeholder={"Search..."}
        _placeholder={{
          color: "#000",
        }}
      />
      <Flex
        align={"center"}
        gap={3}
        bg={"purple.200"}
        px={3}
        borderRadius={"md"}
        cursor={"pointer"}
      >
        <Text>Tofunmi</Text>
        <Avatar size={"sm"} />
      </Flex>
    </Flex>
  );
};

export default Topbar;
