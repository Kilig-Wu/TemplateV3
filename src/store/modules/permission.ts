import { getMenuList, getPermCode } from '@/api/system';
import { PermCodeResult, RouteItem } from '@/api/system/model';

export const usePermissionStore = defineStore('permission', () => {
    //路由菜单
    let menuList = ref<RouteItem[]>([]);
    //权限列表
    let authList = ref<PermCodeResult['auth']>([]);
    //权限代码列表
    let permCodeList = ref<string[]>([]);

    //获取菜单列表，一般是扁平的，不是树形的
    const GetMenuList = async () => {
        let res = await getMenuList();
        menuList.value = res.menu;
        return true
    };
    //获取权限列表
    const GetPermCodeList = async() => {
        let res = await getPermCode();
        permCodeList.value = res.codeList
        authList.value = res.auth
        return true
    }
    //生成动态菜单
    const GenerateRoutes = () => {
        console.log(menuList.value);
    }
    return {
        GetMenuList,
        GetPermCodeList,
        GenerateRoutes
    }
});
