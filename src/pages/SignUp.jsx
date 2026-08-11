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
    setLoading(true);
    if (!email) {
      showMessage("Please enter your email.");
      setLoading(false);
      return;
    } else if (!password) {
      showMessage("Please enter a password.");
      setLoading(false);
      return;
    } else if (!confirmPassword) {
      showMessage("Please confirm your password.");
      setLoading(false);
      return;
    } else if (password !== confirmPassword) {
      showMessage("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        showMessage(error.message);
      } else {
        navigate("/login");
        toast({
          description: "Signup successful! Please check your email to verify.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error("Signup error:", err);
      showMessage("An unexpected error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  function handleSubmit() {
    signUP();
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
            disabled={loading}
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
