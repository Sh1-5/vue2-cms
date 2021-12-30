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
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
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
