<template>
  <div class="goods">
    <PageContent
      :contentTableConfig="contentTableConfig"
      :dataList="dataList"
      :listCount="listCount"
      :pageInfo="pageInfo"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
      <template v-slot:imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template v-slot:status="scope">
        <el-tag :type="scope.row.status ? 'success' : 'danger'">{{
          scope.row.status ? '启用' : '禁用'
        }}</el-tag>
      </template>
    </PageContent>
  </div>
</template>

<script>
import contentTableConfig from './config/content'
import { getGoodsList } from '@/api/main/product/goods'

import PageContent from '@/components/page-content'

export default {
  name: 'Goods',
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
    this.initGoodsList()
  },
  methods: {
    async initGoodsList() {
      const res = await getGoodsList()
      this.dataList = res.list
      this.listCount = res.totalCount
    }
  }
}
</script>

<style scoped></style>
