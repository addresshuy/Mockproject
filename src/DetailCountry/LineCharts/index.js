import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";

const generateOptions = (detailHistory) => {
  const categories =
    detailHistory.cases &&
    Object.keys(detailHistory.cases).reverse().slice(0, 14).reverse();
  const casesHistory =
    detailHistory.cases &&
    Object.values(detailHistory.cases).reverse().slice(0, 14).reverse();
  const recoveredHistory =
    detailHistory.recovered &&
    Object.values(detailHistory.recovered).reverse().slice(0, 14).reverse();
  const deathsHistory =
    detailHistory.deaths &&
    Object.values(detailHistory.deaths).reverse().slice(0, 14).reverse();
  return {
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Average Rainfall",
    },
    subtitle: {
      text: "Source: WorldClimate.com",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Rainfall (mm)",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Deaths",
        data: deathsHistory,
      },
      {
        name: "Recovered",
        data: recoveredHistory,
      },
      {
        name: "Confirmed",
        data: casesHistory,
      },
    ],
  };
};
function BarChart({ detailHistory }) {
  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions(generateOptions(detailHistory));
  }, [detailHistory]);
  return (
    <div className="detail__bar-chart">
      <HighchartsReact highcharts={Highchart} options={options} />
    </div>
  );
}

export default BarChart;
