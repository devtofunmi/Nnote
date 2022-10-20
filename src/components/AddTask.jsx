import { Box, Button, Flex, Input } from "@chakra-ui/react";

import React, { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
const AddTask = ({ isOpen, closePopup, addNewTask }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef();

  const handleSubmit = () => {
    if (addNewTask(task)) {
      setTask("");
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <>
        <Box
          position={"fixed"}
          w={"100%"}
          h={"100%"}
          top={"0px"}
          left={"0px"}
          backdropBlur={"lg"}
          display={isOpen ? "flex" : "none"}
          justifyContent={"center"}
          placeItems={"center"}
          background={"   rgba(0, 0, 0, 0.6)"}
          zIndex={10}
          backdropFilter={"blur(5px)"}
        >
          <Flex
            direction={"column"}
            background={"#181919"}
            w={"90vw"}
            textAlign={"center"}
            justifyContent={"center"}
            placeItems={"center"}
            position={"relative"}
            maxW={"450px"}
            padding={"30px"}
            borderRadius={"10px"}
          >
            <Flex align={"center"} justify={"space-between"} w={"100%"}>
              <Box fontSize={"1.5rem"}>Add New Task</Box>
              <Button
                bg={"blue.400"}
                _hover={{
                  backgroundColor: "rgba(#181819, 0.2)",
                }}
                size={"sm"}
                cursor={"pointer"}
                onClick={() => closePopup()}
              >
                <MdOutlineClose />
              </Button>
            </Flex>
            <Box w={["300px", "400px"]} mt={"50px"}>
              <Input
                placeholder="Task"
                onChange={(e) => {
                  setTask(e.target.value);
                }}
                ref={inputRef}
              />

              <Button
                mt={"20px"}
                bg={"blue.400"}
                _hover={{
                  backgroundColor: "rgba(#181819, 0.2)",
                }}
                onClick={() => {
                  handleSubmit();
                }}
                disabled={!task}
              >
                Submit
              </Button>
            </Box>
          </Flex>
        </Box>
      </>
    </>
  );
};

export default AddTask;
