<template>
  <div>
    <el-form :model="account" :rules="rules" ref="accountForm" label-width="60px">
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import localCache from '@/utils/cache'

export default {
  name: 'LoginAccount',
  data() {
    return {
      account: {
        username: localCache.getCache('username') ?? '',
        password: localCache.getCache('password') ?? ''
      },
      rules: {
        username: [
          { required: true, message: '账号是必传内容', trigger: 'blur' },
          {
            pattern: /^[a-z0-9]{5,10}$/,
            message: '账号必须是5~10个字母或者数字',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '密码是必传内容', trigger: 'blur' },
          {
            pattern: /^[a-z0-9]{3,}$/,
            message: '密码必须是3位以上的字母或者数字',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {
    console.log(this.account)
  },
  methods: {
    login(isKeepPassword) {
      this.$refs.accountForm.validate((valid) => {
        if (valid) {
          // 判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('username', this.account.username)
            localCache.setCache('password', this.account.password)
            this.$store.dispatch('loginModule/accountLoginAction', this.account)
          } else {
            // 删除缓存
            localCache.deleteCache('username')
            localCache.deleteCache('password')
            this.$store.dispatch('loginModule/accountLoginAction', this.account)
          }
        } else {
          this.$message({
            type: 'error',
            message: '请输入正确的账号和密码'
          })
        }
      })
    }
  }
}
</script>

<style scoped></style>
