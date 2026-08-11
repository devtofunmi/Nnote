import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const Topbar = () => {
  const [displayName, setDisplayName] = useState("Guest");

  useEffect(() => {
    async function getUserData() {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        // Supabase user object might not have a 'display_name' or 'name' directly.
        // Often, it's in user_metadata or you might use email.
        // For this example, let's use email or a default if no specific name field.
        setDisplayName(data.user.email || "User");
      } else if (error) {
        console.error("Error fetching user data:", error.message);
        setDisplayName("Guest");
      }
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
        <Text>{displayName}</Text>
        <Avatar size={"sm"} />
      </Flex>
    </Flex>
  );
};

export default Topbar;
