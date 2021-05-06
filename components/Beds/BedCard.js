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
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: "0px 0px 20px 2px #e4e4e48f",
    paddingBottom: 5,
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
  butt: {
    boxShadow: "0px 0px 20px 2px #e4e4e48f",
    color: "#fff",
    fontFamily: "Poppins",
    fontWeight: "800",
    fontSize: 15,
    padding: "10px 0px",
  },
  pos: {
    marginBottom: 12,
    fontSize: 16,
  },
  head: {
    margin: "5px 0px",
    fontSize: 20,
  },
  p: {
    fontSize: 15,
    margin: 0,
  },
});

function BedCard({ bed, category }) {
  const [name, location, phoneNumber, lastVerified, timings, website] = bed;
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
  const handleLink = () => {
    router.push(website);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <h5 className={classes.title}>{category}</h5>
        <h2 className={classes.head}>
          {name}
          &nbsp;
        </h2>
        <Typography className={classes.pos} color="primary">
          <DoneAllIcon /> Verified at {lastVerified}
        </Typography>
        <p className={classes.p}>{location}</p>
        <p style={{ color: "#007ef3", margin: 0 }}>{timings}</p>
        <p style={{ marginTop: 5, marginBottom: 0, color: "#007ef3" }}>
          {phoneNumber}
        </p>
      </CardContent>
      {phoneNumber && (
        <CardActions>
          <Button
            onClick={handleCall}
            size="large"
            fullWidth
            className={classes.butt}
            variant="contained"
            color="primary"
          >
            <CallIcon />
            Call
          </Button>
          <Button
            onClick={handleMsg}
            style={{
              backgroundColor: "#00c300",
              color: "#fff",
            }}
            className={classes.butt}
            size="large"
            fullWidth
            variant="contained"
          >
            <WhatsAppIcon />
            Whatsapp
          </Button>
        </CardActions>
      )}
      {website && (
        <CardActions style={{ paddingTop: 0 }}>
          <Button
            onClick={handleLink}
            size="large"
            fullWidth
            className={classes.butt}
            variant="contained"
            color="primary"
          >
            <LanguageIcon />
            Website
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default BedCard;
