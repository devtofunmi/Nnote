import {
  Box,
  Button,
  IconButton,
  Input,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Textarea,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { MdOutlineClose, MdOutlineEditNote } from "react-icons/md";
const AddNote = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<MdOutlineEditNote />}
        bg={"#fff"}
        color={"purple.400 "}
        my={5}
      >
        Add New Note
      </Button>
      {/* <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input placeholder="Title" />
            <Textarea mt={"15px"} placeholder="Enter note" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      <Box
        position={"fixed"}
        w={"100%"}
        h={"100%"}
        top={"0px"}
        left={"0px"}
        backdropBlur={"lg"}
        display={"flex"}
        justifyContent={"center"}
        placeItems={"center"}
        background={"   rgba(0, 0, 0, 0.5)"}
        // visibility={"hidden"}
        zIndex={10}
      >
        <Flex
          direction={"column"}
          background={"teal"}
          w={"90vw"}
          h={"50vh"}
          textAlign={"center"}
          justifyContent={"center"}
          placeItems={"center"}
          position={"relative"}
          maxW={"620px"}
          padding={"30px"}
          borderRadius={"10px"}
        >
          <Flex>
            <Text>Add New Button</Text>
            <Box
              position={"absolute"}
              top={"1rem"}
              right={"1rem"}
              fontSize={"2rem"}
              cursor={"pointer"}
            >
              <MdOutlineClose />
            </Box>
          </Flex>
          <Input placeholder="Title" />
          <Textarea mt={"15px"} placeholder="Enter note" />
          <Button>Submit</Button>
        </Flex>
      </Box>
    </>
  );
};

export default AddNote;
