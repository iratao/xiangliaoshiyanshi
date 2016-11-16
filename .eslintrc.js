module.exports = {
    "extends": "airbnb",
    'rules': {
        'prefer-const': 0,
        'no-param-reassign': [2, { props: false }],
        'no-underscore-dangle': [2, {
            allowAfterThis: true,
            allowAfterSuper: true,
        }],
        'react/jsx-filename-extension': 0,
        'class-methods-use-this': "off",
        // concerned
        'react/forbid-prop-types': "off",
        'react/no-unused-prop-types': "off",
        'no-plusplus': "off",
        'no-bitwise': "off",
        // temporary disabled, should be enabled later
        'jsx-a11y/no-static-element-interactions': "off",
    },
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};
