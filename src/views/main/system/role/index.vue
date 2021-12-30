<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <PageContent
      :contentTableConfig="contentTableConfig"
      :dataList="dataList"
    />
  </div>
</template>

<script>
import searchFormConfig from './config/search'
import contentTableConfig from './config/content'

import { getRoleList } from '@/api/main/system/role'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

export default {
  name: 'Role',
  data() {
    return {
      searchFormConfig,
      contentTableConfig,
      dataList: []
    }
  },
  components: {
    PageSearch,
    PageContent
  },
  async created() {
    const res = await getRoleList({ offset: 0, size: 10 })
    this.dataList = res.list
  },
  methods: {}
}
</script>

<style scoped></style>
