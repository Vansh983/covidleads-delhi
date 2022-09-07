import React from "react";
import styles from "../../styles/Home.module.css";

const Footer = () => {
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
        Team <span style={{ color: "#000" }}>Message</span>
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
      </p>

      <div className={styles.ccc}>
        <h1 style={{ color: "#fff" }}>Thank you for your support</h1>
        <p style={{ color: "#fff" }}>
          The second wave of covid-19 shook our nation to its core. The severity
          of the shortage of resources caused a lot of people their lives.
          Looking at the number of active and increasing cases day by day made
          us realize the extremity of the situation. Innumerous people were
          forced to breathe borrowed air. Basic necessities were in acute
          shortage leaving people no means of surviving this deadly virus.
          During this crisis, many youngsters were trying their best to convey
          messages and provide support to patients by connecting them to scarce
          resources via social media platforms.
        </p>
      </div>
    </div>
  );
};

export default Footer;
