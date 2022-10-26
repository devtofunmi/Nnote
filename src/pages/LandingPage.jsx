import { Box, Button, Center, Flex, Grid, Img, Text } from "@chakra-ui/react";
import React from "react";
import note from "../assets/note.png";
import FeaturesCard from "../components/FeaturesCard";
import { SiGoogle } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
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
          <Text
            fontSize={["40px", "90px"]}
            fontWeight={"bold"}
            color={"white"}
            lineHeight={["50px", "100px"]}
          >
            BRING <Text color={"#4cbf87"}>iDEAS </Text> TO lIFE
          </Text>
          <Text fontSize={"20px"} color={"#afb1b3"} maxW={"500px"}>
            Notes is the best place to jot down quick thoughts or to save longer
            notes filled with checklists.
          </Text>
          <Flex gap={"10px"} mt={"30px"} direction={["column", "row"]}>
            <Button
              bg={"black"}
              color={"white"}
              colorScheme="teal"
              leftIcon={<MdOutlineAlternateEmail />}
              _hover={{
                color: "#4cbf87",
              }}
            >
              <Link to="/login">LogIn with Email</Link>
            </Button>
            <Button
              bg={"black"}
              color={"white"}
              colorScheme="teal"
              leftIcon={<MdOutlineAlternateEmail />}
              _hover={{
                color: "#4cbf87",
              }}
            >
              <Link to="/signup">SignUp with Email</Link>
            </Button>
          </Flex>
        </Box>
        <Box>
          <Img width={"700px"} src={note} />
        </Box>
      </Flex>

      <Flex flexDirection={"column"} textAlign={"center"}>
        <Center>
          <Img
            w={"200px"}
            src="https://media.giphy.com/media/Vo6eOQJMg3n6HgDuAA/giphy.gif"
          />
        </Center>

        <Text
          fontWeight={500}
          fontSize={["25px", "40px"]}
          mt={"10px"}
          color={"white"}
        >
          Focus on what matters most
        </Text>
        <Text fontSize={"20px"} color={"#afb1b3"}>
          Some of Nnote key features
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        direction={"column"}
        w={"100%"}
        gap={"10px"}
        textAlign={"center"}
        mt={"50px"}
      >
        {FeaturesCard.map((card, i) => (
          <Flex
            px={["70px", "40px", "20px", "130px"]}
            py={"20px"}
            justifyContent={"space-between"}
            key={i}
            alignItems={"center"}
            direction={["column", card.isInverted ? "row-reverse" : "row"]}
          >
            <Flex
              fontSize={"50px"}
              justifyContent={"center"}
              color={"white"}
              w={["100%", "50%"]}
            >
              {card.image}
            </Flex>
            <Box w={["100%", "50%"]}>
              <Text
                fontWeight={500}
                fontSize={["25px", "65px"]}
                color={"white"}
                lineHeight={"60px"}
                my={10}
                textAlign={"left"}
              >
                {card.heading}
              </Text>
              <Text fontSize={"20px"} color={"#afb1b3"} textAlign={"left"}>
                {card.text}
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default LandingPage;
