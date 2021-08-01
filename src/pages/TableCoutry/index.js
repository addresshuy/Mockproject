import React from "react";
import "antd/dist/antd.css";
import "../../index.css";
import { Typography, Table } from "antd";

const columns = [
  {
    title: "Country",
    dataIndex: "country",
    render: ({ urlImgae, countryName }) => (
      <>
        <img src={urlImgae} alt="img" style={{ width: 20, marginRight: 5 }} />
        {countryName}
      </>
    ),
    width: 100,
    
  },
  {
    title: "Confirmed",
    dataIndex: "confirmed",
    
    sorter: {
      confirmedNumber: (a, b) => a.confirmed - b.confirmed,
      multiple: 3,
    },
  },
  {
    title: "Recovered",
    dataIndex: "recovered",
    sorter: {
      recoveredNumber: (a, b) => a.recovered - b.recovered,
      multiple: 2,
    },
  },
  {
    title: "Deaths",
    dataIndex: "deaths",
    sorter: {
      deathsNumber: (a, b) => a.deaths - b.deaths,
      multiple: 1,
    },
  },
];

function InfoTable({ countries }) {
  let data = countries.map((country, index) => {
    return {
      key: index + 1,
      country: {
        urlImgae: country.countryInfo.flag,
        countryName: country.country,
      },
      confirmed: country.cases,
      recovered: country.recovered,
      deaths: country.deaths,
    };
  });

  // const onChange = (pagination, filters, sorter, extra) => {};
  return (
    <div className="home__info-table">
      <Typography level={5} className="title">
        Table Data Covid - 19
      </Typography>
      <Table
        columns={columns}
        dataSource={data}
        // onChange={onChange}
        className="table"
      />
    </div>
  );
}

export default InfoTable;
