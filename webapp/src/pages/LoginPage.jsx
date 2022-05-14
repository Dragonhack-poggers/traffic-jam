import { Box, Flex } from "@chakra-ui/react"
import React from "react"
import StartDriving from "../components/StartDriving"
import Login from "../Components/Login/Login"

const LoginPage = () => {
  return (
    <Box backgroundColor="gray.200">
      <Flex
        flexDirection="column"
        width="100wh"
        minHeight="100vh"
        backgroundColor="gray.200"
        justifyContent="flex-start"
        alignItems="center"
      >
        <StartDriving />
        <Login />
      </Flex>
    </Box>
  )
}

export default LoginPage
