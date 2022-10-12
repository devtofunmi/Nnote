import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

const Task = () => {
  return (
    <>
      <DashboardLayout>
        <Flex>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text>Task</Text>
          </Flex>
        </Flex>
      </DashboardLayout>
    </>
  );
};

export default Task;
