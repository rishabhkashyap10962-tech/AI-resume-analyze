import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function SkillsChart({ resume }) {

  const data = {
    labels: ["Skills", "Missing"],

    datasets: [
      {
        data: [
          resume?.skills?.length || 0,
          resume?.missingSkills?.length || 0,
        ],

        backgroundColor: [
          "#8b5cf6",
          "#ef4444",
        ],

        borderWidth: 0,
      },
    ],
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "auto",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
}

export default SkillsChart;