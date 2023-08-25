import Head from "next/head";
import styles from "../styles/Home.module.css";
import MenuBar from "../components/MenuBar/MenuBar";
import Beds from "../components/Beds/Beds";
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
        <MenuBar
          Component={Beds}
          category="Beds in Delhi"
          beds={[
            {
              Name: "Normal Beds",
              Location: "HAHC Hospital Hamdard Nagar Delhi",
              PhoneNumber: "8588890999",
              LastVerified: "3:24pm, 6 May",
              ActiveNotActive: "",
              WebsiteLink: "",
            },
            {
              Name: "icu and oxygen beds",
              Location:
                "Aclepius Hospital, Plot No. 734, Haldoni Mod, Greater Noida(Call directly) (ICU bed might be available by 7 pm, 6 May)",
              PhoneNumber: "1206051177",
              LastVerified: "1:45pm, 6 May",
              ActiveNotActive: "",
              WebsiteLink: "",
            },
            {
              Name: "Oxygen and general (only for patients above 80 spo2 level)",
              Location: "Asclipius Hospital, Noida",
              PhoneNumber: "8285124442",
              LastVerified: "3:50pm, 6 May",
              ActiveNotActive: "",
              WebsiteLink: "",
            },
            {
              Name: "Oxygen Beds",
              Location:
                "Jay Hospital, Block E, New Roshanpura, Najafgarh, Delhi, 110043",
              "Phone Number": "9560432605",
              "Last verified": "6:18pm, 6 May",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "Oxygen Centre(beds)",
              Location:
                "Golf course ext road opp w pratiksha hospital, gurgaon",
              "Phone Number": "9990691313",
              "Last verified": "9:20:00 AM 7 may",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "ICU beds",
              Location: "Nashaa Mukti Kendra Faridabad Sector 14",
              "Phone Number": "9315222368",
              "Last verified": "9:23 am, 7 may",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "Oxygen beds",
              Location:
                "Tahirpur Rd, GTB Enclave, Dilshad Garden, New Delhi, Delhi 110095",
              "Phone Number": "9625900725",
              "Last verified": "5:50, 7 may",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "oxygen beds",
              Location: "lok nayak hospital",
              "Phone Number": "",
              "Last verified": "8:18pm 7may",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "icu and oxygen beds",
              Location: "RRM hospital",
              "Phone Number": "",
              "Last verified": "12:45am 8may",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "oxygen beds",
              Location: "Deen dayaal upadhyay hospial",
              "Phone Number": "",
              "Last verified": "2:07am 8may",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "Oxygen Beds",
              Location: "PT. RRM Hospital",
              "Phone Number": "9555438760",
              "Last verified": "1.32PM, 8May",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "oxygen beds",
              Location: "sunrise hospital",
              "Phone Number": "",
              "Last verified": "2:06pm 8may",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "oxygen beds",
              Location: "sardar vallabhai patel, covid hospital",
              "Phone Number": "",
              "Last verified": "1:36pm 8may",
              "Active / Not Active": "",
              "Website Link": "",
            },
            {
              Name: "ICU beds",
              Location: "deep chand bandhu hospital, ashok vihar,ph4",
              "Phone Number": "",
              "Last verified": "2:30pm 8may",
              "Active / Not Active": "",
              "Website Link": "",
            },
          ]}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let beds = [];
  return { props: { beds } };
}
