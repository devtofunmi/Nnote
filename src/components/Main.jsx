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
} from "@chakra-ui/react";
import AddNote from "../components/AddNote";
import NoteCard from "./NoteCard";

const Main = () => {
  const [showAddNewNotePopup, setShowAddNewNotePopup] = useState(false);
  const closePopup = () => {
    setShowAddNewNotePopup(false);
  };
  return (
    <>
      <AddNote isOpen={showAddNewNotePopup} closePopup={closePopup} />
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
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
              </Flex>
            </TabPanel>

            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                <NoteCard />
                <NoteCard />
                <NoteCard />
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
