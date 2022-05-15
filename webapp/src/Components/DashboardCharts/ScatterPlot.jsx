import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useDashboardContext } from "../../lib/DashboardContext";
import { useMemo } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ScatterPlot = () => {
  const { events } = useDashboardContext();
  const data = useMemo(() => {
    if (events === undefined) {
      return [];
    }

    const label = "Events clustering";
    const datum = events.map((e) => {
      return {
        x: e.long,
        y: e.lat,
      };
    });

    return {
      datasets: [
        {
          label,
          data: datum,
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    };
  }, [events]);

  if (!events) {
    return (
      <Flex w='100%' h='100%' justifyContent='center' alignItems='center'>
        <Spinner size={"lg"} />
      </Flex>
    );
  }

  return <ScatterPlot options={options} data={data} />;
};

export default ScatterPlot;
