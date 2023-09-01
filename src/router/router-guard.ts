import { router } from './index';
import type { RouteLocationNormalized, NavigationGuardNext, RouteRecordName } from 'vue-router';
// import { defaultRoutePath } from './generate-route';
const whiteList: RouteRecordName[] = ['login', 'register', 'forgetPassword', '401']; //路由白名单
const loginRoutePath = '/login'; //登录路径

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const { title } = to.meta ?? {};
    if (title) {
        useTitle(`${import.meta.env.VITE_APP_TITLE}-${title}`);
    } else {
        useTitle(import.meta.env.VITE_APP_TITLE);
    }
    const token = useAuthorization();

    if (token.value) {
        //存在token
        if (to.path === loginRoutePath) {
            //去的页面是登录页 直接进入到菜单
            next({ path: '/dashbord' });
            return;
        } else {
            //去的页面不是登录页[有白名单页面，也有菜单]
            const userStore = useUserStore();
            const permissionStore = usePermissionStore();

            if (!userStore.userInfo && !whiteList.includes(to.name as RouteRecordName)) {
                try {
                    //获取用户信息，获取路由菜单的信息，获取用户权限列表
                    await Promise.all([userStore.GetUserInfo(), permissionStore.GetMenuList(), permissionStore.GetPermCodeList()]);
                    //动态添加路由
                    // const currentRoute = permissionStore.GenerateRoutes();
                    // router.addRoute(currentRoute)
    
                    //设置replace：true，防止有重定向路径时，导航将留下历史记录
                    next({ ...to, replace: true });
                    return;
                } catch {}
            }
        }
    } else {
        //不存在token
        if (!whiteList.includes(to.name as RouteRecordName)) {
            //不在免登白名单，进入登录页
            next({
                path: loginRoutePath,
                query: { redirect: encodeURIComponent(to.fullPath) }
            });
            return;
        }
    }
    //其他情况直接进
    next();
});
router.afterEach(to => {});
