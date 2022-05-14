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
  Container,
} from "@chakra-ui/react"
import { useState } from "react"
import { FaUserAlt, FaLock } from "react-icons/fa"

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      my={4}
    >
      <form>
        <Box>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
            borderRadius="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input type="email" placeholder="email address" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link>forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius="md"
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
            >
              Login
            </Button>
          </Stack>
        </Box>
      </form>
      <Box>
        Not registered yet?{" "}
        <Link color="teal.500" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  )
}

export default Login
