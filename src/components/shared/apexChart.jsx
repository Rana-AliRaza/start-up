import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart

const ApexChart = ({ percentage = [], labels = [], title = '', chartWidth = 380 }) => {
  const [state] = useState({
    series: percentage, // Use the percentage prop directly
    options: {
      chart: {
        width: chartWidth,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -45,
          endAngle: 315,
        },
      },
      labels: labels, // Use the labels prop directly
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 1,
        },
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (val, opts) {
          const seriesValue = opts.w.globals.series[opts.seriesIndex];
          return `${val} - ${seriesValue !== undefined ? seriesValue : 0}`;
        },
      },
      title: {
        text: '', // Dynamically set the title
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200, // Adjust as needed
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-600 mb-4   ">{title}</h2>
      <div id="chart flex justify-center">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width={chartWidth}
        />
      </div>
    </>
  );
};

export default ApexChart;
