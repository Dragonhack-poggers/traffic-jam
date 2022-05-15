import { Grid, GridItem } from "@chakra-ui/react";
import User from "../Components/DashboardMenu/User";
import Map from "../Components/DashboardMenu/Map";
import TrafficReport from "../Components/DashboardMenu/TrafficReport";
import { DashboardProvider } from "../lib/DashboardContext";

const Dashboard = ({ children }) => {
  return (
    <DashboardProvider>
      <Grid templateColumns={"repeat(12,1fr)"} minHeight='100vh'>
        <GridItem colSpan={3}>
          <User />
          <TrafficReport />
          <Map />
        </GridItem>
        <GridItem colSpan={9}>{children}</GridItem>
      </Grid>
    </DashboardProvider>
  );
};

export default Dashboard;
