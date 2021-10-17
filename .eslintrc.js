module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  },
  overrides: [
    {
      files: ['test/**/*.spec.js'],
      extends: [
        'plugin:jest/recommended'
      ]
    },
    {
      files: ['./e2e/**/*.spec.js'],
      extends: [
        'plugin:cypress/recommended'
      ]
    }
  ]
}
