export default {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名' },
    { prop: 'realname', label: '真实姓名' },
    { prop: 'cellphone', label: '电话号码' },
    { prop: 'enable', label: '状态', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { label: '操作', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
