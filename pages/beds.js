import Head from "next/head";
import styles from "../styles/Home.module.css";
import { google } from "googleapis";
import MenuBar from "../components/MenuBar/MenuBar";
import Beds from "../components/Beds/Beds";
// import GoogleSheetsProvider from "react-db-google-sheets";

export default function bed(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/*<Cards data={data} />*/}
        <MenuBar Component={Beds} beds={props.beds} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1ogVEfCdn72TQmxjc-3smkanOQKt1_nj8xpncoD7lqu0";
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  //Read Rows
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Beds",
  });
  let bedsinit = JSON.stringify(getRows.data.values);
  let beds = JSON.parse(bedsinit);
  console.log(beds);
  beds = beds.slice(1);

  // var beds = bedsarr.reduce(function (acc, cur, i) {
  //   acc[i] = cur;
  //   return acc;
  // }, {});
  return { props: { beds } };
}
