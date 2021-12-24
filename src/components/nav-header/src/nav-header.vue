<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFold"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data() {
    return {
      isFold: false
    }
  },
  methods: {
    handleFold() {
      this.isFold = !this.isFold
      this.$emit('foldChange', this.isFold)
    }
  }
}
</script>

<style scoped lang="scss">
.nav-header {
  .fold-menu {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
