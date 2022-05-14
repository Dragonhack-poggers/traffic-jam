import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import StartDriving from "../components/StartDriving";
import Login from "../Components/Login/Login";

const LoginPage = () => {
  return (
    <Box backgroundColor='gray.200'>
      <StartDriving />
      <Flex
        flexDirection='column'
        width='100wh'
        minHeight='100vh'
        backgroundColor='gray.200'
        justifyContent='center'
        alignItems='center'>
        {/* <Container maxW={"container.xl"}> */}

        <Login />
        {/* </Container> */}
      </Flex>
    </Box>
  );
};

export default LoginPage;
