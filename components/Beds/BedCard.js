import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CallIcon from "@material-ui/icons/Call";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const BedCard = (props) => {
  const classes = useStyles();
  console.log(props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Beds
        </Typography>
        <Typography variant="h5" component="h2">
          Ventilator Beds
        </Typography>
        <Typography className={classes.pos} color="primary">
          <DoneAllIcon /> Verified
        </Typography>
        <Typography variant="body2" component="p">
          Max Hospital, Punjabi Bagh, 110029
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" fullWidth variant="contained" color="primary">
          <CallIcon />
          Call Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default BedCard;
