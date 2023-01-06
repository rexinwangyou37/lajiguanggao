
















var ddgksf2013=JSON.parse($response.body);ddgksf2013.materialsList&&(1==ddgksf2013.materialsList.length?(ddgksf2013.materialsList[0].filePath="https://api.dujin.org/bing/m.php",ddgksf2013.advertParam.skipTime=1,delete ddgksf2013.materialsList[0].billId,ddgksf2013.materialsList[0].billMaterialsId="6491"):ddgksf2013.materialsList.length>1&&(ddgksf2013.materialsList=[{}])),$done({body:JSON.stringify(ddgksf2013)});
