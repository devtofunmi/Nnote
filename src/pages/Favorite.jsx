import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

const Favorite = () => {
  return (
    <DashboardLayout>
      <Flex pl={"20px"}>
        <Text>Fav</Text>
      </Flex>
    </DashboardLayout>
  );
};

export default Favorite;
