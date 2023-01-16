let body = JSON.parse($response.body)
    body.data.forEach(item => {
        if (item.posterStandName === "首页-弹窗广告") {
            item.adList = []
        }
    })
    $done({body: JSON.stringify(body)})
