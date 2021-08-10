import Head from "next/head";
import styles from "../styles/Home.module.css";
import { team } from "../data/team";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Covid Leads for Delhi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div
        className={styles.container}
        style={{ textAlign: "center", width: "70%", margin: "auto" }}
      >
        <h1
          style={{
            color: "#007eff",
            lineHeight: "40px",
            fontSize: "35px",
            marginBottom: 0,
          }}
        >
          Covid Leads, Delhi
        </h1>
        <Grid item md={12} xs={12}>
          <p style={{ color: "#007eff" }}>
            This website provides reliable and trusted resources for the people
            in need of beds, medicines, oxygen cylinders and food services. All
            the leads provided on this website are personally verified and not
            just scraped off of public sources and are also updated regularly.
          </p>
        </Grid>
        <div>
          <Grid container spacing={3} justify="center">
            {team.map((mem, index) => (
              <Grid item md={3} xs={10} key={mem.id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      image={mem.img}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {mem.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {mem.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
            </CardActions>*/}
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
