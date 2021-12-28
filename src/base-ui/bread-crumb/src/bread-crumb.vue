<template>
  <div class="i-bread-crumb">
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in breadCrumb">
        <el-breadcrumb-item :style="itemStyle(index)">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    breadCrumb: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    itemStyle(index) {
      if (!index) {
        return {
          fontWeight: '700'
        }
      } else {
        return {}
      }
    }
  }
}
</script>

<style scoped></style>
