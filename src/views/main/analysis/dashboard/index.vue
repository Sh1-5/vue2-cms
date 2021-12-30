<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <ICard title="分类商品数量（饼图）">
          <PieEchart :pieData="pieData" />
        </ICard>
      </el-col>
      <el-col :span="10">
        <ICard title="不同城市商品销量">
          <MapEchart :mapData="mapData" />
        </ICard>
      </el-col>
      <el-col :span="7">
        <ICard title="分类商品数量（玫瑰图）">
          <RoseEchart :roseData="roseData" />
        </ICard>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <ICard title="分类商品销量">
          <LineEchart v-bind="lineData" />
        </ICard>
      </el-col>
      <el-col :span="12">
        <ICard title="分类商品收藏">
          <BarEchart v-bind="barData" />
        </ICard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/api/main/analysis/dashboard'

import ICard from '@/base-ui/card'
import {
  PieEchart,
  MapEchart,
  RoseEchart,
  LineEchart,
  BarEchart
} from '@/components/page-echarts'

export default {
  name: 'Dashboard',
  data() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      categoryAddressSale: []
    }
  },
  computed: {
    pieData() {
      return this.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    },
    mapData() {
      return this.categoryAddressSale.map((item) => {
        return { name: item.address, value: item.count }
      })
    },
    roseData() {
      return this.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    },
    lineData() {
      const lineXData = []
      const lineYData = []
      this.categoryGoodsSale.map((item) => {
        lineXData.push(item.name)
        lineYData.push(item.goodsCount)
      })
      return { lineXData, lineYData }
    },
    barData() {
      const barXData = []
      const barYData = []
      this.categoryGoodsFavor.map((item) => {
        barXData.push(item.name)
        barYData.push(item.goodsFavor)
      })
      return { barXData, barYData }
    }
  },
  components: {
    ICard,
    PieEchart,
    MapEchart,
    RoseEchart,
    LineEchart,
    BarEchart
  },
  created() {
    this.initChartData()
  },
  methods: {
    async initChartData() {
      this.categoryGoodsCount = await getCategoryGoodsCount()
      this.categoryGoodsSale = await getCategoryGoodsSale()
      this.categoryGoodsFavor = await getCategoryGoodsFavor()
      this.categoryAddressSale = await getAddressGoodsSale()
    }
  }
}
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
