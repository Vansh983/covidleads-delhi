import Head from "next/head";
import styles from "../styles/Home.module.css";
import routes from "../data/routes";
import { Button, Grid } from "@material-ui/core";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Covid Leads Delhi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container} style={{ textAlign: "center" }}>
        <h1 style={{ color: "#007eff", lineHeight: "40px", fontSize: "35px" }}>
          Covid Resources Delhi
        </h1>
        <div>
          <Grid container spacing={3} justify="center">
            {routes.map((route, index) => (
              <Grid item md={3} xs={10}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  fullWidth
                  href={route.route}
                  style={{ textAlign: "center" }}
                >
                  <h3 style={{ fontFamily: "Poppins", fontSize: 18 }}>
                    {route.name}
                  </h3>
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
