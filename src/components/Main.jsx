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
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", (await supabase.auth.getUser()).data.user.id);

    if (error) {
      console.error("Error fetching notes:", error.message);
      showError("Failed to load notes.");
    } else {
      console.log(data);
      setNotes(data || []);
    }
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

  const addNewNote = async (title, content) => {
    if (!title) {
      showError("Please enter a title.");
      return false;
    } else if (!content) {
      showError("Please enter note content.");
      return false;
    }

    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData?.user) {
        showError("User not authenticated.");
        return false;
      }
      const userId = userData.user.id;

      const { data, error } = await supabase.from("notes").insert({
        title: title,
        content: content,
        user_id: userId,
      });

      if (error) {
        showError(error.message);
        return false;
      } else {
        toast({
          description: "Note added successfully",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
        getUserNote(); // Refresh notes after adding
        return true;
      }
    } catch (err) {
      console.error("Error adding note:", err);
      showError("An unexpected error occurred.");
      return false;
    }
  };

  const filterByDate = (from, to) => {
    return notes.filter((note) => {
      const noteDate = new Date(note.created_at);
      return noteDate >= from && noteDate <= to;
    });
  };

  const last24h = () => {
    const dayStart = new Date(new Date().setHours(0, 0, 0, 0));
    const dayEnd = new Date(new Date().setHours(23, 59, 59, 999));
    return filterByDate(dayStart, dayEnd);
  };

  const thisWeek = () => {
    const date = new Date();
    const dayOfWeek = date.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust for Monday start of week
    const weekStart = new Date(date.setDate(diff));
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);

    return filterByDate(weekStart, weekEnd);
  };

  const thisMonth = () => {
    const date = new Date();
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);

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
      return notesArr.filter((note) => {
        return note.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  };

  return (
    <DashboardLayout>
      <Button onClick={() => console.log(last24h())}>click</Button>
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
                          {truncateString(note.title)}
                          {}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
                          {truncateString(note.content)}
                          {/* {truncateString(note.content)} */}
                        </Text>
                      </Box>
                      <Button
                        bg={"blue.400"}
                        _hover={{
                          backgroundColor: "rgba(24, 24, 25, 0.2)",
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
                          backgroundColor: "rgba(24, 24, 25, 0.2)",
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
                          backgroundColor: "rgba(24, 24, 25, 0.2)",
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
                          backgroundColor: "rgba(24, 24, 25, 0.2)",
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
