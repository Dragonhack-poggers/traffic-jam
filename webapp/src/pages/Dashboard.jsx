import { Grid, GridItem } from "@chakra-ui/react"

import User from "../Components/DashboardMenu/User"
import Map from "../Components/DashboardMenu/Map"
import TrafficReport from "../Components/DashboardMenu/TrafficReport"

const Dashboard = ({ children }) => {
  return (
    <Grid templateColumns={"repeat(12,1fr)"} gap={4} minHeight="100vh">
      <GridItem colSpan={4}>
        <User />
        <Map />
        <TrafficReport />
      </GridItem>
      <GridItem colSpan={8} bg={"gray"}>
        {children}
      </GridItem>
    </Grid>
  )
}

export default Dashboard
