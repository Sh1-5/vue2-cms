export default {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称' },
    { prop: 'type', label: '类型' },
    { prop: 'url', label: '菜单url' },
    { prop: 'icon', label: '菜单icon' },
    { prop: 'permission', label: '按钮权限' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { label: '操作', slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  showFooter: false
}
