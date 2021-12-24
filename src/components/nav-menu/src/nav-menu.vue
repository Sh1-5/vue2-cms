<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/logo.png" alt="logo" />
      <span v-if="!isCollapse" class="title">vue2-cms</span>
    </div>
    <el-menu
      :collapse-transition="false"
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <!-- 遍历一级菜单，使用 v-for + :key 时不可使用 template -->
      <template v-for="item in userMenus">
        <template v-if="item.type === 1">
          <el-submenu :index="String(item.id)">
            <template slot="title">
              <i v-if="item.icon" :class="item.icon"></i>
              <span class="menu-name">{{ item.name }}</span>
            </template>
            <!-- 遍历二级菜单 -->
            <template v-for="subitem in item.children">
              <el-menu-item :index="String(subitem.id)">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span class="menu-name">{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="String(item.id)">
            <i v-if="item.icon" :class="item.icon"></i>
            <span class="menu-name">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    userMenus() {
      return this.$store.state.loginModule.userMenus
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
    }
  }

  // 修改 el-menu 的默认样式
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }

  .menu-name {
    margin-left: 14px;
  }
}
</style>
