import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../App.module.css";
import Cards from "./Cards";
import Charts from "./Charts";
import TableCountry from "./TableCoutry";
import Layout from "../HOCs/Layout";
import Map from "./MapCovid";
import { GlobalActions } from "../redux/rootAction";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function Page() {
  const dispatch = useDispatch();
  const [isLocalLoading, setIsLocalLoading] = useState(true);
  const [historyData, setHistoryData] = useState({});
  const [mapData, setMapData] = useState({});
  const countries = useSelector((state) => state.GlobalReducer.countries);
  const totalData = useSelector((state) => state.GlobalReducer.totalData);

  const getCountries = () => {
    axios("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        dispatch(GlobalActions.setCountries(res.data));
      })
      .catch((err) => console.log("countries: ", err.response));
  };

  const getTotalData = () => {
    axios("https://disease.sh/v3/covid-19/all")
      .then((res) => {
        dispatch(GlobalActions.setTotalData(res.data));
      })
      .catch((err) => console.log(err.response));
  };

  const getMapData = () => {
    import("@highcharts/map-collection/custom/world.geo.json").then((res) =>
      setMapData(res)
    );
  };

// const getMapData = () =>{
//   import('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json').then((res) =>{
//     setMapData(res);
//   })
// }
  const getHistoryInfo = () => {
    axios("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        setHistoryData(res.data);
        setIsLocalLoading(false);
        dispatch(GlobalActions.setIsLoading(false));
      })
      .catch((err) => console.log(err.response));
  };
  const fetchData = async () => {
    try {
      getCountries();
      getTotalData();
      getMapData();
      getHistoryInfo();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards totalData={totalData} />
      <Charts historyData={historyData} />
      <TableCountry countries={countries} />
      <Map mapData={mapData} countries={countries} />
    </div>
  );
}

export default Layout(Page);
