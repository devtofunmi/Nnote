import React from "react";
import { BsMenuApp } from "react-icons/bs";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button bg={"gray.100"} onClick={onOpen}>
        <BsMenuApp color="black" />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg={"black"} color={"white"}>
            Nnote
          </DrawerHeader>
          <DrawerBody bgColor={"white"} color={"black"}>
            <p>Add Note</p>
            <p>Favourite Note</p>
            <p>Calender</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
