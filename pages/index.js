import Head from "next/head";
import styles from "../styles/Home.module.css";
import routes from "../data/routes";
import { Button, Grid } from "@material-ui/core";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Covid Leads for Delhi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container} style={{ textAlign: "center" }}>
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
        <Grid item md={6} xs={12}>
          <p style={{ color: "#007eff" }}>
            This website provides reliable and trusted resources for the people
            in need of beds, medicines, oxygen cylinders and food services. All
            the leads provided on this website are personally verified and not
            just scraped off of public sources and are also updated regularly.
          </p>
          <p style={{ color: "red" }}>
            Disclaimer: Verification of leads pertains to availability of
            resources only. Do not pay in advance for any resource.
          </p>
        </Grid>
        <div>
          <Grid container spacing={3} justify="center">
            {routes.map((route, index) => (
              <Grid item md={4} xs={10}>
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
