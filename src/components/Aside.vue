<template>
  <div class="aside">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#2b3245"
      text-color="#999"
      active-text-color="#fff"
      router
    >
      <template v-for="(nav,index) in navList">
        <el-submenu
          :index="nav.index"
          :key="index"
          v-if="nav.subNavList && nav.subNavList.length > 0"
        >
          <template slot="title">
            <span>{{nav.name}}</span>
          </template>
          <el-menu-item
            v-for="(subNav,subIndex) in nav.subNavList"
            :key="subIndex"
            :index="subNav.routePath"
            :route="{path:subNav.routePath}"
          >{{subNav.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item
          :index="nav.index"
          :key="index"
          v-else
          :route="{path:nav.routePath}"
        >{{nav.name}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    navList: {
      type: Array,
      required: true
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.aside {
  // height: 2000px;
}
.el-menu-vertical-demo {
  overflow: hidden;
  border: 0;
}
.el-menu-item.is-active {
  background-color: #2082e7 !important;
}
</style>
