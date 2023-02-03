if (!$response.body) {
  $done({});
}
const url = $request.url;
let obj = JSON.parse($response.body);

if (obj?.operationResourceDTO) {
  for (let i = 0; i < obj.operationResourceDTO.length; i++) {
    obj.operationResourceDTO[i].endTime = "2040-01-02 00:00:00";
    obj.operationResourceDTO[i].startTime = "2040-01-01 00:00:00";
  }
}

if (url.includes("api.u51.com/generic-config-gateway/api")) {
  if (obj?.meTabConfigExts) {
    let reserve = ['设置', '我的账单']
    obj.meTabConfigExts = obj.meTabConfigExts.filter(item => reserve.includes(item.meTabConfigs[0].title));
  }
}

body = JSON.stringify(obj);
$done({body});
