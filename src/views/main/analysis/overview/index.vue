<template>
  <div class="overview">
    <ICard title="关于">
      <div class="about">
        Vu2-cms 是基于 Vue2、Vuex、VueRouter、Webapck、 ElementUI 、Echart5
        等后台系统解决方案。
      </div>
    </ICard>
    <ICard title="技术栈">
      <ITextLink :text-arrs="technologyStacks" />
    </ICard>
  </div>
</template>

<script>
import technologyStacks from './config/technologyStacks'

import ICard from '@/base-ui/card'
import ITextLink from '@/base-ui/text-link'

export default {
  name: 'Overview',
  data() {
    return {
      technologyStacks
    }
  },
  components: {
    ICard,
    ITextLink
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.overview {
  .about {
    text-align: left;
  }

  ::v-deep .el-card {
    margin-bottom: 20px;
  }
}
</style>
