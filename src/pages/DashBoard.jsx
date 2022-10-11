import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import DashboardLayout from "../layout/DashboardLayout";

const DashBoard = () => {
  return (
    // <Flex>
    //   <Box>
    //     <SideBar />
    //   </Box>
    //   <Flex
    //     // justifyContent={"center"}
    //     direction={"column"}
    //     // alignItems={"center"}
    //   >
    //     <Flex
    //       pt={"20px"}
    //       justifyContent={"space-between"}
    //       // w={"80%"}
    //       bg={"red.300"}
    //     >
    //       <Text
    //         fontSize={["20px", "30px"]}
    //         w={"extra-bold"}
    //         fontFamily={"sans-serif"}
    //       >
    //         Nnote
    //       </Text>
    //       <Box>
    //         <Input
    //           variant="outline"
    //           placeholder="search"
    //           _placeholder={{ opacity: 1, color: "black" }}
    //           bgColor={"gray.100"}
    //           color={"black"}
    //         />
    //       </Box>
    //     </Flex>

    //     <Main />
    //   </Flex>
    // </Flex>
    <DashboardLayout>
      <Flex>
        {/* <Text>Main</Text> */}
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Main />
        </Flex>
      </Flex>
    </DashboardLayout>
  );
};

export default DashBoard;
