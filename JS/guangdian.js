
let obj = JSON.parse($response.body)
    obj.data.filter(item => 
        item.posterStandName !== "首页-弹窗广告")
    );
body = JSON.stringify(obj);
$done({body});
