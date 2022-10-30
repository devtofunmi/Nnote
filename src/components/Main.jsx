import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Input,
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
import ViewNote from "./ViewNote";
import Topbar from "./Topbar";
import { supabase } from "../../supabaseClient";

const Main = () => {
  const [showAddNewNotePopup, setShowAddNewNotePopup] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const closePopup = () => {
    setShowAddNewNotePopup(false);
  };
  const [notes, setNotes] = useState([]);
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };
  const getUserNote = async () => {
    const data = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", (await supabase.auth.getUser()).data.user.id);

    console.log(data.data);
    setNotes([data?.data]);
  };

  useEffect(() => {
    getUserNote();
  }, []);

  const populateModal = (id) => {
    setModalContent(notes.filter((note) => note.id === id)[0]);
  };
  const showError = (message) => {
    toast({
      description: message,
      status: "error",
      duration: 1500,
      isClosable: true,
    });
  };

  const addNewNote = (title, content, date) => {
    const note = async () => {
      await supabase
        .from("notes")
        .insert({
          title: title,
          content: content,
          user_id: (await supabase.auth.getUser()).data.user.id,
        })
        .then((data) => {
          console.log(data);
          if (!title) {
            showError("enter title");
          } else if (!content) {
            showError("enter note content");
          } else if (data.error) {
            showError(data.error.message);
          } else {
            toast({
              description: "Note added successfully",
              status: "success",
              duration: 1500,
              isClosable: true,
            });
          }
        });
    };

    note();
  };

  const filterByDate = (from, to) => {
    return notes.filter((note) => {
      return new Date(note.date) >= from && new Date(note.date) <= to;
    });
  };

  const last24h = () => {
    const dayStart = new Date(new Date().setHours(0, 0, 0, 0));
    const dayEnd = new Date(new Date().setHours(23, 59, 59, 999));
    return filterByDate(dayStart, dayEnd);
  };

  const thisWeek = () => {
    const date = new Date();
    const weekStart = new Date(date.setDate(date.getDate() - date.getDay()));
    const weekEnd = new Date(date.setDate(date.getDate() - date.getDay() + 6));
    weekStart.setHours(0, 0, 0, 0);
    weekEnd.setHours(168, 413, 413, 6993);

    // console.log(filterByDate(weekStart, weekEnd));

    return filterByDate(weekStart, weekEnd);
  };

  const thisMonth = () => {
    const date = new Date();
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(
      date.setDate(date.getFullYear(), date.getMonth() + 1, 0)
    );
    // console.log(monthStart);

    return filterByDate(monthStart, monthEnd);
  };

  function truncateString(str) {
    if (str.length <= 15) {
      return str;
    } else return str.slice(0, 15) + "...";
  }

  const filterNotes = (notesArr) => {
    if (!searchQuery) {
      return notesArr;
    } else {
      return notes.filter((note) => {
        return note.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  };

  return (
    <DashboardLayout>
      <ViewNote
        isOpen={isOpen}
        handlePopup={handlePopup}
        title={modalContent.title}
        content={modalContent.content}
      />

      <AddNote
        isOpen={showAddNewNotePopup}
        closePopup={closePopup}
        addNewNote={addNewNote}
      />
      <Flex direction={"column"} p={"40px"}>
        <Input
          w={["70%", "50%"]}
          bg={"#202225"}
          placeholder={"Search..."}
          _placeholder={{
            color: "#afb1b3",
          }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <Text fontSize={"20px"} fontWeight={"bold"} mt={"20px"}>
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
            <Tab>All Notes</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                {filterNotes(last24h()).map((note) => (
                  <Box
                    key={note.id}
                    width={"300px"}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                    onClick={() => {
                      handlePopup();
                      populateModal(note.id);
                    }}
                  >
                    <Flex>
                      <Box w={"80%"} h={"150px"}>
                        <Text fontSize={["15px", "20px"]}>
                          {/* {truncateString(note.title)} */}
                          {}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
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
                {filterNotes(thisWeek()).map((note) => (
                  <Box
                    key={note.id}
                    width={"300px"}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                    onClick={() => {
                      handlePopup();
                      populateModal(note.id);
                    }}
                  >
                    <Flex>
                      <Box w={"80%"} h={"150px"}>
                        <Text fontSize={["15px", "20px"]}>
                          {truncateString(note.title)}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
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
                {/* <NoteCard /> */}
                {filterNotes(thisMonth()).map((note) => (
                  <Box
                    key={note.id}
                    width={"300px"}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                    onClick={() => {
                      handlePopup();
                      populateModal(note.id);
                    }}
                  >
                    <Flex>
                      <Box w={"80%"} h={"150px"}>
                        <Text fontSize={["15px", "20px"]}>
                          {truncateString(note.title)}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
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
                {filterNotes(notes).map((note) => (
                  <Box
                    key={note.id}
                    width={"300px"}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                    onClick={() => {
                      handlePopup();
                      populateModal(note.id);
                    }}
                  >
                    <Flex>
                      <Box w={"80%"} h={"150px"}>
                        <Text fontSize={["15px", "20px"]}>
                          {truncateString(note.title)}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
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
          </TabPanels>
        </Tabs>
      </Flex>
    </DashboardLayout>
  );
};

export default Main;
