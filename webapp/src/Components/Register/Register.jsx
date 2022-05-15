import {
  Box,
  Flex,
  FormControl,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
  Link,
  chakra,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { registerUser } from "../../api/auth-api";
import { useAppContext } from "../../lib/AppContext";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { user } = useAppContext();
  const navigate = useNavigate();
  const toast = useToast();

  if (user) {
    navigate("/");
    return;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      email.length <= 0 ||
      password.length <= 0 ||
      repeatPassword.length <= 0
    ) {
      toast({
        variant: "solid",
        status: "error",
        title: "Error",
        description: "Fields must not be empty",
      });
      return;
    }

    if (password !== repeatPassword) {
      toast({
        variant: "solid",
        status: "error",
        title: "Error",
        description: "Passwords do not match",
      });
      return;
    }

    try {
      const user = await registerUser({ email, password });
      toast({
        variant: "solid",
        status: "success",
        title: "Success",
        description: "Success",
      });
      navigate("/");
    } catch {
      toast({
        variant: "solid",
        status: "error",
        title: "Error",
        description: "Error when registering",
      });
    }
  };

  return (
    <Flex
      flexDirection='column'
      width='100wh'
      height='100vh'
      backgroundColor='gray.200'
      justifyContent='center'
      alignItems='center'>
      <Box>
        <Stack
          spacing={4}
          p='1rem'
          backgroundColor='whiteAlpha.900'
          boxShadow='md'
          borderRadius='md'>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<CFaUserAlt color='gray.300' />}
              />
              <Input
                type='email'
                placeholder='email address'
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                children={<CFaLock color='gray.300' />}
              />
              <Input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                children={<CFaLock color='gray.300' />}
              />
              <Input
                type='password'
                placeholder='Repeat password'
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Button
            onClick={onSubmit}
            borderRadius='md'
            type='submit'
            variant='solid'
            colorScheme='teal'
            width='full'>
            Register
          </Button>
        </Stack>
      </Box>
      <Box>
        Already an user?{" "}
        <Link color='teal.500' href='/'>
          Sign In
        </Link>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
