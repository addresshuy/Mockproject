import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GlobalActions } from "../redux/rootAction";
import axios from "axios";
import Cards from "./Cards";
import Charts from "./Charts";
import CountrySelect from "../components/Country";
import LineCharts from "./LineCharts";

function DetailCountry({ history }) {
  const dispatch = useDispatch();
  const { countrycode } = useParams();
  const [isLocalLoading, setIsLocalLoading] = useState(true);
  const [detailHistory, setDetailHistory] = useState({});
  const countries = useSelector((state) => state.GlobalReducer.countries);
  const detailCountry = useSelector(
    (state) => state.GlobalReducer.detailCountry
  );
  const getCountry = () => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        dispatch(GlobalActions.setCountries(res.data));
      })
      .catch((err) => console.log(err.response));
  };
  const getDetailCountry = () => {
    axios
      .get(`https://disease.sh/v3/covid-19/countries/${countrycode}`)
      .then((res) => {
        dispatch(GlobalActions.setDetailCountry(res.data));
      })
      .catch((err) => console.log(err.response));
  };
  const getDetailHistory = () => {
    axios
      .get(
        `https://disease.sh/v3/covid-19/historical/${countrycode}?lastdays=all`
      )
      .then((res) => {
        setDetailHistory(res.data.timeline);
        setIsLocalLoading(false);
        dispatch(GlobalActions.setIsLoading(false));
      })
      .catch((err) => console.log(err.response));
  };
  const fetchData = async () => {
    try {
      getCountry();
      getDetailCountry();
      getDetailHistory();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [countrycode]);

  return (
    <>
    <div>
      {isLocalLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>
            <CountrySelect countries={countries} history={history} />
            <Cards detailCountry={detailCountry} />
            <Charts detailHistory={detailHistory} />
            <LineCharts detailHistory={detailHistory} />
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default DetailCountry;
