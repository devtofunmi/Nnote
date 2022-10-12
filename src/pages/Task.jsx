import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import TaskCard from "../components/TaskCard";
import DashboardLayout from "../layout/DashboardLayout";

const Task = () => {
  return (
    <>
      <DashboardLayout>
        <Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
          >
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </Flex>
        </Flex>
      </DashboardLayout>
    </>
  );
};

export default Task;
