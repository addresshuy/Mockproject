import React from "react";
import styles from "../App.module.css";
import Cards from "./Cards";
import Charts from "./Charts";
import Country from "./Country";
import TableCountry from "./TableCoutry";

import { fetchData } from "./API";


class Page extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
       
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <TableCountry />
        
      </div>
    );
  }
}

export default Page;
