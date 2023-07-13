if ($response.body) {
  var obj = JSON.parse($response.body);
  if (obj.data.TAG_AD_INFO)｛
    console.log("去除广告1");
    obj.TAG_AD_INFO = [];
  }
  if (obj.data.MEBCT_AD_INFO)｛
    console.log("去除广告2");
    obj.MEBCT_AD_INFO = [];
  }
  $done({ body: JSON.stringify(obj) });
} else {
    console.log("去除广告3 返回空对象");
  $done({})
  }