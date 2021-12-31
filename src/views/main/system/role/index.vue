<template>
  <div class="role">
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

import { getRoleList, deleteRole } from '@/api/main/system/role'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

export default {
  name: 'Role',
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
    this.initRoleList()
  },
  methods: {
    async initRoleList() {
      const res = await getRoleList({ offset: 0, size: 10 })
      this.dataList = res.list
      this.listCount = res.totalCount
    },
    async search(formData) {
      const res = await getRoleList(formData)
      this.dataList = res.list
      this.listCount = res.totalCount
      this.formData = formData
    },
    reset() {
      this.initRoleList()
    },
    async handleSizeChange(size) {
      this.pageInfo.size = size
      const res = await getRoleList({
        ...this.formData,
        size: this.pageInfo.size
      })
      this.dataList = res.list
      this.listCount = res.totalCount
    },
    async handleCurrentChange(current) {
      this.pageInfo.current = current
      const res = await getRoleList({
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
      await deleteRole(row.id)
      this.initRoleList()
    }
  }
}
</script>

<style scoped></style>
