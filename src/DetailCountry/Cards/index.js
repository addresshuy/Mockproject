import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

function Cards({ detailCountry }) {
  const { cases, recovered, deaths } = detailCountry;
  return (
    <div>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>{cases}</p>
      </Card>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>{recovered}</p>
      </Card>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>{deaths}</p>
      </Card>
    </div>
  );
}

export default Cards;
