
// 定义全局变量或者插件
import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    // $apiLoading: any
    // $loading(options: LoadingOptions): LoadingInstance
    $errorFormatter: Function
  }
}
