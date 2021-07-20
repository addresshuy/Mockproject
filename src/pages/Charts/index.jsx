import React, { useState, useEffect } from "react";
import { fetchDataCovid } from "../API";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";


const Chart = ({ data: { confirmed, recovered, deaths, dateChecked: date }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDataCovid());
    };
    fetchAPI();
  }, []);


  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: date,
        datasets: [
          {
            data: confirmed,
            label: "Infected",
            borderColor: "#3333ff",
            fill: false,
          },
          {
            data: recovered,
            label: "recovered",
            borderColor: "red",
            backgroundColor: "rgba(255, 255, 0, 0.5)",
            fill: true,
          },
          {
            data: deaths,
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
      options={{
        scales: {
          xAxes: [{ gridLines: { display: false } }],
          yAxes: [{ gridLines: { display: false } }],
        },
      }}
    />
  ) : null;

  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>
      {country ? BarChart : lineChart}
      <div></div>
    </div>
  );
};
export default Chart;
