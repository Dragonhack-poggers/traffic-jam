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
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "A dataset",
      data: Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })),
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Test = () => {
  const { events } = useDashboardContext();
  console.log({ events });
  return <Scatter options={options} data={data} />;
};

export default Test;