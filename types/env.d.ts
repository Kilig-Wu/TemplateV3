/// <reference types="vite/client" />

// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }

//环境变量
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string; //网站标题
  readonly VITE_APP_BASE_API: string; //接口前缀
  readonly VITE_BASE_PATH: string; //打包路径
  readonly VITE_DROP_DEBUGGER: boolean; //是否删除debugger
  readonly VITE_DROP_CONSOLE: boolean; //是否删除console.log
  readonly VITE_SOURCEMAP: boolean; //是否sourcemap
  readonly VITE_OUT_DIR: string; //输出路径
  // 更多环境变量
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
