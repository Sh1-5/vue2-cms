<template>
  <div class="i-echart">
    <div ref="echartDivRef" :style="echartStyle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      echartInstance: null
    }
  },
  props: {
    echartStyle: {
      type: Object,
      default: () => ({ width: '100%', height: '360px' })
    },
    option: {
      type: Object,
      required: true
    }
  },
  watch: {
    option(newVal) {
      this.echartInstance.setOption(newVal)
    }
  },
  mounted() {
    this.echartInstance = this.$echarts.init(this.$refs.echartDivRef)
    this.echartInstance.setOption(this.option)
    const resizeOb = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.$echarts.getInstanceByDom(entry.target).resize()
      }
    })
    resizeOb.observe(this.$refs.echartDivRef)
  },
  methods: {}
}
</script>

<style scoped></style>
