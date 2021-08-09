module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    plugins: ['react'],
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: false,
        codeFrame: false
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        'no-unused-vars': [2, { args: 'none' }],
        'react/prop-types': ['warn'],
        'max-len': ['error', { code: 150 }],
        'prefer-promise-reject-errors': ['off'],
        'react/jsx-filename-extension': ['off'],
        'no-return-assign': ['off'],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                semi: true,
                trailingComma: 'none',
                singleQuote: true,
                printWidth: 120,
                tabWidth: 4,
                bracketSpacing: true,
                jsxSingleQuote: true
            }
        ]
    }
};
