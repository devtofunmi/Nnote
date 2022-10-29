import React, { useEffect, useState } from "react";
import {
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Flex,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const showMessage = (message) => {
    toast({
      description: message,
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  };

  const logIn = async () => {
    let { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoading(true);
    setTimeout(() => {
      if (!email) {
        showMessage("enter your email");
      } else if (!password) {
        showMessage("enter password");
      } else if (error) {
        console.log(error);
        showMessage("incorrect password");
      } else {
        navigate("/dashboard/main");

        toast({
          description: "login successful",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      }
      setLoading(false);
    }, 1000);
  };

  function handleSubmit() {
    logIn();
  }
  return (
    <>
      <Flex justifyContent={"center"}>
        <Flex
          align-items="center"
          justify-contents="center"
          w={["70%", "50%", "30%"]}
          m="auto"
          flexDirection="column"
          p={"10px"}
          marginTop={"100px"}
        >
          <Text
            color="white"
            fontSize={30}
            textAlign="center"
            fontFamily="sans-serif"
          >
            LogIn
          </Text>
          <Box>
            <Input
              my={5}
              variant="outline"
              placeholder="enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="enter password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Button
            backgroundColor="#4cbf87"
            color="white"
            onClick={handleSubmit}
            mt={"20px"}
          >
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            ) : (
              "Login"
            )}
          </Button>
          <Flex justifyContent={"center"} gap={"5px"} mt={"5px"}>
            <Text color={"white"}>New here ?</Text>
            <Link to="/signup">
              <Text color="#4cbf87">Sign Up</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
