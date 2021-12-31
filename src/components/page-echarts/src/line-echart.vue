<template>
  <div class="line-echart">
    <IEchart :option="option" />
  </div>
</template>

<script>
import IEchart from '@/base-ui/echart'

export default {
  name: 'LineEchart',
  data() {
    return {}
  },
  props: {
    lineXData: {
      type: Array,
      default: () => []
    },
    lineYData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    option() {
      return {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.lineXData
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '分类销量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: this.lineYData
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
