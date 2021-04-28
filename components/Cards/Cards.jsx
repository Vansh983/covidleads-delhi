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
        <Grid container spacing={5} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            lg={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={data.confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(data.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">Active cases of covid</Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            lg={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={data.recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(data.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Active recoveries from covid
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            lg={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={data.deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(data.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">number of Deaths by covid</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Cards;
