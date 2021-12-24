<template>
  <div class="not-found">
    <el-button class="back" @click="back">返回</el-button>
    <img src="~@/assets/img/404.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .back {
    position: absolute;
    top: 40px;
    left: 40px;
  }
}
</style>
