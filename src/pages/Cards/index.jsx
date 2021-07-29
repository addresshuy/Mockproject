import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

function Cards({ totalData }) {
  const { cases, recovered, deaths } = totalData;
  return (
    <div className={styles.container}>
      <Card
        style={{ backgroundColor: "#f7ebeb", width: 300, textAlign: "center" }}
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.card, styles.infected)}
      >
        <CardContent>
          <Typography
            style={{ fontWeight: "bold", color: "#5826a4" }}
            gutterBottom
          >
            Infected
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", color: "#FF392B" }}
          >
            <CountUp start={0} end={(cases)} duration={1} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date().toDateString()}
          </Typography>
        </CardContent>
      </Card>

      <Card
        style={{ backgroundColor: "#f7ebeb", width: 300, textAlign: "center" }}
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.card, styles.recovered)}
      >
        <CardContent>
          <Typography
            style={{ fontWeight: "bold", color: "#5826a4" }}
            gutterBottom
          >
            Recovered
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", color: "#00945E" }}
          >
            <CountUp start={0} end={(recovered)} duration={1} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date().toDateString()}
          </Typography>
        </CardContent>
      </Card>

      <Card
        style={{ backgroundColor: "#f7ebeb", width: 300, textAlign: "center" }}
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.card, styles.deaths)}
      >
        <CardContent>
          <Typography
            style={{ fontWeight: "bold", color: "#5826a4" }}
            gutterBottom
          >
            Deaths
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", color: "#222" }}
          >
            <CountUp start={0} end={(deaths)} duration={1} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date().toDateString()}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default Cards;
