import { Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import BedCard from "./BedCard";
// import { googleApi } from "../../pages/api";

function Beds({ beds, category }) {
  console.log(beds);
  return (
    <div style={{ marginTop: "20px" }}>
      {beds.length ? (
        <Grid container spacing={2} justify="center">
          {beds.map((bed, index) => (
            <Grid item md={6} xs={10}>
              <BedCard key={index} category={category} bed={bed} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <h2>We Don't have any leads for {category} right now.</h2>
      )}
    </div>
  );
}

export default Beds;
