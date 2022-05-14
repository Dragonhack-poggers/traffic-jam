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
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
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
                  placeholder="Repeat password"
                />
              </InputGroup>
            </FormControl>
          </Stack>
        </Box>
      </form>
      <Box>
        Already an user?{" "}
        <Link color="teal.500" href="#">
          Sign In
        </Link>
      </Box>
    </Flex>
  )
}

export default Login
