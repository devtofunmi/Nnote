import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import AddNewNote from "./AddNew";

const SideBar = () => {
  const { width } = useWindowDimensions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  useEffect(() => {
    console.log(width);
  }, []);
  return (
    <>
      {width > 480 ? (
        <Flex
          flexDirection={"column"}
          bg={"#181819"}
          w={"100%"}
          minH={"100vh"}
          px={4}
          pt={"30px"}
        >
          <Text fontSize={"30px"}>Nnote</Text>

          <Link to={"/dashboard"} mt={"20px"}>
            <Text my={2}>Overview</Text>
          </Link>
          <Link to={"/task"} mt={"20px"}>
            <Text my={2}>Task</Text>
          </Link>
          <Link to={"/dashboard/favorite"}>
            <Text my={2}>Favourite</Text>
          </Link>
        </Flex>
      ) : (
        <>
          <Button colorScheme="blue" onClick={onOpen}>
            Open
          </Button>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <Flex
                  flexDirection={"column"}
                  bg={"#181819"}
                  w={"100%"}
                  minH={"100vh"}
                  px={4}
                  pt={"30px"}
                >
                  <Text fontSize={"30px"}>Nnote</Text>

                  {width < 480 && (
                    <Box>
                      <AddNewNote />
                    </Box>
                  )}

                  <Link to={"/dashboard"} mt={"20px"}>
                    <Text my={2}>Overview</Text>
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
      )}
    </>
  );
};

export default SideBar;
