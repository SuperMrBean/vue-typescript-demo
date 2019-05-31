<template>
  <el-container>
    <el-main>
      {{aaa}}
      <div class="logo"></div>
      <div class="logo2"></div>
      <div class="logo3"></div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import Footer from '@/components/Footer.vue'
export default Vue.extend({
  data () {
    return {
      aaa: 123
    }
  },
  computed: {
    // vuex辅助函数
    ...mapState({
      // isApp: state => state.sdk.isApp // 与上面等价
      api: (state: any) => state.api
    })
  },
  methods: {
    // vuex辅助函数
    ...mapActions('api', {
      apiActionGetActivityInfo: 'getActivityInfo' // 将 `this.apiActionGetActivityInfo()` 映射为 `this.$store.dispatch('getActivityInfo')`
    })
  },
  async created () {
    try {
      // 使用辅助函数
      await this.apiActionGetActivityInfo({ params: { activityId: 17 } })
      // 不使用辅助函数
      await this.$store.dispatch('api/getActivityInfo', { params: { activityId: 17 } })
    } catch (error) {
      console.log(this.$errorFormatter(error, 'home created'))
    }
  },
  mounted () {
  },
  components: {
  }
})
</script>
<style lang="less" scoped>
.logo {
  .bgImg("../../assets/images/logo.png", 0.5);
}
.logo2 {
  .imgSize("../../assets/images/logo.png", 0.5);
  width: @imgW;
  height: @imgW;
  border: 1px solid #3453ae;
  border-radius: 50%;
}
.logo3 {
  border: 1px solid #3453ae;
  width: get-img-width("../../assets/images/logo.png", 0.5);
  height: get-img-height("../../assets/images/logo.png", 0.5);
}
</style>
