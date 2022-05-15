import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useDashboardContext } from "../../lib/DashboardContext";
import { useMemo } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { Bubble } from "react-chartjs-2";
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const BubbleChart = () => {
  const { events } = useDashboardContext();
  const data = useMemo(() => {
    if (events === undefined) {
      return [];
    }

    const label = "Points of interest";
    const datum = events.map((e) => {
      return {
        x: e.long,
        y: e.lat,
        r: e.long + e.lat,
      };
    });

    return {
      datasets: [
        {
          label,
          data: datum,
          backgroundColor: "rgba(255, 99, 132, 1)",
          options: {
            tooltip: {
              enabled: false,
            },
          },
        },
      ],
    };
  }, [events]);

  const test = () => {
    if (events === undefined) {
      return [];
    }

    const label = "Points of interest";
    const datum = events.map((e) => {
      return {
        x: e.long,
        y: e.lat,
        r: e.long + e.lat,
      };
    });

    return {
      datasets: [
        {
          label,
          data: datum,
          backgroundColor: "rgba(255, 99, 132, 1)",
          options: {
            tooltip: {
              enabled: false,
            },
          },
        },
      ],
    };
  };

  if (!events) {
    return (
      <Flex w='100%' h='100%' justifyContent='center' alignItems='center'>
        <Spinner size={"lg"} />
      </Flex>
    );
  }

  return <Bubble options={options} data={test()} />;
};

export default BubbleChart;
