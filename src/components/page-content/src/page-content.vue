<template>
  <div class="page-content">
    <ITable :dataList="dataList" v-bind="contentTableConfig">
      <!-- header 中的插槽 -->
      <template v-slot:header-handler>
        <el-button type="primary" size="medium" icon="el-icon-plus"
          >新建</el-button
        >
      </template>
      <!-- 列中的插槽 -->
      <template v-slot:enable="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-tag>
      </template>
      <template v-slot:createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template v-slot:updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template v-slot:handler>
        <el-button size="mini" type="text" icon="el-icon-edit">编辑</el-button>
        <el-button size="mini" type="text" icon="el-icon-delete"
          >删除</el-button
        >
      </template>
    </ITable>
  </div>
</template>

<script>
import ITable from '@/base-ui/table'

export default {
  name: 'PageContent',
  data() {
    return {}
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    dataList: {
      type: Array,
      required: true
    }
  },
  components: {
    ITable
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.page-content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
