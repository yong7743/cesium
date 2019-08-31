'use strict';

module.exports = {
    extends: './index.js',
    env: {
        amd: true,
        browser: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'no-implicit-globals': 'error'
    }
};
