<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script>
import LoginPanel from './cpns/login-panel.vue'

export default {
  name: 'Login',
  data() {
    return {}
  },
  components: {
    LoginPanel
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
