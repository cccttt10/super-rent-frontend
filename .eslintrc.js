// prettier-ignore
module.exports = {
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'plugins': [ 'simple-import-sort' ],
    'env': {
        'node': true,
        'es6': true
    },
    'parserOptions': {
        'ecmaVersion': 9,
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'overrides': [
        // {
        //     'files': ['src/util/log.js'],
        //     'rules': {
        //         'no-console': 'off'
        //     }
        // }
    ],
    'rules': {
        'simple-import-sort/sort': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        'react/prop-types': 'off',
        'no-var': 'error',
        'require-await': 'error',
        'no-trailing-spaces': 'error',
        'eqeqeq': 'error',
        'no-console': 'error',
        'camelcase': 'error',
        'no-unused-vars': [
            'error',
            { 'varsIgnorePattern': 'React', 'argsIgnorePattern': '^(resource|props)$' },
        ]
    },
    'settings': {
        'react': {
            'createClass': 'createReactClass', 
            'pragma': 'React',  
            'version': 'detect', 
            'flowVersion': '0.53'
        },
        'propWrapperFunctions': [
            'forbidExtraProps',
            { 'property': 'freeze', 'object': 'Object' },
            { 'property': 'myFavoriteWrapper' }
        ],
        'linkComponents': [
            'Hyperlink',
            { 'name': 'Link', 'linkAttribute': 'to' }
        ]
    }
};
