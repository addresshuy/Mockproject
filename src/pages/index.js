import React, { useEffect, useState } from "react";
import styles from "../App.module.css";
import Cards from "./Cards";
import Charts from "./Charts";
import Country from "./Country";
import TableCountry from "./TableCoutry";
import Layout from "../HOCs/Layout";
import Map from "./MapCovid";
import { fetchData } from "./API";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function Page() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [mapData, setMapData] = useState({});
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountries(countries);
          setMapCountries(data);
        });
    };

    getCountriesData();
  }, []);
  useEffect(() => {
    import("@highcharts/map-collection/custom/world.geo.json").then((res) =>
      setMapData(res)
    );
  }, []);

  useEffect(() => {
    const data = async () => {
      setData(await fetchData());
    };
    data();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Country handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
      <TableCountry />
      <Map mapData={mapData} countries={countries} />
    </div>
  );
}

export default Layout(Page);
