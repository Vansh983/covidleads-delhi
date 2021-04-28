import { Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import BedCard from "./BedCard";
import { fetchData } from "../../pages/api";

class Beds extends React.Component {
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

    return (
      <div>
        <Typography variant="h4" component="h4" style={{ textAlign: "center" }}>
          Beds In Delhi
        </Typography>
        <br />
        <Grid container spacing={5} justify="center">
          <Grid item md={4} xs={10}>
            <BedCard />
          </Grid>
          <Grid item md={4} xs={10}>
            <BedCard />
          </Grid>
          <Grid item md={4} xs={10}>
            <BedCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Beds;
