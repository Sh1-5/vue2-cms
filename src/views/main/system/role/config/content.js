export default {
  title: '角色列表',
  propList: [
    { prop: 'name', label: '角色名称' },
    { prop: 'intro', label: '所有权限' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { label: '操作', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
