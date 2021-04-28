import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CallIcon from "@material-ui/icons/Call";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { useRouter } from "next/router";

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

function BedCard({ bed }) {
  const [name, location, phoneNumber, lastVerified] = bed;
  const classes = useStyles();
  const router = useRouter();
  const handleMsg = () => {
    let msg =
      "Hello. I am looking for " +
      name +
      " in Delhi on an urgent basis. Please let me know if it is available with you. Thank you.";
    let URL = "whatsapp://send?text=" + msg + "&phone=91" + phoneNumber;

    router.push(URL);
  };
  const handleCall = () => {
    let URL = "tel:" + phoneNumber;

    router.push(URL);
  };

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
          {name}
        </Typography>
        <Typography className={classes.pos} color="primary">
          <DoneAllIcon /> Verified
        </Typography>
        <Typography variant="body2" component="p">
          {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{ padding: "10px 0px" }}
          onClick={handleCall}
          size="large"
          fullWidth
          variant="contained"
          color="primary"
        >
          <CallIcon />
          Call
        </Button>
        <Button
          onClick={handleMsg}
          style={{ padding: "10px 0px" }}
          size="large"
          fullWidth
          variant="contained"
          color="secondary"
        >
          <WhatsAppIcon />
          Whatsapp
        </Button>
      </CardActions>
    </Card>
  );
}

export default BedCard;
