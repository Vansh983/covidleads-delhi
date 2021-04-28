import { Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import BedCard from "./BedCard";
// import { googleApi } from "../../pages/api";

const Beds = (props) => {
  console.log(props.beds);
  return (
    <div>
      <Typography variant="h4" component="h4" style={{ textAlign: "center" }}>
        Beds In Delhi
      </Typography>
      <br />
      <Grid container spacing={5} justify="center"></Grid>
    </div>
  );
};

export default Beds;
