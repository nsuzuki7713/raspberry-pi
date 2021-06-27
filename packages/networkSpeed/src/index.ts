import { getNetworkDownloadSpeed, getNetworkUploadSpeed } from "./networkSpeed";
import { insertNetworkSpeed } from "./spreadsheet";

(async () => {
  const [downloadSpeed, uploadSpeed] = await Promise.all([
    getNetworkDownloadSpeed(),
    getNetworkUploadSpeed(),
  ]);

  await insertNetworkSpeed(downloadSpeed, uploadSpeed);
})().catch((e) => console.log(e));
