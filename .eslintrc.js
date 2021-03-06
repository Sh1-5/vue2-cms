module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 忽略菜单组件中 v-for 必须搭配 :key 使用的错误
  ignorePatterns: [
    'src/components/nav-menu/src/nav-menu.vue',
    'src/base-ui/form/src/form.vue',
    'src/base-ui/bread-crumb/src/bread-crumb.vue',
    'src/base-ui/table/src/table.vue',
    'src/base-ui/text-link/src/text-link.vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
