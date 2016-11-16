module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    "quotes": ["error", "double", { "allowTemplateLiterals": true }],

    "space-before-function-paren": ["error", "never"],

    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],

    "padded-blocks": 0
  }
}
