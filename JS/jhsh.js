if ($response.body) {
  var obj = JSON.parse($response.body);
  if (obj.TAG_AD_INFO)｛
    console.log("去除广告1");
    obj.TAG_AD_INFO = [];
  }
  if (obj.MEBCT_AD_INFO)｛
    console.log("去除广告2");
    obj.MEBCT_AD_INFO = [];
  }
  $done({ body: JSON.stringify(obj) });
} else {
  $done({})
  }