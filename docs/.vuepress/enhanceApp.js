import baiduAnalytics from 'vue-baidu-analytics'

export default ({ Vue, router }) => {
  Vue.use(baiduAnalytics, {
    router: router,
    siteIdList: [
      // 主站
      '8dca8e2532df48ea7f1b15c714588691',
      // 百度统计-站长版
      'e351e4dfe35d23a0f2a26d9be8433cf5',
      // 百度统计-客户版
      'fdf049a2d869a3b673764f3ce792675f'
    ],
    isDebug: false
  });
};