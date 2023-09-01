import type { RouteRecordRaw } from 'vue-router';
import { createVNode } from 'vue';
const RouteView = {
    name: 'RouteView',
    render: createVNode('router-view')
};
// 页面静态路由
export default [
    {
        path: '/',
        name: 'index',
        component: () => import('@/layout/basic-layout/index.vue'),
        redirect: '/dashbord',
        children: [
            {
                path: '/dashbord',
                name: 'dashbord',
                component: () => import('@/views/dashbord/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/system/user',
                name: 'user',
                component: () => import('@/views/system/user.vue'),
                meta: {
                    title: '用户管理'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/user/Login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/user/Register.vue'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/401',
        name: '401',
        component: () => import('@/views/exception/401.vue'),
        meta: {
            title: '未授权'
        }
    }
] as RouteRecordRaw[];
