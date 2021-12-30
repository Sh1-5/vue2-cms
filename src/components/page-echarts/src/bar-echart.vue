<template>
  <div><IEchart :option="option" /></div>
</template>

<script>
import IEchart from '@/base-ui/echart'

export default {
  name: 'BarEchart',
  data() {
    return {}
  },
  props: {
    barXData: {
      type: Array,
      default: () => []
    },
    barYData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    option() {
      return {
        xAxis: {
          data: this.barXData,
          axisLabel: {
            inside: true,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999999'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
            },
            data: this.barYData
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
