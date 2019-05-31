<template>
  <el-container class="container">
    <el-aside class="side-nav" width="200px">
      <!-- <Aside></Aside> -->
      <slot name="aside"></slot>
    </el-aside>
    <el-container>
      <el-main>
        <transition name="fade" mode="out-in" appear>
          <router-view/>
        </transition>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/Footer.vue'
export default Vue.extend({
  components: {
    // Aside,
    Footer
  }
})
</script>
<style lang="less" scoped>
.container {
  padding-left: 200px;
}
.side-nav {
  background-color: #2b3245;
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  overflow: auto;
}
</style>
