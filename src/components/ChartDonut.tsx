import ApexCharts from "apexcharts";
import React, { useEffect } from "react";

interface ChartDonutProps {
  series: number[];
  labels: string[];
  colors?: string[];
  legendPosition?: "top" | "right" | "bottom" | "left";
  showPercentages?: boolean; // NOTE: Propriedade para controlar a exibição das porcentagens
}

const ChartDonut: React.FC<ChartDonutProps> = ({
  series,
  labels,
  colors = [],
  legendPosition = "bottom",
  showPercentages = true,
}) => {
  useEffect(() => {
    const options = {
      series: series,
      chart: {
        type: "donut",
      },
      labels: labels,
      colors: colors,
      legend: {
        position: legendPosition,
        horizontalAlign: "left",
      },
      dataLabels: {
        enabled: showPercentages,
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector("#chart")!, options);
    chart.render();

    // Clean up on unmount
    return () => {
      chart.destroy();
    };
  }, [series, labels, colors, legendPosition, showPercentages]);
  return <div id="chart" />;
};

export default ChartDonut;
