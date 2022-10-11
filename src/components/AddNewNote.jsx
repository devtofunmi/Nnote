import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineEditNote } from "react-icons/md";

const AddNewNote = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            color={"white"}
            bg={"#176fe4"}
            rightIcon={<MdOutlineEditNote />}
          >
            Add New
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent w={"90px"} bg={"#202225"}>
            <PopoverArrow />

            <PopoverBody cursor={"pointer"}>
              <Text>Note</Text>
              <Text>Task</Text>
              <Text>Task</Text>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default AddNewNote;
