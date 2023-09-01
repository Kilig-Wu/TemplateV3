import type { RouteMeta } from 'vue-router';
export interface LoginParams {
    username: string;
    password: string;
    checkKey: number;
    captcha: string;
}
export interface LoginResult {
    token: string;
}
export interface RoleInfo {
    roleName: string;
    value: string;
}
export interface UserInfo {
    id: string | number;
    userId: string | number;
    username: string;
    realname: string;
    avatar: string;
    desc?: string;
    homePath?: string;
    tenantid?: string | number;
    roles: RoleInfo[];
    orgCode?: string;
}
export interface RouteItem {
    path: string;
    component: any;
    meta: RouteMeta;
    name?: string;
    alias?: string | string[];
    redirect?: string;
    caseSensitive?: boolean;
    children?: RouteItem[];
}
export type MenuListResult = { menu: RouteItem[] } & Omit<PermCodeResult, 'codeList'>

export interface PermCodeResult {
    allAuth: { status: boolean } & Auth[];
    auth: Auth[];
    codeList: string[];
    sysSafeMode: boolean;
}

interface Auth {
    action: string;
    describe: string;
    type: string;
}
