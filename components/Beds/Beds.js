import { Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import BedCard from "./BedCard";
// import { googleApi } from "../../pages/api";

function Beds({ beds }) {
  return (
    <div>
      <Grid container spacing={5} justify="center">
        {beds.map((bed, index) => (
          <Grid item md={6}>
            <BedCard key={index} bed={bed} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Beds;
