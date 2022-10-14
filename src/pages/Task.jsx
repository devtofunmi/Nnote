import { Box, Flex, Text, Checkbox } from "@chakra-ui/react";
import React, { useState } from "react";
// import TaskCard from "../components/TaskCard";
import DashboardLayout from "../layout/DashboardLayout";

const Task = () => {
  const [done, setDone] = useState([]);

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

              <Flex
                gap={"10px"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
                cursor={"pointer"}
              >
                <Checkbox
                  onClick={(e) => {
                    setDone(e.target.value);
                  }}
                />
                <Text>Create the term sheet</Text>
              </Flex>

              <Box>{done(console.log("done"))}</Box>
            </Box>
            <Box mt={"50px"}>
              <Text>Complete</Text>
            </Box>
          </Flex>
        </Flex>
      </DashboardLayout>
    </>
  );
};

export default Task;
