<template>
  <div class="i-card">
    <el-card class="box-card">
      <template v-slot:header>
        <div class="card-header">
          <span style="font-weight: 700">{{ title }}</span>
        </div>
      </template>
      <div class="item">
        <slot></slot>
      </div>
    </el-card>
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
      required: true
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
::v-deep .box-card .el-card__header {
  padding: 10px 20px !important;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}

.item {
  margin-bottom: 10px;
}
</style>
