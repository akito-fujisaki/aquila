module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'vue/max-len': ['error', {
      code: 100,
      template: 100,
      comments: 120,
      ignorePattern: '',
      ignoreUrls: true,
      ignoreRegExpLiterals: false
    }]
  }
}
