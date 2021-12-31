<template>
  <div class="i-text-link">
    <template v-for="item in textArrs">
      <div class="item">
        <span class="title">{{ item.title }} : </span>
        <el-link type="primary" :href="item.link" target="_blank">{{
          item.desc
        }}</el-link>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    textArrs: {
      type: Array,
      default: () => []
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.i-text-link {
  padding: 0 15px;
  margin-bottom: 40px;
  text-align: left;

  .title {
    position: relative;
    display: inline-block;
    margin-right: 20px;
  }

  .item {
    margin: 5px;
  }

  .title::before {
    position: absolute;
    top: 40%;
    left: -15px;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 100%;
    content: '';
  }
}
</style>
