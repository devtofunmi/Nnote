import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/SideBar";
import Topbar from "../components/Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <Flex>
      <Box w={"15%"}>
        <SideBar />
      </Box>
      <Box w={"85%"}>
        <Topbar />
        <Flex>{children}</Flex>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
