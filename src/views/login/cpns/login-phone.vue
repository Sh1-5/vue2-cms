<template>
  <div>
    <el-form label-width="60px">
      <el-form-item label="手机号">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: {
        num: '',
        code: ''
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.get-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
