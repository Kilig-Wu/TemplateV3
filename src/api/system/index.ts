import { LoginParams, LoginResult, UserInfo, MenuListResult, PermCodeResult } from './model'
enum Api {
    Login = '/sys/login',
    Logout = '/sys/logout',
    GetUserInfo = '/sys/user/getUserInfo',
    GetInputCode = '/sys/randomImage',
    GetMenuList = '/sys/permission/getUserPermissionByToken',
    GetPermCode = '/sys/permission/getPermCode',
}
//登录
export const login = (params: LoginParams) => usePost<LoginResult, LoginParams>(Api.Login, params)
//获取用户信息
export const getUserInfo = () => useGet<UserInfo>(Api.GetUserInfo)
//退出登录
export const logout = () => useGet(Api.Logout)
//获取图形验证码
export const getImageCaptcha = (checkKey: number) => useGet<string>(`${Api.GetInputCode}/${checkKey}`)

//获取菜单列表
export const getMenuList = () => useGet<MenuListResult>(Api.GetMenuList)
//获取系统权限
export const getPermCode = () => useGet<PermCodeResult>(Api.GetPermCode)