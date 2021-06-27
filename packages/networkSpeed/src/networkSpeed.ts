import NetworkSpeed from "network-speed";

getNetworkDownloadSpeed().catch((e) => console.log(e));

async function getNetworkDownloadSpeed() {
  const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
  const fileSizeInBytes = 16000000;
  const testNetworkSpeed = new NetworkSpeed();
  const speed = await testNetworkSpeed.checkDownloadSpeed(
    baseUrl,
    fileSizeInBytes
  );
  console.log("download", speed);
}

getNetworkUploadSpeed().catch((e) => console.log(e));

async function getNetworkUploadSpeed() {
  const options = {
    hostname: "www.google.com",
    port: 80,
    path: "/catchers/544b09b4599c1d0200000289",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const fileSizeInBytes = 2000000;
  const testNetworkSpeed = new NetworkSpeed();
  const speed = await testNetworkSpeed.checkUploadSpeed(
    options,
    fileSizeInBytes
  );
  console.log("upload", speed);
}
