module.exports = {
  parser: "babel-eslint",
  rules: {
    strict: 0,
    "no-extra-parens": 0,
    "consistent-return": 2,
    "dot-notation": 0,
    "eol-last": 2,
    "eqeqeq": [ 2, "smart" ],
    "max-len": [ 1, 120, 4 ],
    "react/jsx-boolean-value": 1,
    "react/jsx-no-undef": 2,
    "react/jsx-indent": [ 1, 2 ],
    "react/jsx-indent-props": [ 1, 2 ],
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 2,
    "jsx-quotes": 2,
    indent: [ 1, 2 ],
    'linebreak-style': [ 2, "unix" ],
    quotes: [ 1, "double" ],
    semi: [ 1, "never" ],
    "comma-dangle": [ 1, "always-multiline" ],
    "no-extra-parens": 0,
    "consistent-return": 1,
    "dot-notation": 0,
    "eol-last": 2,
    "eqeqeq": [ 2, "smart" ],
    "max-len": [ 1, 120, 4 ],
    "jsx-quotes": 2,
    "no-unexpected-multiline": [ 2 ],
    "space-before-function-paren": [ 1, "always" ],
    "space-before-blocks": [ 1, "always" ],
    "space-in-parens": [ 1, "always" ],
    "spaced-comment": [ 1 ],
    "space-unary-ops": [ 1 ],
    "keyword-spacing": [ 2 ],
    "computed-property-spacing": [ 1, "always" ],
    "key-spacing": [ 1, { mode: "strict" } ],
    "block-spacing": [ 1, "always" ],
    "arrow-spacing": [ 1 ],
    "template-curly-spacing": [ 1, "always" ],
    "object-curly-spacing": [ 1, "always" ],
    "object-curly-newline": [ 1, { multiline: true, minProperties: 5 } ],
    "object-property-newline": [ 1, { allowMultiplePropertiesPerLine: true } ],
    "quote-props": [ 1, "as-needed" ],
    "comma-spacing": [ 1 ],
    "array-bracket-spacing": [ 1, "always" ],
    "space-infix-ops": [ 1 ],
    "no-irregular-whitespace": [ 1 ],
    "no-multi-spaces": [ 1 ],
    "no-mixed-spaces-and-tabs": [ 2 ],
    "no-trailing-spaces": [ 1 ],
    "no-console": [ 1 ],
    "no-useless-computed-key": [ 1 ],
    "no-useless-rename": [ 1 ],
    "prefer-arrow-callback": [ 1, { allowNamedFunctions: true } ],
    "prefer-const": [ 1 ],
    "prefer-spread": [ 1 ],
    "prefer-template": [ 1 ],
    "rest-spread-spacing": [ 1 ],
    "no-var": [ 1 ],
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [ "eslint:recommended", "plugin:react/recommended" ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      impliedStrict: true,
    },
    sourceType: "module",
  },
  plugins: [ "react" ],
}
