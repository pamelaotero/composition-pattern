import ApexCharts from "apexcharts";
import React, { useEffect } from "react";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: "donut",
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
  }, []); // Run once on mount

  return <div id="chart">{/* Chart will be rendered here */}</div>;
};

export default ChartComponent;
