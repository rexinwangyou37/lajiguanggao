// 51信用卡管家 - 首页/我的页净化（Loon HTTP-RESPONSE）

(function () {
  const _url = ($request && $request.url) ? $request.url : "";
  const _body = ($response && $response.body) ? $response.body : "";

  // 没有 body 直接退出（一定要 return）
  if (!_body) {
    $done({});
    return;
  }

  let obj;
  try {
    obj = JSON.parse(_body);
  } catch (e) {
    // 不是 JSON 就不处理
    $done({});
    return;
  }

  // ===== 1) 首页：operationResourceDTO 清空（你原逻辑保留）=====
  if (obj && obj.operationResourceDTO) {
    obj.operationResourceDTO = [];
  }

  // ===== 2) 我的页：只保留“设置”（修正 URL 判断 + 防崩溃）=====
  // 你命中的 URL 是：
  // https://api.u51.com/generic-config-gateway/api/v3/guanjia/me-tab2/config?...
  if (_url.includes("/generic-config-gateway/api/") && _url.includes("/guanjia/") && _url.includes("/me-tab")) {
    if (Array.isArray(obj.meTabConfigExts)) {
      const reserveTitles = new Set(["设置"]);
      obj.meTabConfigExts = obj.meTabConfigExts.filter(item => {
        try {
          const title = item?.meTabConfigs?.[0]?.title;
          return reserveTitles.has(title);
        } catch (e) {
          return false;
        }
      });
    }
  }

  // 输出
  const out = JSON.stringify(obj);
  $done({ body: out });
})();
