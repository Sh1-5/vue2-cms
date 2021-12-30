<template>
  <div class="pie-echart">
    <IEchart :option="option" />
  </div>
</template>

<script>
import IEchart from '@/base-ui/echart'

export default {
  name: 'PieEchart',
  data() {
    return {}
  },
  props: {
    pieData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    option() {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '分类数据',
            type: 'pie',
            radius: '50%',
            data: this.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
