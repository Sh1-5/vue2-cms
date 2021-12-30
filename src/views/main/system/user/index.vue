<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @search="search"
      @reset="reset"
    />
    <PageContent
      :contentTableConfig="contentTableConfig"
      :dataList="dataList"
      :listCount="listCount"
      :pageInfo="pageInfo"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      @edit="edit"
      @remove="remove"
    />
  </div>
</template>

<script>
import searchFormConfig from './config/search'
import contentTableConfig from './config/content'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { getUserList, deleteUser } from '@/api/main/system/user'

export default {
  name: 'User',
  data() {
    return {
      searchFormConfig,
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
    PageSearch,
    PageContent
  },
  created() {
    this.initUserList()
  },
  methods: {
    async initUserList() {
      const res = await getUserList(this.formData)
      this.dataList = res.list
      this.listCount = res.totalCount
    },
    async search(formData) {
      const res = await getUserList(formData)
      this.dataList = res.list
      this.listCount = res.totalCount
      this.formData = formData
    },
    reset() {
      this.initUserList()
    },
    async handleSizeChange(size) {
      this.pageInfo.size = size
      const res = await getUserList({
        ...this.formData,
        size: this.pageInfo.size
      })
      this.dataList = res.list
      this.listCount = res.totalCount
    },
    async handleCurrentChange(current) {
      this.pageInfo.current = current
      const res = await getUserList({
        ...this.formData,
        offset: this.pageInfo.size * (this.pageInfo.current - 1)
      })
      this.dataList = res.list
      this.listCount = res.totalCount
    },
    edit(row) {
      console.log(row)
    },
    async remove(row) {
      await deleteUser(row.id)
      this.initUserList()
    }
  }
}
</script>

<style scoped></style>
