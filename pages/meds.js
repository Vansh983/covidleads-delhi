import Head from "next/head";
import styles from "../styles/Home.module.css";
import { google } from "googleapis";
import MenuBar from "../components/MenuBar/MenuBar";
import Beds from "../components/Beds/Beds";
import { union } from "../utils/fetch";

export default function bed(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medicines | Covid Leads for Delhi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container}>
        {/*<Cards data={data} />*/}
        <MenuBar
          Component={Beds}
          category="Medicines in Delhi"
          beds={props.beds}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let meds = await union("Medicines");
  return { props: { meds } };
}
