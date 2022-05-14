import { Flex } from "@chakra-ui/react"
import React from "react"
import StartDriving from "../components/StartDriving"
import Login from "../Components/Login/Login"

const LoginPage = () => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      {/* <Container maxW={"container.xl"}> */}
      <StartDriving />
      <Login />
      {/* </Container> */}
    </Flex>
  )
}

export default LoginPage
