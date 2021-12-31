<template>
  <div class="rose-echart">
    <IEchart :option="option" />
  </div>
</template>

<script>
import IEchart from '@/base-ui/echart'

export default {
  name: 'RoseEchart',
  data() {
    return {}
  },
  props: {
    roseData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    option() {
      return {
        series: [
          {
            name: '类别数据',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: this.roseData
          }
        ]
      }
    }
  },
  components: {
    IEchart
  },
  methods: {}
}
</script>

<style scoped></style>
