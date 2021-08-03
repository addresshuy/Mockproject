import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import Charts from "./Charts";
import TableCountry from "./TableCoutry";
import Layout from "../HOCs/Layout";
import Map from "./MapCovid";
import { Spin } from "antd";
import CountrySelector from "../components/CountrySelect";
import { GlobalActions } from "../redux/rootAction";
import "leaflet/dist/leaflet.css";
import "./Page.scss";
import axios from "axios";

function Page({ history }) {
  const dispatch = useDispatch();
  const [isLocalLoading, setIsLocalLoading] = useState(true);
  const [historyData, setHistoryData] = useState({});
  const [mapData, setMapData] = useState({});
  const [country, setCountry] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const countries = useSelector((state) => state.GlobalReducer.countries);
  const totalData = useSelector((state) => state.GlobalReducer.totalData);

  const getCountries = () => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        dispatch(GlobalActions.setCountries(res.data));
      })
      .catch((err) => console.log("countries: ", err.response));
  };
  const getCountriesData = () => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        const country = res.data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        setMapZoom(4);
        setCountry(country);
        setMapCountries(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
      getCountriesData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLocalLoading ? (
        <div className="example">
          <Spin />
        </div>
      ) : (
        <div className="pages__container">
          <CountrySelector countries={countries} history={history} />
          <Cards totalData={totalData} />
          <Charts historyData={historyData} />
          <TableCountry countries={countries} />
          <Map countries={mapCountries} center={mapCenter} zoom={mapZoom} />
        </div>
      )}
    </>
  );
}

export default Layout(Page);
