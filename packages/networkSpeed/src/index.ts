import { getNetworkDownloadSpeed, getNetworkUploadSpeed } from "./networkSpeed";
import { insertNetworkSpeed } from "./spreadsheet";
import cron from "node-cron"


cron.schedule('*/15 * * * *', async () => {
  const [downloadSpeed, uploadSpeed] = await Promise.all([
    getNetworkDownloadSpeed(),
    getNetworkUploadSpeed(),
  ]);

  await insertNetworkSpeed(downloadSpeed, uploadSpeed);
});
