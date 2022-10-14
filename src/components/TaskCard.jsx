import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";

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
      </Box>
    </>
  );
};

export default TaskCard;
