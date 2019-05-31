<template>
  <div class="header">
    <div class="logo"></div>
    <nav class="nav-bar">
      <router-link
        class="nav-btn"
        :to="{name: 'home'}"
        :class="{'active': checkActive('home')}"
      >Home</router-link>
      <router-link
        class="nav-btn"
        :to="{name: 'module1'}"
        :class="{'active': checkActive('module1')}"
      >Module1</router-link>
      <router-link
        class="nav-btn"
        :to="{name: 'module2'}"
        :class="{'active': checkActive('module2')}"
      >Module2</router-link>
      <router-link
        class="nav-btn"
        :to="{name: 'about'}"
        :class="{'active': checkActive('about')}"
      >About</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    checkActive (path: string) {
      return this.$route.path.split('/')[1] === path
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #0866c6;
}
.logo {
  flex: 0 0 auto;
  width: 200px;
  height: 100%;
  background-color: #2082e7;
}
.nav-bar {
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  .nav-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    padding: 10px;
    width: 100px;
    height: 100%;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    &:hover,
    &.active {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
