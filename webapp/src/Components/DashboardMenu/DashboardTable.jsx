import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import "react-icons/fa"
import { FaInfo } from "react-icons/fa"

const DashboardTable = () => {
  return (
    <Link to="/dashboard/table">
      <Button
        leftIcon={<FaInfo />}
        colorScheme="teal"
        variant="solid"
        w={"100%"}
        borderRadius={0}
        justifyContent="left"
        height={"3rem"}
      >
        Dashboard
      </Button>
    </Link>
  )
}

export default DashboardTable
