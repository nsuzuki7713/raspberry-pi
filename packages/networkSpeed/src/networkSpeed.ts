import NetworkSpeed from "network-speed";

export async function getNetworkDownloadSpeed(): Promise<string> {
  const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
  const fileSizeInBytes = 16000000;
  const testNetworkSpeed = new NetworkSpeed();
  const res = await testNetworkSpeed.checkDownloadSpeed(
    baseUrl,
    fileSizeInBytes
  );

  return res.mbps;
}

export async function getNetworkUploadSpeed(): Promise<string> {
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
  const res = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);

  return res.mbps;
}
