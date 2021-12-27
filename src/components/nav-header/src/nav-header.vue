<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFold"
    ></i>
    <div class="content">
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <UserInfo />
    </div>
  </div>
</template>

<script>
import UserInfo from './user-info.vue'

export default {
  name: 'NavHeader',
  data() {
    return {
      isFold: false
    }
  },
  components: {
    UserInfo
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
  width: 100%;
  display: flex;
  align-items: center;

  .fold-menu {
    font-size: 24px;
    cursor: pointer;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
}
</style>
