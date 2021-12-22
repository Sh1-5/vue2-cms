<template>
  <div>
    <el-form :model="account" :rules="rules" label-width="60px">
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
export default {
  data() {
    return {
      account: {
        username: '',
        password: ''
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
  methods: {}
}
</script>

<style scoped></style>
