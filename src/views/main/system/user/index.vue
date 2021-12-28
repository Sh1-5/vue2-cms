<template>
  <div class="user">
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

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { getUserList } from '@/api/main/system/user'

export default {
  name: 'User',
  data() {
    return {
      searchFormConfig,
      dataList: [],
      contentTableConfig
    }
  },
  components: {
    PageSearch,
    PageContent
  },
  async created() {
    const res = await getUserList({ offset: 0, size: 10 })
    this.dataList = res.list
  },
  methods: {}
}
</script>

<style scoped></style>
