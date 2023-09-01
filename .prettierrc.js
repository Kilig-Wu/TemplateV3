module.exports = {
    // 一行的字符数，如果超过会进行换行，默认为80
    printWidth: 1000, 
    // 一个tab代表几个空格数，默认为2
    tabWidth: 4, 
    // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
    useTabs: false, 
    //在语句结尾处加分号
    semi: true,
    // 字符串是否使用单引号，默认为false，使用双引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 去除对象最末尾元素跟随的逗号
    trailingComma: 'none',
    // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    bracketSpacing: true,
    // 在jsx中把'>' 是否单独放一行
    jsxBracketSameLine: false,
    // 当超出print width（上面有这个参数）时就折行
    proseWrap: 'always',
    // html折行规则
    htmlWhitespaceSensitivity: 'css',
    //(x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    arrowParens: 'avoid'
};
