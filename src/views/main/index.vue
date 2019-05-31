<template>
  <el-container class="main">
    <el-header class="bg-blue">
      <Header></Header>
    </el-header>
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue' // @ is an alias to /src
export default Vue.extend({
  components: {
    Header
  }
})
</script>
<style lang="less" scoped>
.main {
  padding-top: 60px;
}
.el-header {
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>
