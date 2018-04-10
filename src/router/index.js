import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  // 系统管理路由
  {
    path: '/system_management',
    component: Layout,
    redirect: '/system_management/city_management',
    name: 'System_management',
    meta: { title: '系统管理', icon: 'example' },
    children: [
      {
        path: 'city_management',
        name: 'City_management',
        component: () => import('@/views/city_management/index'),
        meta: { title: '城市管理', icon: 'table' }
      },
      {
        path: 'edit_article',
        name: 'Edit_article',
        component: () => import('@/views/edit_article/index'),
        meta: { title: '编辑文章', icon: 'table' }
      }
    ]
  },
  // 网站信息管理
  {
    path: '/site_info',
    component: Layout,
    redirect: '/site_info/basic_info',
    name: 'Site_info',
    meta: { title: '网站管理', icon: 'example' },
    children: [
      {
        path: 'basic_info',
        name: 'basic_info',
        component: () => import('@/views/site_info/basic_info/basic_info.vue'),
        meta: { title: '基本信息', icon: 'table' }
      },
      {
        path: 'other_info',
        name: 'other_info',
        component: () => import('@/views/site_info/other_info/other_info.vue'),
        meta: { title: '其他信息', icon: 'table' }
      }
    ]
  },
  // 内容信息管理
  {
    path: '/content_manage',
    component: Layout,
    redirect: '/content_manage/img_manage',
    name: 'content_manage',
    meta: { title: '内容信息管理', icon: 'example' },
    children: [
      {
        path: 'img_manage',
        name: 'img_manage',
        component: () => import('@/views/content_manage/img_manage/img_manage.vue'),
        meta: { title: '图片信息管理', icon: 'table' }
      },
      {
        path: 'article_manage',
        name: 'article_manage',
        component: () => import('@/views/content_manage/article_manage/article_manage.vue'),
        meta: { title: '文章信息管理', icon: 'table' }
      },
      {
        path: 'comment_manage',
        name: 'comment_manage',
        component: () => import('@/views/content_manage/comment_manage/comment_manage.vue'),
        meta: { title: '评论管理', icon: 'table' }
      }
    ]
  },
  // 表单
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

