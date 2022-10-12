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
import React, { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import AddNote from "./AddNote";

const AddNewNote = () => {
  const [showAddNewNotePopup, setShowAddNewNotePopup] = useState(false);

  const closePopup = () => {
    setShowAddNewNotePopup(false);
  };
  return (
    <>
      <AddNote isOpen={showAddNewNotePopup} closePopup={closePopup} />
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
          <PopoverContent bg={"#202225"}>
            <PopoverArrow />
            <PopoverBody cursor={"pointer"}>
              <Button onClick={() => setShowAddNewNotePopup(true)}>
                Add New Note
              </Button>
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
