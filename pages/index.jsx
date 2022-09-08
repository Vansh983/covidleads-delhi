import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, Grid, Card } from "@material-ui/core";
import Story from "../components/Landing/Story";
import Mission from "../components/Landing/Mission";
import { team } from "../data/team";
import Footer from "../components/Landing/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Covid Leads for Delhi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.landing} style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "#007eff",
            lineHeight: "40px",
            fontSize: "45px",
            marginBottom: 0,
          }}
        >
          Covid Leads, <span style={{ color: "#000" }}>Delhi</span>
        </h1>
        <Grid item md={6} xs={12}>
          <p>
            Covid Leads Delhi is a non-profit initiative to provide reliable and
            trusted resources for people in need of beds, medicines, oxygen
            cylinders, and food services. All the leads provided on our platform
            are personally verified and not just scraped off of public sources.
            Our volunteers work on the backend of our platform to provide the
            best service to the people in need of these resources. All the leads
            for the resources are re-verified periodically by our verification
            team so that the people in need of the resource do not find a dead
            end. Our only motive is to provide a clear means of communication
            between the resource provider and the person in need of the
            resource.
          </p>
        </Grid>
      </div>
      <Story />
      <Mission />
      <div
        style={{
          color: "#007eff",
          lineHeight: "40px",
          fontSize: "40px",
          marginBottom: 0,
          fontWeight: "bold",
        }}
        className={styles.headImg}
      >
        Founding <span style={{ color: "#000" }}>Members</span>
      </div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={styles.cards}
      >
        {team.map((mem, index) => (
          <Grid item md={3} xs={10} key={mem.id}>
            <img src={mem.img} alt="" />
            <h3 style={{ marginBottom: 0, fontSize: "24px" }}>{mem.name}</h3>
            {/*<p style={{ marginTop: 10 }}>{mem.title}</p>*/}
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
}
