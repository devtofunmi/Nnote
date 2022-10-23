import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Topbar from "../components/Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <Flex color={"white"}>
      <Box w="20%" position={"fixed"} left={0}>
        <SideBar />
      </Box>
      <Box w={"100%"} ml={"20%"}>
        <Topbar />
        <Flex bg={"#202225"} minH={"100vh"}>
          {children}
        </Flex>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
