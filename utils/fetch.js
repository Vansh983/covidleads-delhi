export const union = async (range) => {
  const auth = new google.auth.GoogleAuth({
    // Directly used keys here for reference
    // The keys are connected to a dummy account
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
    range: range,
  });
  let prodinit = JSON.stringify(getRows.data.values);
  let products = JSON.parse(prodinit);
  console.log(products);
  products = beds.slice(1);

  return products.reverse();
};
