import { Flex } from "@chakra-ui/react";
import React from "react";
import BubbleChart from "../Components/DashboardCharts/BubbleChart";
import ScatterPlot from "../Components/DashboardCharts/ScatterPlot";
import Dashboard from "./Dashboard";

const Charts = () => {
  return (
    <Dashboard>
      <Flex p={4} gap={4} alignItems='center'>
        {/* <ScatterPlot /> */}
        {/* <BubbleChart /> */}
      </Flex>
    </Dashboard>
  );
};

export default Charts;
