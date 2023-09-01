// @see: https://stylelint.docschina.org/user-guide/rules/
module.exports = {
    extends: [
        'stylelint-config-standard', //Stylelint的标准可共享配置规则
        'stylelint-config-prettier', //关闭所有不必要或可能与Prettier冲突的规则
        'stylelint-config-recommended-less', //less的推荐可共享配置规则
        'stylelint-config-standard-vue'
    ],
    plugins: ['stylelint-order'], //配置 stylelint css 属性书写顺序插件
    // 不同格式的文件指定自定义语法
    overrides: [
        {
            files: ['**/*.(less|css|vue|html)'],
            customSyntax: 'postcss-less'
        },
        {
            files: ['**/*.(html|vue)'],  // 扫描 .vue/html 文件中的 <style> 标签内的样式
            customSyntax: 'postcss-html'
        }
    ],
    ignoreFiles: [
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
        '**/*.json',
        '**/*.md',
        '**/*.yaml'
    ],
    rules: {
        'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
        'selector-pseudo-element-no-unknown': [
            //禁止未知的伪元素选择器。
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ],
        'selector-pseudo-class-no-unknown': [
            //禁止未知的伪类选择器
            true,
            {
                ignorePseudoClasses: ["global", "v-deep", "deep"]
            }
        ],
        "function-url-quotes": "always", // URL 的引号 "always(必须加上引号)"|"never(没有引号)"
        "property-no-unknown": null, // 禁止未知的属性
        "no-empty-source": null, // 禁止空源码
        'declaration-colon-space-before': 'never', //要求在声明块的冒号之前不能有空白符
        'rule-empty-line-before': 'never', // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行)"
        "font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
        // 指定样式的排序
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'justify-content',
            'align-items',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'font-size',
            'font-family',
            'text-align',
            'text-justify',
            'text-indent',
            'text-overflow',
            'text-decoration',
            'white-space',
            'color',
            'background',
            'background-position',
            'background-repeat',
            'background-size',
            'background-color',
            'background-clip',
            'border',
            'border-style',
            'border-width',
            'border-color',
            'border-top-style',
            'border-top-width',
            'border-top-color',
            'border-right-style',
            'border-right-width',
            'border-right-color',
            'border-bottom-style',
            'border-bottom-width',
            'border-bottom-color',
            'border-left-style',
            'border-left-width',
            'border-left-color',
            'border-radius',
            'opacity',
            'filter',
            'list-style',
            'outline',
            'visibility',
            'box-shadow',
            'text-shadow',
            'resize',
            'transition'
        ]
    }
};
