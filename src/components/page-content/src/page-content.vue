<template>
  <div class="page-content">
    <ITable
      :dataList="dataList"
      v-bind="contentTableConfig"
      :listCount="listCount"
      :pageInfo="pageInfo"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
      <!-- header 中的插槽 -->
      <template v-slot:header-handler>
        <el-button type="primary" size="medium" icon="el-icon-plus"
          >新建</el-button
        >
      </template>
      <!-- 公共插槽 -->
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
      <template v-slot:handler="scope">
        <el-button
          size="mini"
          type="text"
          icon="el-icon-edit"
          @click="edit(scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="text"
          icon="el-icon-delete"
          @click="remove(scope.row)"
          >删除</el-button
        >
      </template>
      <!-- 动态插槽 -->
      <template v-for="item in otherPropSlots" v-slot:[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
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
    },
    listCount: {
      type: Number,
      default: 0
    },
    pageInfo: {
      type: Object,
      default: () => {
        return {
          size: 10,
          current: 1
        }
      }
    }
  },
  computed: {
    otherPropSlots() {
      return this.contentTableConfig.propList.filter((item) => {
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      })
    }
  },
  components: {
    ITable
  },
  methods: {
    handleSizeChange(size) {
      this.$emit('handleSizeChange', size)
    },
    handleCurrentChange(current) {
      this.$emit('handleCurrentChange', current)
    },
    edit(row) {
      this.$emit('edit', row)
    },
    remove(row) {
      this.$emit('remove', row)
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
