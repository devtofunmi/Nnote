import { Box, Button, Input, Textarea, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const AddNote = ({ isOpen, closePopup }) => {
  return (
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
            <Text fontSize={"1.5rem"}>Add New Note</Text>
            <Button size={"sm"} cursor={"pointer"} onClick={() => closePopup()}>
              <MdOutlineClose />
            </Button>
          </Flex>
          <Box w={["300px", "400px"]} mt={"50px"}>
            <Input w={["300px", "400px"]} placeholder="Title" />
            <Textarea mt={"15px"} placeholder="Enter note" h={"150px"} />
            <Button mt={"20px"}>Submit</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AddNote;
