import { Button } from "@chakra-ui/react"

import { Link } from "react-router-dom"
import { FaCar } from "react-icons/fa"

const TrafficReport = () => {
  return (
    <Link to="/dashboard/">
      <Button
        as="a"
        leftIcon={<FaCar />}
        colorScheme="teal"
        variant="solid"
        w={"100%"}
        borderRadius={0}
        justifyContent="left"
        height={"3rem"}
      >
        Traffic Report
      </Button>
    </Link>
  )
}

export default TrafficReport
