export {};

declare module 'vue-router'{
  interface Menu {
    // 路由名称(路由唯一标识)
    name: string;

    icon?: string;
  
    path: string;
  
    // path contains param, auto assignment.
    paramPath?: string;
  
    disabled?: boolean;
  
    children?: Menu[];
  
    orderNo?: number;
  
    roles?: RoleEnum[];
    //路由描述
    meta?: Partial<RouteMeta>;
  
    tag?: MenuTag;
  
    hideMenu?: boolean;
    
    alwaysShow?: boolean;
  }
  interface RouteMeta {
    orderNo?: number;
    // title
    title: string;
    // dynamic router level.
    dynamicLevel?: number;
    // dynamic router real route path (For performance).
    realPath?: string;
    // Whether to ignore permissions
    ignoreAuth?: boolean;
    // role info
    roles?: RoleEnum[];
    // Whether not to cache
    ignoreKeepAlive?: boolean;
    // 哪些是固定页签
    affix?: boolean;
    // icon on tab
    icon?: string;
    // 如果当前是iframe的模式，需要有一个跳转的url支撑，其不能和path重复，path还是为路由
    frameSrc?: string;
    // current page transition
    transitionName?: string;
    // Whether the route has been dynamically added
    hideBreadcrumb?: boolean;
    // Hide submenu
    hideChildrenInMenu?: boolean;
    // Carrying parameters
    carryParam?: boolean;
    // Used internally to mark single-level menus
    single?: boolean;
    // Currently active menu
    currentActiveMenu?: string;
    // Never show in tab
    hideTab?: boolean;
    // 是否隐藏当前菜单
    hideMenu?: boolean;
    isLink?: boolean;
    // only build for Menu
    ignoreRoute?: boolean;
    // Hide path for children
    hidePathForChildren?: boolean;
  }
}
