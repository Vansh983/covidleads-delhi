import Head from "next/head";
import styles from "../styles/Home.module.css";
import { google } from "googleapis";
import MenuBar from "../components/MenuBar/MenuBar";
import Beds from "../components/Beds/Beds";
import { union } from "../utils/fetch";

export default function food(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Services | Covid Leads for Delhi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container}>
        {/*<Cards data={data} />*/}
        <MenuBar
          Component={Beds}
          beds={props.beds}
          category="Food Services in Delhi"
        />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let food = await union("FoodServices");
  return { props: { food } };
}
