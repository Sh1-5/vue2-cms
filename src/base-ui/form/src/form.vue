<template>
  <div class="i-form">
    <!-- 高级检索插槽 -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  v-model="iFormData[`${item.field}`]"
                  size="medium"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="iFormData[`${item.field}`]"
                  size="medium"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="iFormData[`${item.field}`]"
                  size="medium"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!-- 其他操作插槽 -->
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iFormData: {}
    }
  },
  props: {
    formItems: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '5px 30px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xm: 24
      })
    },
    formData: {
      type: Object,
      required: true
    }
  },
  watch: {
    iFormData: {
      deep: true,
      handler(newVal) {
        this.$emit('updateFormData', newVal)
      }
    }
  },
  mounted() {
    // 重新生成一个新的对象，不要直接操作 props
    this.iFormData = { ...this.formData }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.i-form {
  padding-top: 20px;

  .footer {
    display: flex;
    flex-direction: row-reverse;
    padding-right: 30px;
    margin-bottom: 20px;
  }
}
</style>
