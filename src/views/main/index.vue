<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '64px' : '210px'">
        <NavMenu :isCollapse="isFold" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @foldChange="foldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-content-container"><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default {
  name: 'Main',
  data() {
    return {
      isFold: false
    }
  },
  components: { NavMenu, NavHeader },
  methods: {
    foldChange(isFold) {
      this.isFold = isFold
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  .page-content-container {
    background: #ffffff;
    border-radius: 5px;
  }
}

.el-header {
  display: flex;
  color: #333;
}

.el-main {
  background-color: #f0f2f5;
  color: #333333;
  text-align: center;
}
</style>
