import { Avatar, Box, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useWindowDimensions from "../hooks/useWindowsDimensions";

const Topbar = (filterNotes) => {
  const { width } = useWindowDimensions();
  const [searchBar, setSearchBar] = useState("");

  const filterNotes = () => {
    if (!searchBar) {
      return notes;
    } else {
      return notes.filter((note) => {
        note.title.toLowerCase().startsWith(searchBar);
      });
    }
  };

  return (
    <Flex justify={"space-between"} px={3} py={2} bg={"#181819"}>
      <Input
        w={["70%", "50%"]}
        bg={"#202225"}
        placeholder={"Search..."}
        _placeholder={{
          color: "#afb1b3",
        }}
        onChange={(e) => {
          setSearchBar(e.target.value);
        }}
      />
      {/* {width > 480 && (
        <Box>
          <AddNewNote />
        </Box>
      )} */}
      <Flex
        align={"center"}
        gap={3}
        bg={"#202225"}
        px={3}
        borderRadius={"md"}
        cursor={"pointer"}
        color={"#afb1b3"}
      >
        <Text>Tofunmi</Text>
        <Avatar size={"sm"} />
      </Flex>
    </Flex>
  );
};

export default Topbar;
