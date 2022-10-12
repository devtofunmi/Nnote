import { Box, Button, Flex, Grid, Img, Text } from "@chakra-ui/react";
import React from "react";
import note from "../assets/note.png";
import FeaturesCard from "../components/FeaturesCard";

const LandingPage = () => {
  return (
    <>
      <Flex
        padding={"50px"}
        w={"100%"}
        gap={"50px"}
        flexDirection={["column-reverse", "row"]}
      >
        <Box w={["100%", "60%"]} mt={"70px"}>
          <Text fontSize={["40px", "50px"]} fontWeight={"bold"} color={"white"}>
            BRING <Text color={"#fab004"}>iDEAS </Text> TO lIFE ~~
          </Text>
          <Text color={"#afb1b3"}>
            Notes is the best place to jot down quick thoughts or to save longer
            notes filled with checklists.
          </Text>
          <Flex gap={"10px"} mt={"30px"}>
            <Button bg={"black"} color={"white"} colorScheme="teal">
              LogIn with Google
            </Button>
            <Button bg={"black"} colorScheme="teal" color={"white"}>
              SignUp with Google
            </Button>
          </Flex>
        </Box>
        <Box>
          <Img width={["100%", "90%"]} src={note} />
        </Box>
      </Flex>

      <Flex flexDirection={"column"} textAlign={"center"}>
        <Text
          fontWeight={500}
          fontSize={["25px", "30px"]}
          mt={"10px"}
          color={"white"}
        >
          Focus on what matters most
        </Text>
        <Text color={"#afb1b3"}>Some of Nnote key features</Text>
      </Flex>
      <Grid
        padding={"100px"}
        w={"100%"}
        templateColumns="repeat(2, 1fr)"
        gap={"30px"}
        textAlign={"center"}
      >
        {FeaturesCard.map((card, i) => (
          <Box key={i}>
            <Box fontSize={"50px"} bgColor={"black"} w={"60px"} color={"white"}>
              {card.icon}
            </Box>
            <Text fontWeight={500} fontSize={"18px"} color={"white"}>
              {card.heading}
            </Text>
            <Text color={"#afb1b3"}>{card.text}</Text>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default LandingPage;
