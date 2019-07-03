module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": ["error", 2],
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-filename-extension": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": "off",
    "import/no-unresolved": ["error", {ignore: ['enzyme', '@storybook/addon-knobs/react']}],
    "react/jsx-max-props-per-line": [1, { maximum: 1 }],
    "no-console": ["error", { allow: ["error"] }],
    "quotes": ["error", "single"],
    "react/no-array-index-key": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/interactive-supports-focus": "warn",
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-react-hooks',
    'jest',
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx", ".d.ts"]
      }
    },
  },
  globals: {
    document: true,
    window: true,
    localStorage: true,
    WebSocket: true,
  },
  env: {
    "jest/globals": true
  }
};
