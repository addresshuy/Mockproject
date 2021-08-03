import React from "react";
import "antd/dist/antd.css";
import "./CardsDetail.scss";
import { Card } from "antd";
import CountUp from "react-countup";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

function Cards({ detailCountry }) {
  const { Title } = Typography;
  const { t } = useTranslation();
  const { cases, recovered, deaths, todayCases, todayRecovered, todayDeaths } =
    detailCountry;
  return (
    <>
      <div className="cards__container">
        <Card bordered={false} className="cards__cases" style={{ width: 350 }}>
          <Title level={3} className="cards__cases">
            {t("Detail.Card.Confirmed")}
          </Title>
          <CountUp start={0} end={cases} duration={1} separator="," />
          <br></br>
          + <CountUp start={0} end={todayCases} duration={1} separator="," />
          <br></br>
          {new Date().toDateString()}
        </Card>

        <Card
          bordered={false}
          className="cards__recovered"
          style={{ width: 350 }}
        >
          <Title level={3} className="cards__recovered">
            {t("Detail.Card.Recovered")}
          </Title>
          <CountUp start={0} end={recovered} duration={1} separator="," />
          <br></br>
          
          + <CountUp start={0} end={todayRecovered} duration={1} separator="," />
          <br></br>
          {new Date().toDateString()}
        </Card>

        <Card bordered={false} className="cards__deaths" style={{ width: 350 }}>
          <Title level={3} className="cards__deaths">
            {t("Detail.Card.Deaths")}
          </Title>
          <CountUp start={0} end={deaths} duration={1} separator="," />
          <br></br>
          + <CountUp start={0} end={todayDeaths} duration={1} separator="," />
          <br></br>
          {new Date().toDateString()}
        </Card>
      </div>
    </>
  );
}

export default Cards;
