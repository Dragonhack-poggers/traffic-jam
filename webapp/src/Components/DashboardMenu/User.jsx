import { Button } from "@chakra-ui/react"
import { FaUserAlt } from "react-icons/fa"
import { useAppContext } from "../../lib/AppContext";
const User = () => {
  const { user } = useAppContext();
  if (!user) return null;
  const email = user.email ?? 'User';

  return (
    <Button
      leftIcon={<FaUserAlt />}
      w={"100%"}
      borderRadius={0}
      variant="solid"
      justifyContent="left"
      height={"4em"}
    >
      {email}
    </Button>
  )
}

export default User;
