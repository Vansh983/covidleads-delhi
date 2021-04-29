import React, { useState } from "react";
import Fuse from "fuse.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BedCard from "../Beds/BedCard";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment, OutlinedInput } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Search({ beds }) {
  const classes = useStyles();

  const [data, setData] = useState(beds);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(beds);
      return;
    }

    const fuse = new Fuse(data, {
      keys: [name],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid item xs={12}>
        <OutlinedInput
          fullWidth
          placeholder="Search"
          id="outlined-adornment-password"
          onChange={(e) => searchData(e.target.value)}
          startAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="start">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
      <div style={{ marginTop: "20px" }}>
        <Grid container spacing={2} justify="center">
          {data.map((bed, index) => (
            <Grid item md={6} xs={10}>
              <BedCard key={bed.title} bed={bed} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Search;
