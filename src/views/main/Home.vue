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
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
import Footer from '@/components/Footer.vue'
const apiModule = namespace('api')
@Component({
  components: {
    Footer
  }
})
export default class Home extends Vue {
  /* prop */

  /* data */
  @State('api') apiState: any
  @apiModule.State('getActivityInfo') apiStateGetActivityInfo: any
  @apiModule.Action('getActivityInfo') apiActionGetActivityInfo: any
  // @apiModule.Action getWeChatInfo: any
  aaa: number = 123

  /* method */
  myMethod () {
    console.log(this.apiStateGetActivityInfo.toggle.isSuccess)
    // 效果同上
    console.log(this.apiState.getActivityInfo.toggle.isSuccess)
    // 效果同上
    console.log(this.$store.state.api.getActivityInfo.toggle.isSuccess)
  }

  /* hook */
  async created () {
    try {
      await this.apiActionGetActivityInfo({ params: { activityId: 17 } })
      // 效果同上
      await this.$store.dispatch('api/getActivityInfo', { params: { activityId: 17 } })
    } catch (error) {
      console.log(this.$errorFormatter(error, 'home created'))
    }
    this.myMethod()
  }
  mounted () { }
}
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
