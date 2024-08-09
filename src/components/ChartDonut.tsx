import ApexCharts from "apexcharts";
import React, { useEffect } from "react";

interface ChartDonutProps {
  series: number[];
  labels: string[];
  colors?: string[];
  legendPosition?: "top" | "right" | "bottom" | "left";
  showPercentages?: boolean;
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
          breakpoint: 1000,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: legendPosition,
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector("#chart")!, options);
    chart.render();

    // NOTE: Clean up on unmount
    return () => {
      chart.destroy();
    };
  }, [series, labels, colors, legendPosition, showPercentages]);
  return <div id="chart" />;
};

export default ChartDonut;
