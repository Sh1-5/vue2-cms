import { formatUTCString } from '@/utils/date-format'

export default function registerProperties(Vue) {
  Vue.prototype.$filters = {
    formatTime(time) {
      return formatUTCString(time)
    }
  }
}
