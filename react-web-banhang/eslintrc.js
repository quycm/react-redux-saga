module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        semi: 1,
        quotes: [2, 'single'],
        'react/prop-types': 1,
        'react/jsx-max-props-per-line': 1,
        'linebreak-style' : 0,
        'import/no-extraneous-dependencies': 0,
        'class-methods-use-this': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line':0,
        'react/forbid-prop-types': 0,
        'react/require-default-props': 0,
        'prettier/prettier' : ['error']
    },
    plugins: ['prettier']
}