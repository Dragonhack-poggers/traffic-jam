import { Button } from "@chakra-ui/react"
import { FaUserAlt } from "react-icons/fa"
const User = () => {
  return (
    <Button
      leftIcon={<FaUserAlt />}
      w={"100%"}
      borderRadius={0}
      variant="solid"
      justifyContent="left"
      height={"4rem"}
    >
      User
    </Button>
  )
}

export default User
