import { Box, Flex, Text } from "@chakra-ui/react";
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
            <Box>
              <Text>Task</Text>

              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </Box>
            <Box mt={"50px"}>
              <Text>Complete</Text>
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </Box>
          </Flex>
        </Flex>
      </DashboardLayout>
    </>
  );
};

export default Task;
