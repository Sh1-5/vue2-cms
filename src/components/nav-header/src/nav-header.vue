<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFold"
    ></i>
    <div class="content">
      <NavBreadCrumb :breadCrumb="breadCrumb" />
      <UserInfo />
    </div>
  </div>
</template>

<script>
import UserInfo from './user-info.vue'
import NavBreadCrumb from '@/base-ui/bread-crumb'
import { pathMapBreadCrumb } from '@/utils/map-menus'

export default {
  name: 'NavHeader',
  data() {
    return {
      isFold: false
    }
  },
  components: {
    UserInfo,
    NavBreadCrumb
  },
  computed: {
    userMenus() {
      return this.$store.state.loginModule.userMenus
    },
    breadCrumb() {
      return pathMapBreadCrumb(this.userMenus, this.$route.path)
    }
  },
  methods: {
    handleFold() {
      this.isFold = !this.isFold
      this.$emit('foldChange', this.isFold)
    }
  }
}
</script>

<style scoped lang="scss">
.nav-header {
  width: 100%;
  display: flex;
  align-items: center;

  .fold-menu {
    font-size: 24px;
    cursor: pointer;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
}
</style>
