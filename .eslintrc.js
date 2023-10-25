module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "plugin:jsdoc/recommended-error"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    //based on airbnb recommendation https://github.com/airbnb/javascript
    "rules": {
        "constructor-super": [
            "error"
        ],
        "for-direction": [
            "error"
        ],
        "getter-return": [
            "error"
        ],
        "no-async-promise-executor": [
            "error"
        ],
        "no-case-declarations": [
            "error"
        ],
        "no-class-assign": [
            "error"
        ],
        "no-compare-neg-zero": [
            "error"
        ],
        "no-cond-assign": [
            "error"
        ],
        "no-const-assign": [
            "error"
        ],
        "no-constant-condition": [
            "error"
        ],
        "no-control-regex": [
            "error"
        ],
        "no-debugger": [
            "error"
        ],
        "no-delete-var": [
            "error"
        ],
        "no-dupe-args": [
            "error"
        ],
        "no-dupe-class-members": [
            "error"
        ],
        "no-dupe-else-if": [
            "error"
        ],
        "no-dupe-keys": [
            "error"
        ],
        "no-duplicate-case": [
            "error"
        ],
        "no-empty": [
            "error"
        ],
        "no-empty-character-class": [
            "error"
        ],
        "no-empty-pattern": [
            "error"
        ],
        "no-ex-assign": [
            "error"
        ],
        "no-extra-boolean-cast": [
            "error"
        ],
        "no-extra-semi": [
            "error"
        ],
        "no-fallthrough": [
            "error"
        ],
        "no-func-assign": [
            "error"
        ],
        "no-global-assign": [
            "error"
        ],
        "no-import-assign": [
            "error"
        ],
        "no-inner-declarations": [
            "error"
        ],
        "no-invalid-regexp": [
            "error"
        ],
        "no-irregular-whitespace": [
            "error"
        ],
        "no-loss-of-precision": [
            "error"
        ],
        "no-misleading-character-class": [
            "error"
        ],
        "no-mixed-spaces-and-tabs": [
            "error"
        ],
        "no-new-symbol": [
            "error"
        ],
        "no-nonoctal-decimal-escape": [
            "error"
        ],
        "no-obj-calls": [
            "error"
        ],
        "no-octal": [
            "error"
        ],
        "no-prototype-builtins": [
            "error"
        ],
        "no-redeclare": [
            "error"
        ],
        "no-regex-spaces": [
            "error"
        ],
        "no-self-assign": [
            "error"
        ],
        "no-setter-return": [
            "error"
        ],
        "no-shadow-restricted-names": [
            "error"
        ],
        "no-sparse-arrays": [
            "error"
        ],
        "no-this-before-super": [
            "error"
        ],
        "no-undef": [
            "error"
        ],
        "no-unexpected-multiline": [
            "error"
        ],
        "no-unreachable": [
            "error"
        ],
        "no-unsafe-finally": [
            "error"
        ],
        "no-unsafe-negation": [
            "error"
        ],
        "no-unsafe-optional-chaining": [
            "error"
        ],
        "no-unused-labels": [
            "error"
        ],
        "no-unused-vars": [
            "error"
        ],
        "no-useless-backreference": [
            "error"
        ],
        "no-useless-catch": [
            "error"
        ],
        "no-useless-escape": [
            "error"
        ],
        "no-with": [
            "error"
        ],
        "require-yield": [
            "error"
        ],
        "use-isnan": [
            "error"
        ],
        "valid-typeof": [
            "error"
        ],
        "space-in-parens": [
            "error"
        ],
        "no-var": [
            "error"
        ],
        "object-shorthand": [
            "error"
        ],
        "quote-props": [
            "error",
            "always"
        ],
        "no-array-constructor": [
            "error"
        ],
        "prefer-destructuring": [
            "error"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "prefer-template": [
            "error"
        ],
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "no-eval": [
            "error"
        ],
        "func-style": [
            "error",
            "declaration"
        ],
        "no-loop-func": [
            "error"
        ],
        "prefer-rest-params": [
            "error"
        ],
        "default-param-last": [
            "error"
        ],
        "no-new-func": [
            "error"
        ],
        "prefer-spread": [
            "error"
        ],
        "no-useless-constructor": [
            "error"
        ],
        "class-methods-use-this": [
            "error"
        ],
        "dot-notation": [
            "error"
        ],
        "prefer-exponentiation-operator": [
            "error"
        ],
        "no-use-before-define": [
            "error"
        ],
        "eqeqeq": [
            "error"
        ],
        "no-else-return": [
            "error"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-new-wrappers": [
            "error"
        ],
        "camelcase": [
            "error"
        ]

    }
}
