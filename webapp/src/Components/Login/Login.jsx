import {
  Box,
  Center,
  FormControl,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
  FormHelperText,
  Link,
  chakra,
} from "@chakra-ui/react"
import { useState } from "react"
import { FaUserAlt, FaLock } from "react-icons/fa"

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)
  return (
    <Center>
      <Box>
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
      </Box>
    </Center>
  )
}

export default Login
