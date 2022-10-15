import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import AddNote from "../AddNote";
import AddTask from "../AddTask";
const AddNew = () => {
  const [showAddNewNotePopup, setShowAddNewNotePopup] = useState(false);
  const [showAddNewTaskPopup, setShowAddNewTaskPopup] = useState(false);

  const closePopup = () => {
    setShowAddNewNotePopup(false);
    setShowAddNewTaskPopup(false);
  };
  return (
    <>
      <AddNote isOpen={showAddNewNotePopup} closePopup={closePopup} />
      <AddTask isOpen={showAddNewTaskPopup} closePopup={closePopup} />
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
          <PopoverContent bg={"#202225"} w={"180px"}>
            <PopoverArrow />
            <PopoverBody cursor={"pointer"}>
              <Flex direction={"column"} gap={"10px"}>
                <Button
                  onClick={() => setShowAddNewNotePopup(true)}
                  w={"150px"}
                >
                  Add New Note
                </Button>
                <Button
                  onClick={() => setShowAddNewTaskPopup(true)}
                  w={"150px"}
                >
                  Add New Task
                </Button>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default AddNew;
