export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'airbnb',
        "plugin:react/recommended",
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        "plugin:@typescript-eslint/recommended",
        'plugin:prettier/recommended'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'prettier'
    ],
    "rules": {
    }
}
