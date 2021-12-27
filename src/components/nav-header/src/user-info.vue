<template>
  <div class="user-info">
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar
          class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        欢迎，{{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {}
  },
  computed: {
    name() {
      return this.$store.state.loginModule.userInfo.name
    }
  },
  methods: {
    handleCommand(command) {
      console.log(command)
      // 退出操作
    }
  }
}
</script>

<style scoped lang="scss">
.user-info {
  .el-dropdown {
    padding: 5px 10px;
    cursor: pointer;

    .el-dropdown-link {
      display: flex;
      align-items: center;

      .avatar {
        margin-right: 10px;
      }
    }
  }
}
</style>
