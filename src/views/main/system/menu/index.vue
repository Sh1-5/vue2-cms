<template>
  <div class="menu">
    <PageContent
      :contentTableConfig="contentTableConfig"
      :dataList="dataList"
    />
  </div>
</template>

<script>
import contentTableConfig from './config/content'
import { getMenuList } from '@/api/main/system/menu'

import PageContent from '@/components/page-content'

export default {
  name: 'Menu',
  data() {
    return {
      dataList: [],
      listCount: 0,
      pageInfo: {
        size: 10,
        current: 1
      },
      formData: {},
      contentTableConfig
    }
  },
  components: {
    PageContent
  },
  created() {
    this.initMenuList()
  },
  methods: {
    async initMenuList() {
      const res = await getMenuList()
      this.dataList = res.list
    }
  }
}
</script>

<style scoped></style>
