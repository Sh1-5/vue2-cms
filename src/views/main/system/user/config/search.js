export default {
  formItems: [
    {
      field: 'username',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'hobby',
      type: 'select',
      label: '爱好',
      placeholder: '请选择爱好',
      options: [
        {
          label: '篮球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'football'
        }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '80px',
  itemStyle: { padding: '5px 30px' },
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xm: 24
  }
}
