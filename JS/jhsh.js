if ($response.内容) {
  var obj = JSON.parse($response.内容);
    obj.TAG_AD_INFO = [];
    obj.MEBCT_AD_INFO = [];

  $done({ 内容: JSON.stringify(obj) });
} else {
  $done({})
}
