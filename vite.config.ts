// import { defineConfig, loadEnv } from "vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import VueSetupExtend from 'vite-plugin-vue-setup-extend-plus'
import UnoCSS from 'unocss/vite'

function resolve(dir: string): string {
  return join(__dirname, dir); //可以用process.cwd() path.join()和path.resolve()
}

// https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
  export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd());
  // console.log(env.VITE_APP_TITLE);  //得到环境变量
  return {
    plugins: [
      vue(),
      AutoImport({
        //自动导入第三方库或组件 不需要手动编写import {xxx} from vue
        // dts: true, // 如果使用 Typescript，需要设置 dts 为 true 插件会在项目根目录生成类型文件 auto-imports.d.ts ，确保该文件在 tsconfig 中被 include
        dts: "types/auto-imports.d.ts",
        dirs: ["src/hooks", "src/composables", "src/store/modules"],
        imports: [
          "vue",
          "vue-router",
          "@vueuse/core",
          "pinia",
          // 其他需要自动导入的库
        ],
      }),
      Components({
        dts: "types/components.d.ts", // 输出文件，里面都是一些import的组件键值对
        dirs: ["src/components"], //让src/components里的组件不用再手动引入
        // 配置需要自动注册的组件
        resolvers: [
           //ant-design-vue不用手动按需引入
          AntDesignVueResolver({ resolveIcons: true, importStyle: false }),
        ],
      }),
      VueSetupExtend(),
      UnoCSS()
    ],
    resolve: {
      alias: {
        "@": resolve("/src"),
        "#": resolve("/types"),
        "@views": resolve("/src/views"),
        "@api": resolve("/src/api"),
      },
    },
    css: {
      devSourcemap:true,
    }
  };
});
