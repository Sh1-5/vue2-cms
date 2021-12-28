export default {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', slotName: 'name' },
    { prop: 'realname', label: '真实姓名', slotName: 'realname' },
    { prop: 'cellphone', label: '电话号码', slotName: 'cellphone' },
    { prop: 'enable', label: '状态', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { label: '操作', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
