import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/SideBar";
const DashBoard = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} p={"30px"} alignItems={"center"}>
        <SideBar />
        <Text
          fontSize={["20px", "50px"]}
          w={"extra-bold"}
          fontFamily={"sans-serif"}
        >
          My Notes
        </Text>
        <Box>
          <Input
            variant="outline"
            placeholder="search"
            _placeholder={{ opacity: 1, color: "black" }}
            bgColor={"gray.100"}
            color={"black"}
          />
        </Box>
      </Flex>
    </>
  );
};

export default DashBoard;
