import { Grid } from "@material-ui/core";
import React from "react";
import styles from "../../styles/Home.module.css";

const Story = () => {
  return (
    <div className={styles.story}>
      <div
        style={{
          color: "#007eff",
          lineHeight: "40px",
          fontSize: "45px",
          marginBottom: 0,
          fontWeight: "bold",
        }}
        className={styles.headImg}
      >
        Our <span style={{ color: "#000" }}>Story</span>
      </div>
      <p>
        The second wave of covid-19 shook our nation to its core. The severity
        of the shortage of resources caused a lot of people their lives. Looking
        at the number of active and increasing cases day by day made us realize
        the extremity of the situation. Innumerous people were forced to breathe
        borrowed air. Basic necessities were in acute shortage leaving people no
        means of surviving this deadly virus. During this crisis, many
        youngsters were trying their best to convey messages and provide support
        to patients by connecting them to scarce resources via social media
        platforms.
        <br />
        <br />
        <br />
        Witnessing everyone help in every possible way they could, we devised a
        plan to contribute in our way by using the technical skills and
        connections to build an online platform to bring these volunteers
        together so that they could reach out to many more people. This idea
        started with a group of three people which eventually grew into a group
        of 53 volunteers. Our team young volunteers worked meticulously on
        verifying leads every day since the beginning of the second wave. All
        these verified leads were being updated regularly for the availability
        of various resources.
      </p>
      <div className={styles.stats}>
        <div>
          <h4>10,000+</h4>
          <p style={{ textAlign: "center" }}>Active Users</p>
        </div>
        <div>
          <h4>1,200+</h4>
          <p style={{ textAlign: "center" }}>Users</p>
        </div>
        <div>
          <h4>50+</h4>
          <p style={{ textAlign: "center" }}>Volunteers</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
