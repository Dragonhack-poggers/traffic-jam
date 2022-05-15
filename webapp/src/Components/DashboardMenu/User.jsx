import { Button } from "@chakra-ui/react"
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa"
import { useAppContext } from "../../lib/AppContext";
const User = () => {

  const { user } = useAppContext();

  return (
    <Button
      leftIcon={<FaUserAlt />}
      w={"100%"}
      borderRadius={0}
      variant="solid"
      justifyContent="left"
      height={"4em"}
    >
      {user.email}
    </Button>
  )
}

export default User
