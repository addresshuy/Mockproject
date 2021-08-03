import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import './LineCharts.scss'

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
      type: "line",
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
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 1,
      },
       series: {
        events: {
          legendItemClick: function () {
            if (this.visible) {
              var count = 0;
              for (var index in this.chart.series) {
                if (this.chart.series[index].visible) {
                  count = count + 1;
                  if (count > 1) break;
                }
              }
              if (count === 1) return false;
            }
          },
        },
      },
    },
    series: [
      {
        name: "Cases",
        data: casesHistory,
      },
      {
        name: "Recovered",
        data: recoveredHistory,
      },

      {
        name: "Deaths",
        data: deathsHistory,
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
