let firstMenu = null

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
        if (!firstMenu) {
          firstMenu = item
        }
      } else {
        recurseGetRoute(item.children)
      }
    }
  }
  recurseGetRoute(userMenus)
  return routes
}

// 刷新的时候根据当前路径查找选中的菜单项
export function pathMapMenu(userMenus, path, breadCrumb) {
  for (const item of userMenus) {
    if (item.type === 1) {
      const findMenu = pathMapMenu(item.children ?? [], path)
      if (findMenu) {
        breadCrumb?.push({ name: item.name })
        breadCrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (item.type === 2 && item.url === path) {
      return item
    }
  }
}

export function pathMapBreadCrumb(userMenus, path) {
  const breadCrumb = []
  pathMapMenu(userMenus, path, breadCrumb)
  return breadCrumb
}

export { firstMenu }
