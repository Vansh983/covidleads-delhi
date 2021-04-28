import Head from "next/head";
import styles from "../styles/Home.module.css";

import MenuBar from "../components/MenuBar/MenuBar";
import Cards from "../components/Cards/Cards";
// import GoogleSheetsProvider from "react-db-google-sheets";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/*<Cards data={data} />*/}
        <MenuBar Component={Cards} />
      </div>
    </div>
  );
}
