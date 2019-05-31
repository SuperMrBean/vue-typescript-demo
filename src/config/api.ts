interface AxiosPotion {
  url: string
  method: string
  headers?: object
}
interface ApiAction {
  [key: string]: AxiosPotion
}
const apiAction: ApiAction = {
  getUserInfo: { // 获取用户信息
    url: '/api/community/getMyUserInfoForActivity',
    method: 'POST'
  },
  getWeChatInfo: { // 获取微信配置
    url: '/api/community/weixin/getWXJsConfig',
    method: 'POST'
  },
  getActivityInfo: { // 获取活动信息
    url: '/api/community/getActivityInfo',
    method: 'POST'
  }
}
export default apiAction
