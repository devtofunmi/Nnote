import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Topbar from "../components/Topbar";
import useWindowDimensions from "../hooks/useWindowsDimensions";

const DashboardLayout = ({ children }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // Define your mobile breakpoint

  return (
    <Flex color={"white"}>
      <Box w={isMobile ? "0" : "20%"} position={isMobile ? "relative" : "fixed"} left={0}>
        <SideBar />
      </Box>
      <Box w={"100%"} ml={isMobile ? "0" : "20%"}>
        <Topbar />
        <Flex bg={"#202225"} minH={"100vh"}>
          {children}
        </Flex>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
