import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";



function PieChart({ totalData }) {

  const [options, setOptions] = useState({});

  const generateOptions = (data) => {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Browser market shares in January, 2018",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
         {name: data.cases}
        ],
      },
    ],
  };
};

  useEffect(() => {
    setOptions(generateOptions(totalData));
  }, [totalData]);
  return (
    <div className="analytics__line-chart">
      <HighchartsReact highcharts={Highchart} options={options} />
    </div>
  );
}

export default PieChart;
