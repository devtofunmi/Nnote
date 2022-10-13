import { Flex } from "@chakra-ui/react";
import React from "react";
import Main from "../components/Main";

import DashboardLayout from "../layout/DashboardLayout";

const DashBoard = () => {
  return (
    <DashboardLayout>
      <Flex>
        <Flex pl={"20px"} justifyContent={"center"} alignItems={"center"}>
          <Main />
        </Flex>
      </Flex>
    </DashboardLayout>
  );
};

export default DashBoard;
