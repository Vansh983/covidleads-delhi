import Head from "next/head";
import styles from "../styles/Home.module.css";
import { google } from "googleapis";
import MenuBar from "../components/MenuBar/MenuBar";
import Beds from "../components/Beds/Beds";
import Search from "../components/Search/Search";
// import GoogleSheetsProvider from "react-db-google-sheets";

export default function search(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medicines | Covid Leads for Delhi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container}>
        {/*<Cards data={data} />*/}
        <MenuBar
          Component={Search}
          category="Search all resources"
          beds={props.beds}
        />
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

  //Read Rows
  const getBeds = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Beds",
  });
  const getMeds = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Medicines",
  });
  const getFood = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "FoodServices",
  });
  const getCyl = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "OxygenCylindersConcentrators",
  });
  const getDocs = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Consultants",
  });
  let bedsinit = JSON.stringify(getBeds.data.values);
  let medsinit = JSON.stringify(getMeds.data.values);
  let cylinit = JSON.stringify(getCyl.data.values);
  let docsinit = JSON.stringify(getDocs.data.values);
  let foodinit = JSON.stringify(getFood.data.values);

  let beds = JSON.parse(bedsinit);
  let meds = JSON.parse(medsinit);
  let cyl = JSON.parse(cylinit);
  let docs = JSON.parse(docsinit);
  let food = JSON.parse(foodinit);
  let i = 1;
  for (i = 1; i < meds.length; i++) {
    beds.push(meds[i]);
  }
  for (i = 1; i < food.length; i++) {
    beds.push(food[i]);
  }
  for (i = 1; i < cyl.length; i++) {
    beds.push(cyl[i]);
  }
  for (i = 1; i < docs.length; i++) {
    beds.push(docs[i]);
  }

  console.log(beds);
  beds = beds.slice(1);

  beds.reverse();
  // var beds = bedsarr.reduce(function (acc, cur, i) {
  //   acc[i] = cur;
  //   return acc;
  // }, {});
  return { props: { beds } };
}
