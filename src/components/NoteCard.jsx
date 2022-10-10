import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MdBookmarkAdd } from "react-icons/md";

const NoteCard = () => {
  return (
    <Box width={"25%"} bg={"purple.400"} p={"17px"} borderRadius={"10px"}>
      <Flex>
        <Box>
          <Text fontSize={"25px"}>why im still single</Text>
          <Text mt={5}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            dolore, eum facere ut et repellat quibusdam laboriosam culpa vel
            quas.
          </Text>
        </Box>
        <Button>
          <MdBookmarkAdd fontSize={"80px"} color={"black"} />
        </Button>
      </Flex>
    </Box>
  );
};

export default NoteCard;
