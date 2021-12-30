<template>
  <div class="map-echart">
    <IEchart :option="option" />
  </div>
</template>

<script>
import convertData from '../utils/convert-data'

import IEchart from '@/base-ui/echart'

export default {
  name: 'MapEchart',
  data() {
    return {}
  },
  props: {
    mapData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    option() {
      return {
        backgroundColor: '#ffffff',
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.name + ' : ' + params.value[2]
          }
        },
        visualMap: {
          min: 0,
          max: 70000,
          calculable: true,
          itemHeight: 80,
          text: ['高', '低'],
          inRange: {
            color: [
              'rgb(70, 240, 252)',
              'rgb(250, 220, 46)',
              'rgb(245, 38, 186)'
            ]
          },
          textStyle: {
            color: '#000000'
          }
        },
        geo: {
          map: 'china',
          roam: 'scale',
          emphasis: {
            areaColor: '#f4cccc',
            borderColor: 'rgb(9, 54, 95)',
            itemStyle: {
              areaColor: 'f4cccc'
            }
          }
        },
        series: [
          {
            name: '销量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(this.mapData),
            symbolSize: 12,
            emphasis: {
              itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 1
              },
              label: {
                show: false
              }
            }
          },
          {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75,
            tooltip: {
              show: false
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
