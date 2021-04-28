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
    fontSize: 15,
    fontWeight: "400",
    marginTop: "3px",
    marginBottom: "0px",
  },
  pos: {
    marginBottom: 12,
    fontSize: 16,
  },
  head: {
    margin: "5px 0px",
    fontSize: 24,
  },
  p: {
    fontSize: 15,
    margin: 0,
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
        <h5 className={classes.title}>Beds</h5>
        <h2 className={classes.head}>{name}</h2>
        <Typography className={classes.pos} color="primary">
          <DoneAllIcon /> Verified at {lastVerified}
        </Typography>
        <p className={classes.p}>{location}</p>
      </CardContent>
      <CardActions>
        <Button
          style={{
            padding: "10px 0px",
            fontFamily: "Poppins",
            fontWeight: "800",
            fontSize: 15,
          }}
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
          style={{
            padding: "10px 0px",
            backgroundColor: "#00c300",
            color: "#fff",
            fontFamily: "Poppins",
            fontWeight: "800",
            fontSize: 15,
          }}
          size="large"
          fullWidth
          variant="contained"
        >
          <WhatsAppIcon />
          Whatsapp
        </Button>
      </CardActions>
    </Card>
  );
}

export default BedCard;
