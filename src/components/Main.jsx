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

  return (
    <>
      <AddNote
        isOpen={showAddNewNotePopup}
        closePopup={closePopup}
        addNewNote={addNewNote}
      />
      <Flex direction={"column"} justifyContent={"center"}>
        <Text fontSize={"20px"} fontWeight={"bold"} mt={"30px"}>
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
                {newNote.map((note) => (
                  <Box
                    width={["90%", "45%", "25%"]}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                  >
                    <Flex>
                      <Box w={"80%"}>
                        <Text fontSize={["15px", "20px"]}>{note.title}</Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
                          {note.content}
                        </Text>
                      </Box>
                      <Button>
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
    </>
  );
};

export default Main;
