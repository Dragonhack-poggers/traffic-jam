import { Grid, GridItem } from "@chakra-ui/react";
import User from "../Components/DashboardMenu/User";
import Map from "../Components/DashboardMenu/Map";
import DashboardTable from "../Components/DashboardMenu/DashboardTable";
import TrafficReport from "../Components/DashboardMenu/TrafficReport";

const Dashboard = ({ children }) => {
  return (
    <Grid templateColumns={"repeat(12,1fr)"} minHeight='100vh' borderRight={"2px"} borderColor={"teal.400"}>
      <GridItem colSpan={3}>
        <User />
        <TrafficReport />
        <Map />
        <DashboardTable />
      </GridItem>
      <GridItem colSpan={9}>{children}</GridItem>
    </Grid>
  );
};

export default Dashboard;
