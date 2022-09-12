import Head from "next/head";
import styles from "../styles/Home.module.css";
import { google } from "googleapis";
import MenuBar from "../components/MenuBar/MenuBar";
import Beds from "../components/Beds/Beds";
import { union } from "../utils/fetch";
// import GoogleSheetsProvider from "react-db-google-sheets";

export default function bed(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beds | Covid Leads for Delhi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container}>
        {/*<Cards data={data} />*/}
        <MenuBar Component={Beds} category="Beds in Delhi" beds={props.beds} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let beds = await union("Beds");
  return { props: { beds } };
}
