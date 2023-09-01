const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  /* 指定如何解析语法。*/
  parser: "vue-eslint-parser",
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      // tsx: true, // Allows for the parsing of JSX
      jsx: true,
    },
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    // 'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.

    "plugin:vue/vue3-recommended",
    // 此条内容开启会导致 全局定义的 ts 类型报  no-undef 错误，因为
    // https://cn.eslint.org/docs/rules/
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // typescript-eslint推荐规则,
    "prettier",
    // 新增，必须放在最后面
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? 1 : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 1 : 0,
    eqeqeq: 2, // 要求使用 === 和 !==
    "no-undef": 2, // 禁用未声明的变量
    "no-var": 2, // 禁止使用 var
    "no-unused-vars": 2, // 禁止出现未使用过的变量

    "no-redeclare": 1, // 禁止多次声明同一变量
    "array-callback-return": 1, // 强制数组方法的回调函数中有 return 语句,Array有几种过滤，映射和折叠的方法。如果我们忘记return在这些回调中写入语句，那可能是一个错误。
    "default-case": 1, // 要求 switch 语句中有 default 分支
    "no-fallthrough": 1, // 禁止 case 语句落空

    "no-use-before-define": 1, // 禁止在变量定义之前使用它们
    "vue/eqeqeq": 2, // 要求使用 === 和 !==
    "vue/require-v-for-key": 1, // 当v-for写在自定义组件上时，它需要同时使用v-bind：key。在其他元素上，v-bind：key也最好写。
    // 关闭此规则 使用 prettier 的格式化规则， 感觉prettier 更加合理，
    // 而且一起使用会有冲突
    "vue/max-attributes-per-line": ["off"],
    // 强制使用驼峰命名
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    "vue/require-default-prop": "off",
    "vue/attribute-hyphenation": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
});
