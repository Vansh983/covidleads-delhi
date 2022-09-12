export const union = async (range) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = process.env.NEXT_PUBLIC_SHEET_ID;
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
