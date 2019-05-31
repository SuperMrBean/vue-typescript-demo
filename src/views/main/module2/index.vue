<template>
  <Container>
    <Aside slot="aside" :navList="navList"></Aside>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import Aside from '@/components/Aside.vue'
import Container from '@/components/Container.vue'
export default Vue.extend({
  data () {
    return {
      navList: [
        {
          index: '1',
          name: 'Group1',
          routePath: '',
          routeName: '',
          subNavList: [
            {
              index: '2',
              name: 'Page1',
              routePath: '/module2/page1',
              routeName: 'module2-page1'
            }
          ]
        },
        {
          index: '3',
          name: 'Group2',
          routePath: '',
          routeName: '',
          subNavList: [
            {
              index: '4',
              name: 'Page2',
              routePath: '/module2/page2',
              routeName: 'module2-page2'
            }
          ]
        }
      ]
    }
  },
  components: {
    Aside,
    Container
  }
})
</script>
<style lang="less" scoped>
</style>
