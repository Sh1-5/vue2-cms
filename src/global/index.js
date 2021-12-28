import registerProperties from './register-properties'

export function globalRegister(Vue) {
  Vue.use(registerProperties)
}
