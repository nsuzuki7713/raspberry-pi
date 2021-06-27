import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../credentials.json";
import dotenv from "dotenv";

insertNetworkSpeed().catch((e) => console.log(e));

function getConfig() {
  dotenv.config();

  const sheetId = process.env["SHEET_ID"];
  const sheetTitle = process.env["SHEET_TITLE"];
  if (!sheetId || !sheetTitle) {
    throw new Error("環境変数が正しくありません");
  }

  return {
    sheetId,
    sheetTitle,
  };
}

async function insertNetworkSpeed() {
  const { sheetId, sheetTitle } = getConfig();
  const doc = new GoogleSpreadsheet(sheetId);

  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByTitle[sheetTitle];
  console.log(sheet.title);
  await sheet.setHeaderRow(["createdAt", "mbps"]);

  await sheet.addRow([new Date().toISOString(), "12"], {
    raw: true,
    insert: true,
  });
}
