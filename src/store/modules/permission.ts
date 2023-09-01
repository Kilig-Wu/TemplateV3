import { getMenuList, getPermCode } from '@/api/system';
// 系统权限
interface AuthItem {
    // 菜单权限编码，例如：“sys:schedule:list,sys:schedule:info”,多个逗号隔开
    action: string;
    // 权限策略1显示2禁用
    type: string | number;
    // 权限状态(0无效1有效)
    status: string | number;
    // 权限名称
    describe?: string;
    isAuth?: boolean;
}

export const usePermissionStore = defineStore('permission', () => {
    //路由菜单
    let menuList = ref([]);
    //权限列表
    let authList = ref<AuthItem[]>([]);

    const GetMenuList = async () => {
        let data = await getMenuList();
        menuList.value = data;
        return data
    };
    const GetPermCode = async() => {
        let res = await getPermCode();
        authList.value = res.auth
    }
    return {
        GetMenuList,
        GetPermCode
    }
});
