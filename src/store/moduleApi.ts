import { xhrService } from '../config/network'
import router from '../router'
import apiActions from '../config/api'
import Toggle from '../config/Toggle'
const ignoreCheckLoginPathArr: string[] = [] // 不检查登录状态的页面 '/login'
interface PayloadMutation {
  apiAction: string,
  data: any,
}
const modulesApi = {
  namespaced: true, // 独立命名空间
  state: {

  },
  actions: {

  },
  mutations: {
    SET_TOGGLE_INIT (state: any, { apiAction }: PayloadMutation) {
      state[apiAction].toggle.setInit()
    },
    SET_TOGGLE_LOADING (state: any, { apiAction }: PayloadMutation) {
      state[apiAction].toggle.setLoading()
    },
    SET_TOGGLE_SUCCESS (state: any, { apiAction }: PayloadMutation) {
      state[apiAction].toggle.setSuccess()
    },
    SET_TOGGLE_FAIL (state: any, { apiAction }: PayloadMutation) {
      state[apiAction].toggle.setFail()
    },
    SET_TOGGLE_EMPTY (state: any, { apiAction }: PayloadMutation) {
      state[apiAction].toggle.setEmpty()
    },
    SET_API_DATA (state: any, { apiAction, data }: PayloadMutation) {
      state[apiAction].data = data
    }
  }
}
// 导入接口配置生成对应state
for (let i in apiActions) {
  let obj = {
    toggle: new Toggle(),
    data: null
  }
  Object.assign(modulesApi.state, { [i]: obj })
}
interface PayloadAction {
  params?: object,
  options?: object
}
// 将api中定义的apiActions制作成action
for (let i in apiActions) {
  let obj = {
    [i]: ({ commit, dispatch, state, rootState }: any, { params, ...options }: PayloadAction = {}) => {
      let apiAction = i
      const webServiceParams = Object.assign({}, apiActions[i], { params, ...options })
      commit('SET_TOGGLE_LOADING', { apiAction })
      return new Promise((resolve, reject) => {
        xhrService(webServiceParams).then(response => {
          const apiData: Ajax.AjaxResponse = response.data
          if (apiData.status === 200) { // 接口返回成功状态
            commit('SET_TOGGLE_SUCCESS', { apiAction })
            commit('SET_API_DATA', { apiAction, data: apiData.data })
            resolve(apiData)
          } else {
            if (apiData.status === 402) {
              const isIgnore = ignoreCheckLoginPathArr.find(n => router.app.$route.path.match(n) !== null)
              if (!isIgnore) {
                // TODO 跳转到登录页
                // console.log('gotoLogin')
              }
            }
            commit('SET_TOGGLE_FAIL', { apiAction })
            reject(apiData)
          }
        }).catch(error => {
          commit('SET_TOGGLE_FAIL', { apiAction })
          reject(error)
        })
      })
    }
  }
  Object.assign(modulesApi.actions, obj)
}
export default modulesApi
