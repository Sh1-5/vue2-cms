<template>
  <div class="page-search">
    <IForm
      v-bind="searchFormConfig"
      :formData="formData"
      @updateFormData="updateFormData"
    >
      <template v-slot:footer>
        <el-button
          size="medium"
          icon="el-icon-refresh"
          style="margin-left: 20px"
          @click="reset"
          >重置</el-button
        >
        <el-button
          type="primary"
          size="medium"
          icon="el-icon-search"
          @click="search"
          >搜索</el-button
        >
      </template>
    </IForm>
  </div>
</template>

<script>
import IForm from '@/base-ui/form'

export default {
  name: 'PageSearch',
  data() {
    return {
      formData: {}
    }
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    IForm
  },
  created() {
    this.initFormData()
  },
  methods: {
    updateFormData(newVal) {
      this.formData = newVal
    },
    initFormData() {
      for (let item of this.searchFormConfig.formItems) {
        this.formData[item.field] = ''
      }
    },
    reset() {
      this.initFormData()
      this.$emit('reset')
    },
    search() {
      this.$emit('search', this.formData)
    }
  }
}
</script>

<style scoped></style>
