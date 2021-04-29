import React, { useState, useEffect } from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";
import { fetchData } from "../../pages/api";

class Cards extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    console.log(data.confirmed);
    if (!data.confirmed) {
      return "Loading...";
    }

    return (
      <div className={styles.container}>
        <Grid container justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={6}
            lg={4}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <h3>Infected</h3>
              <h1>
                <CountUp
                  start={0}
                  end={data.confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </h1>
              <h4>{new Date(data.lastUpdate).toDateString()}</h4>
              <p>Active cases of covid</p>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={6}
            lg={4}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <h3>Recovered</h3>
              <h1>
                <CountUp
                  start={0}
                  end={data.recovered.value}
                  duration={2.5}
                  separator=","
                />
              </h1>
              <h4>{new Date(data.lastUpdate).toDateString()}</h4>
              <p>Active recoveries from covid</p>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={6}
            lg={4}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <h3>Deaths</h3>
              <h1>
                <CountUp
                  start={0}
                  end={data.deaths.value}
                  duration={2.5}
                  separator=","
                />
              </h1>
              <h4>{new Date(data.lastUpdate).toDateString()}</h4>
              <p>number of Deaths by covid</p>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Cards;
