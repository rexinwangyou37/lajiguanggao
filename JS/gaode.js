  case "高德地图-首页顶部消息横幅":
    try {
      let obj = JSON.parse(body);
      if (obj.msgs) delete obj.msgs;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`高德地图-首页顶部消息横幅, 出现异常`);
    }
    break;
  case "高德地图-我的":
    try {
      let obj = JSON.parse(body);
      let cardList = obj.data.cardList;
      let newCardList = [];
      for (let item of cardList) {
        if (
          item?.dataKey === "AnnualBillCardV2" || // 年度报告
          item?.dataKey === "DiyMap_function" || // DIY 地图
          item?.dataKey === "GameExcitation" || // 小德爱消除
          item?.dataKey === "GdRecommendCard" || // 高德推荐
          item?.dataKey === "GoodsShelvesCard" || // 精选服务
          item?.dataKey === "PopularActivitiesCard" // 热门活动
          // item?.dataKey === "SceneVehicleCard_function" || // 我的车辆
          // item?.dataKey === "SceneVehicleCard_recommend" // 我的车辆
        ) {
          continue;
        }
        newCardList.push(item);
      }
      obj.data.cardList = newCardList;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`高德地图-我的, 出现异常`);
    }
    break;
