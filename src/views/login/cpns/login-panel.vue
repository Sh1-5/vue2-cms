<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="activeName" type="border-card" stretch>
      <el-tab-pane name="account">
        <span slot="label"><i class="el-icon-user"></i>账号登录</span>
        <login-account ref="account" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <span slot="label"><i class="el-icon-mobile-phone"></i>手机登录</span>
        <login-phone ref="phone" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script>
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default {
  name: 'LoginPanel',
  data() {
    return {
      activeName: 'account',
      isKeepPassword: false
    }
  },
  components: {
    LoginAccount,
    LoginPhone
  },
  methods: {
    handleLogin() {
      if (this.activeName === 'account') {
        this.$refs.account.login(this.isKeepPassword)
      } else {
        console.log('手机登录')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-panel {
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
