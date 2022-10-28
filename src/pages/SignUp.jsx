import React, { useState } from "react";
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
import { supabase } from "../../supabaseClient";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const showMessage = (message) => {
    toast({
      description: message,
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  };
  const signUP = async () => {
    let { email, password } = await supabase.auth.signUp({
      email: "someone@email.com",
      password: "CZBRYwEHDObtGEkqdxpC",
    });
  };

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      if (!email) {
        showMessage("enter email");
      } else if (!password) {
        showMessage("enter password");
      } else if (!confirmPassword) {
        showMessage("enter confirm password");
      } else if (password != confirmPassword) {
        showMessage("password not match");
      } else {
        navigate("/login");
        signUP();
        toast({
          description: "signup successful",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      }

      setLoading(false);
    }, 1000);
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
            SignUp
          </Text>
          <Box>
            <Input
              my={5}
              variant="outline"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password "
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
            <Input
              my={5}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Box>
          <Button
            backgroundColor="#4cbf87"
            color="white"
            onClick={handleSubmit}
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
              "Signup"
            )}
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUp;
