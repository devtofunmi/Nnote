import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MdBookmarkAdd } from "react-icons/md";

const NoteCard = () => {
  return (
    <Box
      width={["90%", "45%", "25%"]}
      bg={"#181819"}
      p={"17px"}
      borderRadius={"10px"}
    >
      <Flex>
        <Box>
          <Text fontSize={["15px", "20px"]}>why im still single</Text>
          <Text mt={5} fontSize={["10px", "15px"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            dolore, eum facere ut et repellat quibusdam laboriosam culpa vel
            quas.
          </Text>
        </Box>
        <Button>
          <MdBookmarkAdd fontSize={["50px", "100px"]} color={"white"} />
        </Button>
      </Flex>
    </Box>
  );
};

export default NoteCard;
