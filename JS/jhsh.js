if ($response.内容) {
  var obj = JSON.parse($response.内容);
  if (obj.TAG_AD_INFO)｛
    console.log("去除广告1");
    obj.TAG_AD_INFO = [];
  }
  if (obj.MEBCT_AD_INFO)｛
    console.log("去除广告2");
    obj.MEBCT_AD_INFO = [];
  }
  $done({ 内容: JSON.stringify(obj) });
} else {
  $done({})
}
