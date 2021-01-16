module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2020': true,
        'node': true,
        'jest': true
    },
    'extends': 
        ['eslint:recommended',
        'plugin:react/recommended',
        'plugin:cypress/recommended',
        "plugin:jest/recommended"],
    'parserOptions': {
        'ecmaVersion': 12
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'eqeqeq': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': [
            'error', 'always'
        ],
        'arrow-spacing': [
            'error', { 'before': true, 'after': true }
        ],
        'no-console': 0,
    },

};
