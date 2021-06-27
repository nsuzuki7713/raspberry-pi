import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../credentials.json";
import dotenv from "dotenv";
import { format } from "date-fns";

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

export async function insertNetworkSpeed(
  downloadSpeed: string,
  uploadSpeed: string
): Promise<void> {
  const { sheetId, sheetTitle } = getConfig();
  const doc = new GoogleSpreadsheet(sheetId);

  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByTitle[sheetTitle];
  await sheet.setHeaderRow(["createdAt", "download/mbps", "upload/mbps"]);
  await sheet.addRow(
    [format(new Date(), "yyyy/MM/dd HH:mm:ss"), downloadSpeed, uploadSpeed],
    {
      raw: true,
      insert: true,
    }
  );
}
