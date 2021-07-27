import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const urlconfim = "https://covid19.mathdro.id/api/confirmed";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths };
  } catch (error) {
    return error;
  }
};

export const fetchDataCovid = async () => {
  try {
    const { data } = await axios.get(`${urlconfim}`);

    return data.map(({ countryRegion, confirmed, recovered, deaths }) => ({
      countryRegion,
      confirmed,
      recovered,
      deaths,
    }));
  } catch (error) {
    return error;
  }
};

// Instead of Global, it fetches the daily data for the US
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      recovered: dailyData.recovered.total,
      deaths: dailyData.deaths.total,
      
      date: dailyData.reportDate,
    }));
    return modifiedData;

  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
