<template>
  <div class="page">
    <img src="@/assets/images/a.png" alt>
    <div class="white"></div>
    <div class="mask"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="less" scoped>
.page {
  position: relative;
  img {
    position: relative;
    display: block;
    width: 100%;
    // opacity: 0.5;
  }
  .mask {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;

    background-image: url("../../../assets/images/a.png");
    background-position: 100% 100%;
    background-size: 100% auto;
    background-repeat: no-repeat;

    mask-image: url("../../../assets/images/logo.png");
    mask-repeat: no-repeat;
    mask-position: 100% 100%;
  }
  .white {
    .imgSize("../../../assets/images/logo.png");
    position: absolute;
    bottom: 0;
    height: @imgH;
    width: 100%;
    background-color: #fff;
  }
}
</style>
