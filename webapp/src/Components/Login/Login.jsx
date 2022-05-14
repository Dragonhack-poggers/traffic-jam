import {
  Box,
  Flex,
  FormControl,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
  FormHelperText,
  Link,
  chakra,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { loginUser } from "../../api/auth-api";
import { useAppContext } from "../../lib/AppContext";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useAppContext();
  const toast = useToast();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.length || !password.length) {
      toast({
        variant: "solid",
        status: "error",
        title: "Error",
        description: "Fields must not be empty",
      });
      return;
    }

    const data = { email, password };
    try {
      const user = await loginUser(data);
      setUser(user);
      toast({
        variant: "solid",
        status: "success",
        title: "Success",
        description: "Success",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "solid",
        status: "error",
        title: "Error",
        description: "Something went wrong",
      });
    }
  };

  if (user) {
    return (
      <Link href='dashboard'>
        <Button my={4}>Enter dashboard</Button>
      </Link>
    );
  }

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      my={4}>
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
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText textAlign='right'>
              <Link>forgot password?</Link>
            </FormHelperText>
          </FormControl>
          <Button
            onClick={onSubmit}
            borderRadius='md'
            type='submit'
            variant='solid'
            colorScheme='teal'
            width='full'>
            Login
          </Button>
        </Stack>
      </Box>
      <Box>
        Not registered yet?{" "}
        <Link color='teal.500' href='/register'>
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
