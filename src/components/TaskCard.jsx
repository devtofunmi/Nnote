import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { makeUseVisualState } from "framer-motion";
import React from "react";
const TaskCard = () => {
  return (
    <>
      <Box>
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
        <Box>{done ? "done" : "notdone"}</Box>
      </Box>
    </>
  );
};

export default TaskCard;
