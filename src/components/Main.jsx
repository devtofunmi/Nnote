import React from "react";

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
import AddNote from "./AddNote";
import { MdBookmarkAdd, MdNoteAdd } from "react-icons/md";
import NoteCard from "./NoteCard";
import DashboardLayout from "../layout/DashboardLayout";
const Main = () => {
  return (
    <>
      <Flex direction={"column"} justifyContent={"center"}>
        <Text fontSize={"20px"} fontWeight={"bold"} mt={"30px"}>
          My Notes
        </Text>

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
