// ===== debug start =====
const url = $request.url;
let body = $response.body;

console.log("[51xykgj] hit:", url);
console.log("[51xykgj] body type:", typeof body, "len:", body ? body.length : 0);

if (!body) {
  console.log("[51xykgj] no body received");
  $done({});
  return;
}

let obj;
try {
  obj = JSON.parse(body);
  console.log("[51xykgj] json ok, keys:", Object.keys(obj).slice(0, 20).join(","));
} catch (e) {
  console.log("[51xykgj] json parse failed:", String(e));
  console.log("[51xykgj] body head:", body.slice(0, 120));
  $done({});
  return;
}
// ===== debug end =====

// 下面保持你原脚本的处理逻辑...

if (!$response.body) {
  $done({});
}
const url = $request.url;
let obj = JSON.parse($response.body);

if (obj?.operationResourceDTO) {
  obj.operationResourceDTO = [];
}

if (url.includes("api.u51.com/generic-config-gateway/api")) {
  if (obj?.meTabConfigExts) {
    let reserve = ['设置']
    obj.meTabConfigExts = obj.meTabConfigExts.filter(item => reserve.includes(item.meTabConfigs[0].title));
  }
}

body = JSON.stringify(obj);
$done({body});
