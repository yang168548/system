export const routes = [
  {
    path: '/',
    component: '@/pages/home',
    name: '首页',
    icon: 'HomeFilled'
  },
  {
    path: '/login',
    component: '@/pages/login/login',
    headerRender: false,
    // 不展示页脚
    footerRender: false,
    // 不展示菜单
    menuRender: false,
  },
]