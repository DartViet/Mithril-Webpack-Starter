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
    "rules": {
        "space-in-parens": ["error", "always"],
        "no-var": ["error", "always"],
        "no-new-object": ["error", "always"],
        "object-shorthand": ["error", "always"],
        "quote-props" : ["error", "always"],
        "no-array-constructor" : ["error", "always"],
        "prefer-destructuring": ["error", "always"], //should be tested more 
        "quotes": ["error", "double"],
        "prefer-template" : ["error"],
        "template-curly-spacing": ["error", "always"],
        "no-eval": ["error"],
        "no-useless-escape": ["error"],
        "func-style": ["error", "declaration"],

    }
}
