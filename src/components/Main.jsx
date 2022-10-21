import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import AddNote from "../components/AddNote";
import NoteCard from "./NoteCard";
import { MdBookmarkAdd } from "react-icons/md";
import DashboardLayout from "../layout/DashboardLayout";

const Main = () => {
  const [showAddNewNotePopup, setShowAddNewNotePopup] = useState(false);
  const closePopup = () => {
    setShowAddNewNotePopup(false);
  };
  const [newNote, setNewNote] = useState([]);
  const toast = useToast();
  const showError = (message) => {
    toast({
      description: message,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };
  const addNewNote = (title, content, date) => {
    if (!title) {
      showError("enter title");
    } else if (!content) {
      showError("enter note content");
    } else {
      toast({
        description: "Note added successfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    }

    const note = {
      title,
      content,
      date,
    };
    console.log(note);
    setNewNote([...newNote, note]);
  };

  function truncateString(str) {
    if (str.length <= 15) {
      return str;
    } else return str.slice(0, 15) + "...";
  }

  return (
    <DashboardLayout>
      <AddNote
        isOpen={showAddNewNotePopup}
        closePopup={closePopup}
        addNewNote={addNewNote}
      />
      <Flex direction={"column"} justifyContent={"center"}>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          My Notes
        </Text>
        <Button
          mt={"20px"}
          onClick={() => setShowAddNewNotePopup(true)}
          w={"150px"}
          bg={"#176fe4"}
        >
          Add New Note
        </Button>

        <Tabs mt={"30px"}>
          <TabList>
            <Tab>Today</Tab>
            <Tab>This week</Tab>
            <Tab>This month</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                {newNote.map((note, id) => (
                  <Box
                    key={id}
                    width={"300px"}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                  >
                    <Flex>
                      <Box w={"80%"}>
                        <Text fontSize={["15px", "20px"]}>
                          {truncateString(note.title)}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
                          {/* <Link to={`/${note.id}`}>
                            <img src={d.image} />
                            <p>{d.name}</p>
                          </Link> */}
                          {truncateString(note.content)}
                        </Text>
                      </Box>
                      <Button
                        bg={"blue.400"}
                        _hover={{
                          backgroundColor: "rgba(#181819, 0.2)",
                        }}
                      >
                        <Text fontSize={"2xl"}>
                          <MdBookmarkAdd />
                        </Text>
                      </Button>
                    </Flex>
                  </Box>
                ))}
              </Flex>
            </TabPanel>

            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                <NoteCard />
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                <NoteCard />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </DashboardLayout>
  );
};

export default Main;
