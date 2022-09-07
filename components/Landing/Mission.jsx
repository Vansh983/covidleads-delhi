import React from "react";
import styles from "../../styles/Home.module.css";

const Mission = () => {
  return (
    <div className={styles.mission}>
      <div className={styles.content}>
        <div className={styles.blur}></div>
        <h3 style={{ fontSize: "28px" }}>Our Mission</h3>
        <p>
          People in crisis at that time did not have the time or option to look
          after their daily needs, so we tried our best to provide them a simple
          platform for all their needs in these tough times just a click away.
          <br />
          The pandemic hit our country more severely than anyone could have
          imagined. By using our platform Covid patients could easily access all
          types of resources they needed on a single platform.
        </p>
      </div>
      <img
        src="/assets/team-volunteers-holding-donation-boxes-looking-camera 1.png"
        alt=""
      />
    </div>
  );
};

export default Mission;
