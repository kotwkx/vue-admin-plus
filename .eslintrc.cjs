module.exports = {
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended', // 使用 ESLint 推荐的基本规则
    'plugin:vue/vue3-recommended', // Vue 3 推荐规则
    'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
    'plugin:prettier/recommended', // 启用 Prettier，并集成 ESLint 规则
  ],
  plugins: [
    'vue', // Vue 插件
    '@typescript-eslint', // TypeScript 插件
    'import', // Import 插件，用于规范模块导入
    'eslint-comments', // ESLint 注释插件
    'prettier', // Prettier 插件
  ],
  rules: {
    // ESLint 推荐规则和 TypeScript 推荐规则
    ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
    ...require('eslint-plugin-prettier').configs.recommended.rules,
    ...require('eslint-plugin-vue').configs['vue3-recommended'].rules,
    ...require('eslint-plugin-import').configs.recommended.rules,

    // 严格的变量使用规则，确保没有未使用的变量
    '@typescript-eslint/no-unused-vars': ['error'],

    // 关闭 Vue 组件名称必须多单词的规则，以适应单个单词的命名习惯
    'vue/multi-word-component-names': 'off',

    // 强制使用单引号
    quotes: ['error', 'single'],

    // 强制使用分号
    semi: ['error', 'always'],

    // 禁止使用 console
    'no-console': 'warn',

    // 禁止使用 debugger
    'no-debugger': 'warn',

    // 禁止对参数重新赋值
    'no-param-reassign': 'error',

    // 导入顺序规则，确保导入的模块按照一定顺序排列
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        'newlines-between': 'always',
      },
    ],

    // 强制使用箭头函数作为回调函数
    'prefer-arrow-callback': 'error',

    // 禁止使用 var
    'no-var': 'error',

    // 强制对象属性的冒号后面有空格，确保代码的可读性
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // 禁止重复导入同一模块
    'no-duplicate-imports': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 确保 <script setup> 中的变量必须使用
        'vue/script-setup-uses-vars': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // 启用严格的类型检查规则
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
      },
    },
  ],
  settings: {},
};
