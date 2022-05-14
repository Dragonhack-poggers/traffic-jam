import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { FaMapMarkedAlt } from "react-icons/fa"

const Map = () => {
  return (
    <Link to="/dashboard/map">
      <Button
        leftIcon={<FaMapMarkedAlt />}
        colorScheme="teal"
        variant="solid"
        w={"100%"}
        borderRadius={0}
        justifyContent="left"
        height={"3rem"}
      >
        Map
      </Button>
    </Link>
  )
}

export default Map
