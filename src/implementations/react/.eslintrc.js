module.exports = {
  'extends': './node_modules/eslint-config-airbnb/.eslintrc',
  'parser': 'babel-eslint',
  'settings': {
    'import/resolver': {
      'babel-module': {},
      'webpack': true
    }
  },
  globals: {
    'describe': true,
    'document': true,
    'expect': true,
    'it': true,
    'jest': true
  },
  plugins: [
    "react"
  ],
  'rules': {
    'class-methods-use-this': 0,
    'max-len': [2, { code: 100 }],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': ["error", {"devDependencies": ["**/*.test.js", "src/stories/**/*"]}],
    'react/jsx-filename-extension': 0,
    "jsx-a11y/href-no-hash": "off",
    'import/no-named-as-default': 0,
    'no-unused-expressions': ["error", { allowTernary: true }]
  }
};
