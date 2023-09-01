import { defineStore } from 'pinia';
import type { LoginParams, UserInfo } from '@/api/system/model';
import { login, getUserInfo, logout } from '@/api/system';

export const useUserStore = defineStore('user', () => {
    const userInfo = ref<Nullable<UserInfo>>(null);
    const token = useAuthorization();
    // let refreshToken = ref<string>('')
    // const menuData = shallowRef<MenuData>([]);

    //登录（获取token,一般用户信息需要加密，流程为：获取公钥-》加密-》根据加密后的用户信息获取token）
    const Login = (params: LoginParams) => {
        return new Promise((resolve, reject) => {
            login(params).then(res => {
                token.value = res.token;
                resolve({ homePath: '/dashbord'})
            }).catch(err => {
                reject(err)
            })
        })
    }

    // 获取用户信息
    const GetUserInfo = async () => {
        const data = await getUserInfo();
        userInfo.value = data;
        return data
    };

    // 退出登录
    const Logout = async () => {
        // 1. 清空用户信息
        try {
            await logout();
        } finally {
            token.value = null;
            userInfo.value = null;
        }
    };
    //刷新token
    // const RefreshToken = () => {

    // }
    return {
        userInfo,
        Login,
        GetUserInfo,
        Logout
    }
});
