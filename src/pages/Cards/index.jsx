import React from "react";
import "./Cards.scss";
import CountUp from "react-countup";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Typography } from "antd";

function Cards({ totalData, countries, history }) {
  const { Title } = Typography;
  const { cases, recovered, deaths } = totalData;
  return (
    <>
      <div className="cards__container">
        <Card bordered={false} className="cards__cases" style={{ width: 350 }}>
          <Title level={3} className="cards__cases">Cases</Title>
          <CountUp start={0} end={cases} duration={3} separator="," />
          <br></br>
          {new Date().toDateString()}
        </Card>

        <Card
          bordered={false}
          className="cards__recovered"
          style={{ width: 350 }}
        >
          <Title level={3} className="cards__recovered">Recovered</Title>
          <CountUp start={0} end={recovered} duration={3} separator="," />
          <br></br>
          {new Date().toDateString()}
        </Card>

        <Card bordered={false} className="cards__deaths" style={{ width: 350 }}>
          <Title level={3} className="cards__deaths">Deaths</Title>
          <CountUp start={0} end={deaths} duration={3} separator="," />{" "}
          <br></br>
          {new Date().toDateString()}
        </Card>
      </div>
    </>
  );
}
export default Cards;
