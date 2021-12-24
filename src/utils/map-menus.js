export default function mapMenusToRoutes(userMenus) {
  const routes = []
  // 1.默认加载所有的 routes
  // 递归查找
  const allRoutes = []
  const routeFiles = require.context('../router/main', true, /\.js/)
  for (const item of routeFiles.keys()) {
    const route = require('../router/main' + item.split('.')[1])
    allRoutes.push(route.default)
  }

  // 2.根据菜单获取需要添加的 routes
  function recurseGetRoute(userMenus) {
    for (const item of userMenus) {
      if (item.type === 2) {
        const route = allRoutes.find((route) => route.path === item.url)
        if (route) routes.push(route)
      } else {
        recurseGetRoute(item.children)
      }
    }
  }
  recurseGetRoute(userMenus)
  return routes
}
