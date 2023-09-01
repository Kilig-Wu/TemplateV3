// import { ConfigEnv, UserConfigExport, loadEnv } from "vite";
import { defineConfig } from "vite";

import { join } from "path";
import { getPluginsList} from './build/plugins'

function resolve(dir: string): string {
  return join(__dirname, dir); //可以用process.cwd() path.join()和path.resolve()
}

// https://vitejs.dev/config/
// export default ({}: ConfigEnv): UserConfigExport => {
  export default defineConfig(() => {
  //环境变量
  // const { VITE_PORT } = loadEnv(mode, process.cwd());

  return {
    plugins: getPluginsList(),
    resolve: {
      alias: {
        "@": resolve("/src"),
        "#": resolve("/types"),
        "@views": resolve("/src/views"),
        "@api": resolve("/src/api"),
      },
    },
    css: {
      //开启开发环境css sourceMap
      devSourcemap:true,
    },
    build: {
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4096,
      rollupOptions: {
        output: {
          //分包策略
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
            antd: ['ant-design-vue', '@ant-design/icons-vue', 'dayjs'],
            // lodash: ['loadsh-es'],
          },
        },
      },
    },
    // 服务端渲染
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: 4200,
      host: "0.0.0.0",
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {}
    },
  };
});
