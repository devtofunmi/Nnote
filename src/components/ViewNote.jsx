import { Box, Button, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const ViewNote = ({ isOpen, title, content, handlePopup }) => {
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
            <Text fontSize={"1.5rem"}>Note</Text>
            <Button
              bg={"blue.400"}
              _hover={{
                backgroundColor: "rgba(#181819, 0.2)",
              }}
              size={"sm"}
              cursor={"pointer"}
              onClick={() => {
                handlePopup();
              }}
            >
              <MdOutlineClose />
            </Button>
          </Flex>
          <Box w={["300px", "400px"]} mt={"50px"}>
            <Box>{title}</Box>
            <Box>{content}</Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ViewNote;
