export default {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称' },
    { prop: 'oldPrice', label: '原价' },
    { prop: 'newPrice', label: '现价' },
    { prop: 'imgUrl', label: '商品图片', slotName: 'imgUrl' },
    { prop: 'status', label: '状态', slotName: 'status' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { label: '操作', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
