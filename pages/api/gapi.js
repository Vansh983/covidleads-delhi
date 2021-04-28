const { google } = require("googleapis");

export const googleApi = async () => {
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
  let beds = JSON.stringify(getRows.data);
  console.log(beds);
  console.log("Port 5000");
  return beds;
};
