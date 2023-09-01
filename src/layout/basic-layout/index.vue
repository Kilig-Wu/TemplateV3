<template>
    <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout>
            <a-layout-sider>
                <a-menu>
                    <a-menu-item key="1">
                        <router-link to="/dashbord">首页</router-link>
                    </a-menu-item>
                    <a-sub-menu key="sub2" title="系统管理">
                        <a-menu-item key="2">
                            <router-link to="/system/user">用户管理</router-link>
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout-content><router-view></router-view></a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup lang="ts">
let menuList = [
    {
        name: 'd',
        path: '/dashbord',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/system/user',
        name: 'user',
        meta: {
            title: '用户管理'
        }
    }
];
</script>
<style lang="less" scoped></style>
