/**
 * 错误信息字符化
 * @param {*} error 错误对象
 * @param {String} methodName 方法名称
 */
const errorFormatter = (error: Error | Ajax.AjaxResponse, methodName: string): string => {
  // let msg = error instanceof Error ? error.toString() : error.message || JSON.stringify(error)
  let msg = error.message || JSON.stringify(error)
  // 开发测试环境显示错误方法名
  if (methodName && process.env.VUE_APP_BUILD_TYPE !== 'production') {
    msg = methodName + ':' + msg
  }
  return msg
}
/**
 * Toast接口
 * @param {*} options 错误信息或者配置对象
 */
interface ToastOption {
  duration: number,
  type: string,
  message: string,
}
const ToastInterface = (options: string | ToastOption) => {
  if (typeof options === 'string') {
    console.log(options)
  } else {
    const { duration = 3000, type = '', message = '' } = options
    console.log(duration, type, message)
  }
}
/**
 * loading 类
 */
class Loading {
  methodQqueue: string[] = [] // 调用loading的方法队列
  open (methodName: string = Math.round(Math.random() * 1000000000).toString()) {
    this.methodQqueue.push(methodName)
    console.log(`loading show ${this.methodQqueue.join(',')}`)
    // TODO show loading
    if (this.methodQqueue.length === 1) {
      // 引用第三方loading 开始

      // 引用第三方loading 结束
    }
  }
  close () {
    // 使用同一个loading实例无缝衔接下一个loading
    const timer = setTimeout(() => {
      this.methodQqueue.shift()
      clearTimeout(timer)
      if (this.methodQqueue.length === 0) {
        // TODO show loading
        console.log(`loading close`)
        // 引用第三方loading 开始

        // 引用第三方loading 结束
      }
    }, 0)
  }
}
const LoadingInterface = new Loading()

export {
  errorFormatter,
  ToastInterface,
  LoadingInterface
}
