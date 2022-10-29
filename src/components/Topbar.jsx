import { Avatar, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import useWindowDimensions from "../hooks/useWindowsDimensions";

const Topbar = () => {
  const { width } = useWindowDimensions();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    async function getUserData() {
      console.log(await (await supabase.auth.getUser()).data);
    }
    getUserData();
  }, []);

  return (
    <Flex justify={"space-between"} px={3} py={2} bg={"#181819"}>
      <Text fontSize={["20px", "30px"]}>Welcome </Text>

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
