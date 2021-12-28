<template>
  <div class="i-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="header-handler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="dataList"
      border
      style="width: 100%"
      @selection-change="selectChange"
    >
      <template v-if="showSelectColumn">
        <el-table-column type="selection" align="center"></el-table-column>
      </template>
      <template v-if="showIndexColumn">
        <el-table-column
          type="index"
          align="center"
          label="序号"
          width="80"
        ></el-table-column>
      </template>
      <template v-for="item in propList">
        <el-table-column v-bind="item" align="center">
          <template slot-scope="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    dataList: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectChange(row) {
      this.$emit('selectChange', row)
    }
  }
}
</script>

<style scoped lang="scss">
.i-table {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .footer {
    margin-top: 10px;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
