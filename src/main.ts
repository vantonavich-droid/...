import * as BunnySDK from "https://esm.sh/@bunny.net/edgescript-sdk@0.11.2";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log("Starting server...");

BunnySDK.net.http.servePullZone({ url: "https://echo.free.beeceptor.com/" }).onOriginRequest(
  async (ctx) => {
    const req = ctx.request;
    console.log(`[INFO]: ${req.method} - ${req.url}`);
    await sleep(1);
    return ctx.request;
  },
).onOriginResponse(async (ctx) => {
  const res = ctx.response;
  console.log(`[INFO]: ${res.status}`);
  await sleep(1);
  return ctx.response;
});
