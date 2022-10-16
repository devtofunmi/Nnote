import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import { BsMenuButton } from "react-icons/bs";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const MobileDrawer = () => {
  const { width } = useWindowDimensions();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button bg={"#202225"} color={"white"} onClick={onOpen}>
        <BsMenuButton />
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            <Flex
              pl={7}
              pt={5}
              flexDirection={"column"}
              bg={"#181819"}
              w={"100%"}
              minH={"100vh"}
            >
              <Text fontSize={"30px"}>Nnote</Text>

              {/* {width < 480 && (
                <Box>
                  <AddNewNote />
                </Box>
              )} */}

              <Link to={"/dashboard"} mt={"20px"}>
                <Text my={2}>Note</Text>
              </Link>
              <Link to={"/task"} mt={"20px"}>
                <Text my={2}>Task</Text>
              </Link>
              <Link to={"/dashboard/favorite"}>
                <Text my={2}>Favourite</Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
